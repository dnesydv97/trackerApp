import axios from "axios";
import RNBootSplash from "react-native-bootsplash";
import * as Keychain from "react-native-keychain";

import * as Apis from "../../apis";
import Socket from "../../socket";

import bootPushNotification from "../pushNotification";

const startAfterAuth = async () => {
  console.log("start after auth");
  try {
    await Apis.makeRequest(Apis.Auth.getMe());
    bootPushNotification();
    Socket.connectSocket();
    await Apis.makeRequest(Apis.Auth.getNotifications());
  } catch (err) {
    console.log("start after auth error", err);
  }
};

const start = async () => {
  console.log("start test");

  let auth;
  try {
    auth = await Keychain.getGenericPassword();
    auth = auth?.username && JSON.parse(auth?.username);

    if (auth?.token) {
      axios.defaults.headers.Authorization = `Bearer ${auth.token}`;
    }
  } catch (err) {
    console.log(err);
  }

  try {
    setTimeout(() => {
      startAfterAuth();
    }, 2000);
  } catch (err) {
    console.log("Erro", err);
  }
  RNBootSplash.hide({ fade: true });
};

export default {
  start,
  startAfterAuth,
};
