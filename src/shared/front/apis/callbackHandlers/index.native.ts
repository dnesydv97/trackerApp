import Keychain from "react-native-keychain";
import axios from "axios";

import { navigation, boot } from "../../utils";

const login = (initialData) => ({
  onSuccess: async (data) => {
    console.log("on success");
    axios.defaults.headers.Authorization = `Bearer ${data.token}`;
    await Keychain.setGenericPassword(JSON.stringify(data), "testpass");
    await boot.startAfterAuth();
  },
  onError: (err) => {
    
    if (err?.response?.data?.flag === "verify_account") {
      navigation.navigate("VerifyAccount", {
        email: initialData.email,
      });
    }
  },
});

const getMe = () =>({
  onSuccess: async (data) => {
    axios.defaults.headers.Authorization = `Bearer ${data?.token}`;
    await Keychain.setGenericPassword(JSON.stringify(data), "testapp");
  },
});

export default {
  login,
  getMe,
};
