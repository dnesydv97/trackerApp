import Keychain from "react-native-keychain";
import axios from "axios";

import Snackbar from "react-native-snackbar";
import { ReturnType } from "../../apis/types";
import navigation, { navigate } from "../navigation";
import rootData from "../rootData";
import Socket from "../../socket";
import Store from "../../store";
import * as Theme from "../../theme";

const JWT_EXPIRE_MSGS = ["jwt expired", "Your session expired. Login again."];

export const handleLogout = async () => {
  await Keychain.resetGenericPassword();
  delete axios.defaults.headers.Authorization;
  Socket.disconnectSocket();
};

const getErrorMessage = (err) => {
  if (err?.response?.data?.message) {
    return err.response.data.message;
  }
  if (err?.message) {
    return err?.message;
  }
};

const getData = (res) => {
  return res?.data?.data || res?.data || res;
};

const handleSuccess = async (config?: ReturnType["config"], data?: any) => {
  if (config?.onSuccess) {
    await config.onSuccess(data);
  }
  if (config?.store) {
    if (config?.store?.loading && config.store.action === "set") {
      Store.store.dispatch(Store.Actions["startLoading"](config.store.key));
      setTimeout(() => {
        Store.store.dispatch(Store.Actions["stopLoading"](config.store.key));
      }, 800);
    }
    Store.store.dispatch(
      Store.Actions[config.store.action](config.store.key, data)
    );
  }
  if (config?.successMsg) {
    Snackbar.show({
      text: config.successMsg,
      textColor: Theme.materialColors.green.text,
      backgroundColor: Theme.materialColors.green.bg,
    });
  }
  if (config?.navigateBack) {
    navigation?.goBack?.();
  }
  if (config?.navigate) {
    navigate(...config.navigate);
  }
};
const handleError = async (config: ReturnType["config"], err: string) => {
  if (config?.showErr) {
    Snackbar.show({
      text: getErrorMessage(err),
      textColor: Theme.materialColors.red.text,
      backgroundColor: Theme.materialColors.red.bg,
    });
  }
  if (config?.onError) {
    await config.onError(err, getErrorMessage(err));
  }
  if (config?.store?.loading && config.store.action === "set") {
    Store.store.dispatch(Store.Actions["stopLoading"](config.store.key));
  }
};

const request = async (config?: ReturnType | any) => {
  try {
    const res = await axios({ ...config, url: rootData.apiURL + config.url });
    if (res.status >= 200 && res.status < 300) {
      console.log(`Api success ${config.url}`);
      await handleSuccess(config.config, getData(res));
      return getData(res);
    }

    throw res;
  } catch (err) {
    console.log(
      `API ERROR ${config.url}`,
      err?.response?.data?.message || err?.message
    );

    if (
      err?.response?.status === 401 &&
      JWT_EXPIRE_MSGS.includes(err?.response?.data?.message || err?.message)
    ) {
      return handleLogout();
    }
    await handleError(config.config, err);
    throw err?.response?.data;
  }
};

export default request;
