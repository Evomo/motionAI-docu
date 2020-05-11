---
id: getStartedSwift
title: Swift
---

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);


## Register for licence key
To use our SDK a license key is required which is generated after a short registration and your acceptance of the [license terms].

[<Highlight color="#FF8E34">**--> Register to get the license key**</Highlight>](https://subscriptions.zoho.eu/subscribe/a86776477592bad75f6bc8765d4c5c76a57851cb64dfe979651bdda4a1c7d344/beta)

Our beta-sdk is actually completely free for non commercial usage/testing. See details in the [license terms]. 

>Please contact us for commercial use. info@evomo.de 

[license terms]: https://www.evomo.de/license-agreement

---

## How to install

There are currently two different versions of the SDK. 
- Basic - smartphone sensor api only
- Movesense - smartphone sensors + Movesense api
- ClassificationOnly - Feed external sensor data and classify it

### CocoaPods

The Evomo MoitionAI SDK consist of a precompiled Cocoa Touch framework bundled in a XCFramework.

1. Install the CocoaPods-Beta

>Important: The CocoaPods version 1.9.1. or newer is required, because of the new XCFramework-Bundle.

```shell
# Install the newest cocoapods version
sudo gem install cocoapods
```

2. Add the evomo private specs repo 

```shell
# Evomo private specs repo source
source 'https://bitbucket.org/evomo/evomopodsrelease.git'

# Standard cocoapods specs source
source 'https://github.com/CocoaPods/Specs.git'
```

3. Add the pod to your podfile with following line:

```shell
# Basic is default
pod "EvomoMotionAI/Basic"

# or

# Movesense
pod "EvomoMotionAI/Movesense"

# or

# ClassificationOnly
pod "EvomoMotionAI/ClassificationOnly"
```

- **Install**: Navigate to the project folder and run **pod install** on the console.
- **Update**: Upgrade the evomo cocoa pod if needed with the shell command **pod update** in your Xcode project folder. Then go into the xCode workspace andclean the project build folder with: **Product > Clean Build Folder**


[**Podfile example**](https://github.com/Evomo/evomoExampleApp/blob/master/Podfile)

### Apple app store requirements (Movesense)
For a successful approval of your app in the Apple app store, the following description entries must be made:
```shell
NSBluetoothAlwaysUsageDescription : "We use Bluetooth to communicate with extern motion sensors to make motion detection possible." (This is a example)

NSBluetoothPeripheralUsageDescription : "This app requires Bluetooth to connect to an external motion sensor." (This is a example)
```

This messages inform the user that this app will use Bluetooth to connect with the external Movesense sensor. [Details](https://developer.apple.com/documentation/bundleresources/information_property_list/nsbluetoothalwaysusagedescription)

---
## API - Overview

### Initialize and configure
```swift
import EvomoMotionAI

// Init the ClassificationControlLayer
let controlLayer = ClassificationControlLayer.shared

// Declare licenseID string once (You will receive the license key from Evomo after agreeing to the license conditions.)
ClassificationControlLayer.shared.setLicense(licenseID: licenseID)

// Define sensor devices
let devices = [Device(deviceID: "",
                      deviceType: .iPhone,
                      devicePosition: .leftUpperArm, 
                      deviceOrientation: .buttonDown)]
                             
// Subscribe to the classified movements
controlLayer.movementHandler = { movement in
	// Do something with the classified movements in time
}

// Handle heart rate changes
ClassificationControlLayer.shared.heartRateSubHandler = { hr in
	// Do something with the heart rate
}

// Handle device events
ClassificationControlLayer.shared.deviceEventHandler = { deviceEvent in
    let (device, event) = deviceEvent
    
    switch event {
    case let .dataStraming(state):
        // Will be triggered on data streaming state change (Bool)
        // dataStraming = true if sensor data received in the last 0.2 seconds
        print("\(state ? "data streaming" : "data stream lost")")
        
    case let .connected(connected):
        // Will be triggered if the device successfully connect or disconnect
        print("\(connected ? "connected" : "disconnected")")
        
    case let .energyPercent(energyPercent):
        // Implemented for movesense devices (Apple devices dont return a energy level)
        // The energy level will always emit on after connecting to the device.
        print("Energy \(Int(energyPercent * 100)) %"
        
    case let .softwareVersion(version):
        // not implemented now
        // Will return the software version of the device after connecting
        print("OS/FW - \(version)")
    }
}

```

### Start and stop
```swift
// Start movement classification
ClassificationControlLayer.shared.start(
    devices: devices,
    isConnected: {
        print("--- All devices connected ---")
}, isStarted:{
    print("--- All devices started ---")
}, isFailed: { error in
    print("Start classification failed: \(error)")
})

wait(10)

// Stop movement classification
_ = ClassificationControlLayer.shared.stop()

```
