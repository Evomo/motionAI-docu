---
id: documentation
title: Swift API
sidebar_label: Swift API
---

### Initialise the EVOControlLayer
```swift
import EvomoMotionAI

// Init the ClassificationControlLayer
let controlLayer = ClassificationControlLayer.shared
```

## Setup
### LicenseID
```swift
// Declare licenseID string once (You will receive the license key from Evomo after agreeing to the license conditions.)
ClassificationControlLayer.shared.setLicense(licenseID: "licenseID-String")
```

### Source device
```swift
// Define sensor device
controlLayer.device = Device(deviceID: "", // Device ID 
                             deviceType: .iPhone, // Device type
                             devicePosition: .Belly, // Position of the smartphone
                             deviceOrientation: .buttonRight) 
```
#### iPhone
```swift
Device(deviceID: "", // id for iphone device not relevant
	   deviceType: .iphone,
       ..)
```

#### Movesense

deviceID: Ident string (serial number) of the movesense sensor

```swift
Device(deviceID: "175030001022", 
	   deviceType: .movesense,
	   ..)
```

#### Artificial/Simulator
Simulate device sensor by loading a workout file. (helpful to debug or test in simulator)

Note: Wait about 5 seconds for the first movement after starting. The artificial source for simulation only works with belly-based classification models.

Default WorkoutFile is JumpingJack. If you want to select another WorkoutFile -> use the detail property of the device.

If you use the simulator the device is automatically changed to the artificial source.

```swift
Device(deviceType: .iPhone,
	   devicePosition: .belly, // !!!
	   deviceOrientation: .buttonRight, // !!!
       ...
       
       details: WorkoutFile.squats.rawValue
       )
```
### Subscriptions
There are three main subscription handler:

1. movementHandler - executes on a new classified movement

```swift
// Subscribe to the classified movements
controlLayer.movementHandler = { movement in
	// Do something with the classified movements in time
}
```

2. heartRatehandler - executes on a heart rate value change

```swift
// Subscribe to the classified movements
controlLayer.movementHandler = { movement in
	// Do something with the classified movements in time
}
```

3. deviceEventHandler - execute on new device event

```swift
// Handle device events
ClassificationControlLayer.shared.deviceEventHandler = { deviceEvent in
    let (device, event) = deviceEvent
    
    switch event {
    case let .dataStraming(state):
        // Will be triggered on data streaming state change (Bool)
        // dataStraming = true if sensor data received in the last 0.2 seconds
        
    case let .connected(connected):
        // Will be triggered if the device successfully connect or disconnect
        
    case let .energyPercent(energyPercent):
        // Implemented for movesense devices (Apple devices dont return a energy level)
        // The energy level will always emit on after connecting to the device.
        
    case let .softwareVersion(version):
        // not implemented now
        // Will return the software version of the device after connecting
    }
}

// types
public typealias DeviceEvent = (Device, DeviceStateChange)


public enum DeviceStateChange: Equatable {
    case energyPercent(Double)
    case dataStraming(Bool)
    case connected(Bool)
    case softwareVersion(String)
}
```

## Start and stop movement classification

```swift

// Start movement classification
ClassificationControlLayer.shared.start(
	lookingForMovementType: nil,
	isConnected: {
		// Do something if connected successful
	}, connectingFailed: { error in

		// Do something if connecting failed
	})

// Stop movement classification
_ = ClassificationControlLayer.shared.stop()
```
## Models

### Device
```swift

public struct Device {

    public var deviceID: String
    public let deviceType: DeviceType
    public let devicePosition: DevicePosition
    public let deviceOrientation: DeviceOrientation
    public let deviceForward: Bool = true
    public let heartRate: Bool // if true -> record heartRate
    public var classificationModel: String // customize classification model
    public var isSimulated: Bool = false
    public var details: String // set WorkoutFile.rawValue to select a file for simulation mode
}
```
### DeviceType
```swift
enum DeviceType: String {
    case iPhone = "iPhone"
    case movesense = "Movesense"
    case appleWatch = "Apple Watch"
}
```
### DevicePosition
```swift
enum DevicePosition: String {
    case unknown = "Unknown"
    case leftWrist = "Left Wrist"
    case rightWrist = "Right Wrist"
    case leftThigh = "Left Thigh"
    case rightThigh = "Right Thigh"
    case belly = "Belly"
    case neck = "Neck"
    case leftUpperArm = "Left Upper Arm"
    case rightUpperArm = "Right Upper Arm"
    case chest = "Chest"
    case leftFoot = "Left Foot"
    case rightFoot = "Right Foot"
}
```
### DeviceOrientation
```swift
enum DeviceOrientation: String {
    case unknown = "Unknown"
    case crownLeft = "CrownLeft"
    case crownRight = "CrownRight"
    case buttonUp = "ButtonUp"
    case buttonDown = "ButtonDown"
    case buttonRight = "ButtonRight"
    case buttonLeft = "ButtonLeft"
}
```

### WorkoutFile
```swift
enum WorkoutFile: String {
    case jumpingJacks = "20JumpingJacks"
    case squats = "20SquatsMovingArms"
    case sixerSets = "6erSets"
    case running = "running"
}
```

### Movement
```swift
public struct Movement {

    public let typeID: Int // This represents the Category ID at the Moment.
    public var typeLabel: String
    public let start: Date
    public var end: Date
    public var durationPositive: Double?
    public var durationNegative: Double?
    public var gVelAmplitudePositive: Double?
    public var gVelAmplitudeNegative: Double?
    public var amplitude: Double?

}
```

### DeviceStateChange
```swift
public enum DeviceStateChange: Equatable {
    case energyPercent(Double)
    case dataStraming(Bool)
    case connected(Bool)
    case softwareVersion(String)
}
```

## Error types

```swift
public enum DeviceStateChange: Equatable {
    case energyPercent(Double)
    case dataStraming(Bool)
    case connected(Bool)
    case softwareVersion(String)
}
```



## Scan for Movesense ble devices

[Guide](scan-movesense)
