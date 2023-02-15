import { ReturnType } from "./types";

export default {
  getTransaction: (params: any): ReturnType => {
    return {
      method: "get",
      url: "/v1/payments/getMyTransactions",
      params: params,
      config: {
        store: {
          action: "set",
          key: "transactions",
        },
      },
    };
  },
};
