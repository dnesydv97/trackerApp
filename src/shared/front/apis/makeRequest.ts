import { ReturnType } from "./types";
import request from "../utils/request";

const makeRequest = async (config: ReturnType) => {
  try {
    return await request(config);
  } catch (err) {
    console.log(
      "makeRequest error:",
      err?.response?.message,
      err?.message,
      config
    );
    throw err;
  }
};

export default makeRequest;
