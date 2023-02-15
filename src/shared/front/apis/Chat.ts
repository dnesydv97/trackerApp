import { ReturnType } from "./types";

export default {
  getMessageId: (data: any): ReturnType => {
    return {
      method: "post",
      url: `/v1/common/message`,
      data: data,
    };
  },
};
