### B) Manual XCFramework import

1. [Download the newest XCFramework file](https://bitbucket.org/evomo/evomomotionaibinary/downloads/)

2. Extract zip file and choose between BASIC and MOVESENSE bundle.

3. Drag & drop .xcframework manually into your project's target
![xcframework_drag_n_drop](/motionAI-docu/img/xcframework_drag_n_drop.gif)

4. Embed & sign .xcframework in your project's target
![xcframework_embed_sign.png](/motionAI-docu/img/xcframework_embed_sign.png)


# example app

import useBaseUrl from '@docusaurus/useBaseUrl';


<img
  alt="Screen"
  src={useBaseUrl('img/StartScreen.png')}
/>;

```swift
import EvomoMotionAI

// Define sensor devices
let devices = [Device(deviceID: "",
                      deviceType: .iPhone,
                      devicePosition: .leftUpperArm, 
                      deviceOrientation: .buttonDown)]
                             
// Subscribe to the classified movements
controlLayer.movementHandler = { movement in
}

// Handle heart rate changes
ClassificationControlLayer.shared.heartRateSubHandler = { hr in
}

// Start movement classification
ClassificationControlLayer.shared.start(
    devices: devices,
    isConnected: {
        print("--- All devices connected ---")
}, isStarted:{
    print("--- All devices started ---")
}, isFailed: { error in
    print("Start classification failed: \(error)")

```
