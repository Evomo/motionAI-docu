---
id: getStartedUnity
title: Unity
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

## Requirements

- The EvomoUnitySDK is currently only available for iOS.
- The EvomoUnitySDK requires a minimum Xcode 11.4 with Swift 5.2
- The EvomoUnitySDK requires a minimum iOS target of 12.1.
- The EvomoUnitySDK only supports 64 bit builds.

## How to install

Simply Download and import the Evomo MotionAI unity package.
[<Highlight color="#FF8E34">**Download release on Github**</Highlight>](https://github.com/Evomo/unityMotionAIPlugin/releases)

Import Package in Unity with Menu: Assets > Import Package > Custom Package...


## Usage

### Init the Evomo Sdk

Before tracking movement events, you must init the Evomo SDK. Here is an example of how you could do that using the Awake method of a script:

```
private void Awake()
{
    Evomo.Init(EvomoReady);
}

private void EvomoReady()
{
    Debug.Log("Evomo ready to track movements!");
    //Continue with setting up your game stuff
}

```

### Track Movements

Before you start tracking movements, you should subscribe to the events that you are interested in.

here is a simple example:

```
private void SubscribeToEvomoEvents()
{
    Evomo.OnLeft.AddListener(OnLeft);
    Evomo.OnRight.AddListener(OnRight);
    Evomo.OnJump.AddListener(OnJump);
    Evomo.OnDuck.AddListener(OnDuck);
}

private void OnLeft()
{
    //move character left
}

private void OnRight()
{
    //move character right
}

private void OnJump()
{
    //make character jump
}

private void OnDuck()
{
    //make character duck
}
```



To start and stop tracking movements, use the following methods:

```
Evomo.StartTracking();

Evomo.StopTracking();
```


## Building

### 1: Export the xcode project from unity. 

Be sure to set the minimum iOS version to 12.1 and the supported arch to ARM64 only in your unity player settings before exporting.

### 2: Enable swift in the xcode project. 

Because the exported project is Objective-C based you must open the exported project and manually add the build setting 'SWIFT_VERSION' = 5 to your targets build settings.

>Go to the Build Settings of your project > Click on "+" > Add User-Defined Setting > Add SWIFT_VERSION in first and 5 in second column

**IMPORTANT NOTE:** Unity have recently changed the way that the exported Xcode project is organised. If one of your targets is named 'UnityFramework' then you must add the setting to that target. 

If you do not see a target named 'UnityFramework' then you must add the setting to the target named 'Unity-iPhone'.

### Cocoa Pods

#### 3.1: Install Cocoa Pods on your Mac

```
sudo gem install cocoapods
```

#### 3.2: Add the Evomo cocoa pod

Run pod init in the project and add the following cocoa pod to the targets of your pod file:

```
pod 'EvomoUnitySDK'
```

Add an extra source to the top of the podfile:

```
# Evomo private specs repo source
source 'https://bitbucket.org/evomo/evomopodsrelease.git'
```

**IMPORTANT NOTE:** 

Once again you must check if you have a target named 'UnityFramework' and if so add the pod to that target only. If you do not have that target in your podfile then you should add the pod to the target named 'Unity-iPhone' only. 

**Example Podfile:**
```
# Evomo private specs repo source
source 'https://bitbucket.org/evomo/evomopodsrelease.git'

# Standard cocoapods specs source
source 'https://github.com/CocoaPods/Specs.git'

# Uncomment the next line to define a global platform for your project
platform :ios, '12.1'

target 'EvomoUnitySDK' do
  # Comment the next line if you don't want to use dynamic frameworks
  use_frameworks!
	
  pod "EvomoMotionAI/Basic"

  # Pods for EvomoUnitySDK
end

```

#### 3.3: Install pods

Navigate to the project folder and run **pod install** on the console. From then on use the generated project workspace and you should be good to go.

This process only needs to be done the first time you export from unity. For following builds you can use the 'append' option.

If you use the replace option then you will need to follow these steps again.

#### 3.4: Optional: Update Evomo SDK 

Upgrade the evomo cocoa pod if needed with the shell command **pod update** in your Xcode project folder.

Then go into the Xcode workspace and **clean** the project build folder with: Product > Clean Build Folder

### Hint

To avoid manual inputs in Apple App Store Connect setup the encryption config.

Unless your app is using some special encryption you can simply add Boolean a key to your Info.plist with name ITSAppUsesNonExemptEncryption and value NO.