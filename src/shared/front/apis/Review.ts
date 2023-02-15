import { ReturnType } from "./types";

export default {
  createReview: (data?: any): ReturnType => {
    return {
      method: "post",
      url: "/v1/common/reviews",
      data: data,
      config: {
        store: {
          action: "set",
          key: "reviewLoading",
          loading: true,
        },
      },
    };
  },
};
