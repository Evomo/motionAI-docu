---
id: scan-movesense
title: How to scan for Movesense sensors?
---

## Scan for Movesense ble devices

```swift
import Movesense
import PromiseKit

// start scan
firstly {
	when(resolved: self.movesense.startScan({ _ in
		
		// if new device found
		// fetch and display devices
		let bleDevices = self.movesense.getDevices().map { $0.serial }
		
	}.done {_ in
		// if scan done
	}

// handle scan events
self.movesense.setHandlers(
            deviceConnected: { deviceSerial in
                print("Device connected: \(deviceSerial)")
        },
            deviceDisconnected: { deviceSerial in
                print("Device disconnected: \(deviceSerial)")
        },
            bleOnOff: { (state) in
                print("BLE state changed: \(state)")
        })
```

Check the [exampleApp](https://github.com/Evomo/evomoExampleApp) for a better understanding of the scan process.
