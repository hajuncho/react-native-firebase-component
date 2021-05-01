import React, {useEffect} from 'react';
import {Alert, Platform} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';
import PushNotificationIos from '@react-native-community/push-notification-ios';
//IOS 경우
const Fbcomponent = props => {
  useEffect(() => {
    const unsubscribe =
      Platform.OS === 'android' ? androidNotifi() : iosNotifi();
    return unsubscribe;
  }, []);

  return null;
};

const androidNotifi = () => {
  messaging().onMessage(async remoteMessage => {
    PushNotification.localNotification({
      message: remoteMessage.notification.body,
      title: remoteMessage.notification.title,
      bigPictureUrl: remoteMessage.notification.android.imageUrl,
      smallIcon: remoteMessage.notification.android.imageUrl,
    });
  });
};

const iosNotifi = () => {
  const unsubscribe = messaging().onMessage(async remoteMessage => {
    PushNotificationIos.addNotificationRequest({
      id: remoteMessage.messageId,
      body: remoteMessage.notification.body,
      title: remoteMessage.notification.title,
      userInfo: remoteMessage.data,
    });
  });
};

const getFcmToken = async () => {
  const token = await messaging().getToken();
  console.log(tok);
};

export default Fbcomponent;
