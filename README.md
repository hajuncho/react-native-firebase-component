# react-native-firebase-component
### ð¨âð¨âð¦ 
# ìì£¼ ê°ë¨íê³  ì¬ì´ íì´ì´ë² ì´ì¤ í¸ì¬ìë¦¼


# firebase v6 All

 íì node package List


 
 @react-native-firebase/app

import messaging from "@react-native-firebase/messaging";

import PushNotification from "react-native-push-notification";

import PushNotificationIos from "@react-native-community/push-notification-ios";

KR

ì¬ì©ë²


# ìì íì¼

android/app/build.gradle
android/build.gradle


# FireBaseConsol
íë¡ì í¸ ìì±ë° ê¸°ë³¸ì¤ì 

-- íìíì¼


android/app/google-services.json

root/googleService-Info.plist


ìëë¡ì´ë ë°ê¸

í¨í¤ì¹ ë¤ìì APP/APP/SRC/AndroidManifest.xml 
íì¼ ìë¨ì package ë¤ìê³¼ ëê°ì´í´ì£¼ì¸ì :D

ìì´í° ë°ê¸

IOS ë²ë¤ID ì¤ì 
Xcode -> General Tab
Bundle Identifier BundleID ID ë¥¼ë£ì´ì£¼ì¸ì!
googleService-Info.plist ë¤ì´ë¡ë

google-services.json íì¼ì  android/app í´ë ììì ë£ì´ì£¼ì¸ì

googleService-Info.plist íì¼ì ë£¨í¸ ëë í°ë¦¬ ììì ë£ì´ì£¼ì¸ì.

# android
```sh
dependencies - 
android/buld.gradle

   ëíëì ìª½ì ì¶ê°íì¬ì£¼ì¸ì
  [+] classpath 'com.google.gms:google-services:4.3.3'
 
android/app/build.gradle

  ìµìë¨ì ì¶ê°íì¬ì£¼ì¸ì
  
  [+] apply plugin: 'com.google.gms.google-services'  
```

# IOS



ê¸°ë³¸ê²½ë¡ì ë£ì´ì£¼ì¸ì 

IOS SDK ì¸í

/ios/ë¹ì ìíë¡ì í¸/AppDelegate.m íì¼ì ì´ì´ì£¼ì¸ì.
#import <Firebase.h>

didFinishLaunchingWithOptions ìì 


``` sh
#import <Firebase.h> 


ì¶ê°í´ì£¼ì¸ì

if ([FIRApp defaultApp] == nil) {
    [FIRApp configure];
  }
  ```
  
  
  
  ```sh
  cd ios/
pod install --repo-update
cd ..
npx react-native run-ios
```
ì´ì  ì¬ì©í´ë³¼ê¹ì!?


# ê¸°ë¥ ì ê³µ [ì¶ê°ê¸°ë¥ í¨ì¹ìì ]







# ê¸°ë³¸ ì¬ì©ë²
```sh
# ë¤ìê³¼ ê°ì ë°©ë²ì¼ë¡ ë©ì¸ì§ ìë¦¼ì ë°ììììµëë¤

const App = () => {
  return (
    <>
      <Fbcomponent />
      <View>
        <Text>íì¤í¸1</Text>
      </View>
    </>
  );
};

```
```sh
# ë¤ìê³¼ ê°ì ë°©ë²ì¼ë¡ token ìì·¨ë í ìììµëë¤.
import Fbcomponent, {getFcmToken} from '@hajun/react-native-firebase-component';

getFcmToken ìì fcmtoken ì´ë¤ì´ììµëë¤! í´ë¹ë¶ë¶ì íì©íì¬ ëìì í¹ì í´ë³´ìì.

```


