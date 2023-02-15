import { useState } from "react";
import request from "../utils/request";
import { ReturnType } from "../apis/types";

const useAPI = (): [
  (config: ReturnType) => any,
  {
    data: any;
    loading: boolean;
    error: string;
  }
] => {
  const [state, setState] = useState({
    loading: false,
    error: "",
    data: null,
  });

  const makeRequest = async (config: any) => {
    try {
      setState({
        loading: config.loadingId || true,
        error: "",
        data: state.data,
      });
      const res = await request(config);

      setState({
        loading: false,
        error: "",
        data: res?.data || res,
      });
      return res?.data || res;
    } catch (err) {
      console.log("error", err);
      setState({
        loading: false,
        error: err,
        data: state.data,
      });

      throw err;
    }
  };
  return [makeRequest, state];
};

export default useAPI;
