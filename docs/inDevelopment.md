---
id: inDevelopment
title: In Development
---


# Define the classification model

Expert/Experimental property: Define classification model (optional - default model for each devicePosition will be overwritten)

```swift

let device = Device(deviceID: ""
       deviceType: .iPhone,
       ...
---->  classificationModel: .specific(1915)
       )
       
// options: .belly, .leftUpperArm, .chest, specific(TestRunID) 
```

Note: On the simulator the sdk only works with belly-based classification models such as .belly.

# DevicePositionClassification

This function enables the sensor position to be determined during running/jogging.
## Start device position classification while running
```swift
// Start classification of device position and orientation with timeout
ClassificationControlLayer.shared.startPositionClassificationWithTimeout(
    timeoutSeconds: 5,
    isConnected: {
        // Do something if connected successful
        }
    }, connectingFailed: { error in
        // Do something if connecting failed
        }
}).done { stats in
    // Do something with the stats
}
```
Note: If you start movement classification before device position classification timeout ends → automatic stopping of device position classification and return unknown position and unknown orientation

## Stats 
```swift
typealias DevicePositionOrientation = (DevicePosition, DeviceOrientation, String)
    // (classified device positon, 
    // classified device orientation,
    // json string with collected statstic data)
```
