import { ReturnType } from "./types";

export default {
  getMyTenants: (): ReturnType => {
    return {
      method: "get",
      url: "/v1/contractGenerate/getMyTenants",
      config: {
        store: {
          action: "set",
          key: "myTenants",
        },
      },
    };
  },
  generateContract: (data: any): ReturnType => {
    return {
      method: "post",
      url: `/v1/contractGenerate/generateContract`,
      data: data,
      config: {
        successMsg: "Contract Generate Successfully",
        navigateBack: true,
      },
    };
  },

  signContract: (signature: any, id: number): ReturnType => {
    return {
      method: "post",
      url: `/v1/bookings/createSignatureTest/${id}`,
      data: {
        base64: signature,
      },
    };
  },

  serviceContract: (data: any): ReturnType => {
    return {
      method: "post",
      url: `/v1/services/contracts`,
      data: data,
    };
  },

  getServiceContracts: (params: any): ReturnType => {
    return {
      method: "get",
      url: "/v1/services/getMyContracts",
      params: params,
      config: {
        store: {
          action: "set",
          key: "contracts",
        },
      },
    };
  },
};
