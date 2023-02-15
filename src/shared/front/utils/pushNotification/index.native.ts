import messaging from "@react-native-firebase/messaging";
import PushNotification from "react-native-push-notification";

import request from "../request";

const navigateToHome = () => {
  // NavigationService.navigate(ROUTES.Home, {})
};

async function sendTokenToServer(deviceToken) {
  if (!deviceToken?.length) {
    return;
  }
  console.log("send to device", deviceToken);
  try {
    await request({
      method: "post",
      url: "/v1/auth/deviceToken",
      data: {
        deviceToken,
      },
    });
  } catch (err) {
    console.log("update token error;", err);
  }
}

async function requestUserPermission() {
  try {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log("Authorization status:", authStatus);
    } else {
      console.log("not enabled", authStatus);
    }
  } catch (err) {
    console.log("notification permission erro:", err);
  }
  PushNotification.getChannels(function (channel_ids) {
    console.log("channel ids", channel_ids); // ['channel_id_1']
  });

  //    await messaging().registerDeviceForRemoteMessages();
}

async function getAndUpdateToken() {
  const token = await messaging().getToken();
  setTimeout(() => sendTokenToServer(token), 5000);
}
export default async () => {
  console.log("boot notification");
  messaging().onMessage(async (remoteMessage) => {
    console.log("notification on foreground", remoteMessage);
    PushNotification.localNotification({
      channelId: remoteMessage.notification?.android?.channelId,
      title: remoteMessage.notification?.title, // (optional)
      message: remoteMessage.notification?.body || "", // (required)
    });
    navigateToHome();

    // Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
  });

  // Register background handler
  messaging().setBackgroundMessageHandler(async (remoteMessage) => {
    console.log("Message handled in the background!", remoteMessage);
    navigateToHome();
  });

  messaging().onTokenRefresh((token) =>
    setTimeout(() => sendTokenToServer(token), 5000)
  );

  messaging().onNotificationOpenedApp((remoteMessage) => {
    navigateToHome();
    console.log(
      "Notification caused app to open from background state:",
      remoteMessage.notification
    );
    // navigation.navigate(remoteMessage.data.type);
  });

  // Check whether an initial notification is available
  messaging()
    .getInitialNotification()
    .then((remoteMessage) => {
      if (remoteMessage) {
        // navigateToHome()
        console.log(
          "Notification caused app to open from quit state:",
          remoteMessage.notification
        );
        // setInitialRoute(remoteMessage.data.type); // e.g. "Settings"
      }
      // setLoading(false);
    });
  await requestUserPermission();
  await getAndUpdateToken();
};
