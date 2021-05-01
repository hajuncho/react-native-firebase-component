# react-native-firebase-component
### 👨‍👨‍👦 
# 아주 간단하고 쉬운 파이어베이스 푸쉬알림

필요 node package List

@react-native-community/push-notification-ios
react-native-push-notification
@react-native-firebase/messaging

KR

사용법


# 수정파일

android/app/build.gradle
android/build.gradle


# FireBaseConsol
프로젝트 생성및 기본설정

# 필요파일
android/app/google-services.json


# 패키치 네임은

APP/APP/SRC/AndroidManifest.xml 파일 상단의 package 네임과 똑같이해주세요 :D

google-services.json
발급

# android
google-services.json 파일을  app 폴더 안속에 넣어주세요


# IOS

IOS 번들ID 설정
Xcode -> General Tab
Bundle Identifier BundleID ID 를넣어주세요!

googleService-Info.plist 다운로드

기본경로에 넣어주세요 

IOS SDK 세팅

/ios/당신의프로젝트/AppDelegate.m 파일을 열어주세요.
#import <Firebase.h>

didFinishLaunchingWithOptions 메서드수정

추가해주세요

if ([FIRApp defaultApp] == nil) {
    [FIRApp configure];
  }
  ```sh
  cd ios/
pod install --repo-update
cd ..
npx react-native run-ios
```
이제 사용해볼까요!?


# 기능 제공 [추가기능 패치예정]

```sh
dependencies - 
android/buld.gradle

   디펜던시 쪽에 추가하여주세요
  [+] classpath 'com.google.gms:google-services:4.3.3'
 
android/app/build.gradle

  최상단에 추가하여주세요
  
  [+] apply plugin: 'com.google.gms.google-services'  
```





# 기본 사용법
```sh
# 다음과 같은 방법으로 메세지 알림을 받을수있습니다

const App = () => {
  return (
    <>
      <Fbcomponent />
      <View>
        <Text>테스트1</Text>
      </View>
    </>
  );
};

```
```sh
# 다음과 같은 방법으로 token 을취득 할수있습니다.
import Fbcomponent, {getFcmToken} from '@hajun/react-native-firebase-component';

getFcmToken 속에 fcmtoken 이들어있습니다! 해당부분을 활용하여 대상을 특정해보아요.

```


