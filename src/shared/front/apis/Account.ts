import { ReturnType } from "./types";
export default {
  getDashbaord: (): ReturnType => {
    return {
      method: "get",
      url: "/v1/common/dashboard",
      config: {
        store: {
          action: "set",
          key: "dashboard",
        },
      },
    };
  },

  getCards: (): ReturnType => {
    return {
      method: "get",
      url: "/v1/payments/card",
      config: {
        store: {
          key: "cards",
          action: "set",
        },
      },
    };
  },

  addCard(data: {
    cardNumber: number;
    expiryMonth: number;
    expiryYear: number;
    cvc: number;
  }): ReturnType {
    return {
      method: "post",
      url: "/v1/users/cards",
      data,
      config: {
        store: {
          key: "cards",
          action: "set",
        },
      },
    };
  },

  deleteCard(data: { cardId: number; customerId: number }): ReturnType {
    return {
      method: "delete",
      url: `/v1/payments/card`,
      data: {
        customerId: data.customerId,
        cardId: data.cardId,
      },
      config: {
        store: {
          key: "cards",
          action: "set",
        },
      },
    };
  },

  addBankDetails(data: any): ReturnType {
    return {
      method: "post",
      url: "/v1/payments/bank",
      data,
    };
  },

  getDocuments(): ReturnType {
    return {
      method: "get",
      url: "/v1/drivers/documents",
    };
  },
  uploadDocument(res: any): ReturnType {
    let data = new FormData();
    data.append("file", res.file);
    data.append("documentTypeId", res.documentTypeId);
    return {
      method: "post",
      url: "/v1/drivers/documents",
      data,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
  },

  getChats(): ReturnType {
    return {
      method: "get",
      url: "/v1/common/getChats",
      config: {
        store: {
          key: "chats",
          action: "set",
        },
      },
    };
  },

  updateDocument(formData): ReturnType {
    return {
      method: "post",
      url: "/v1/auth/updateDocuments",
      data: formData,
      config: {
        showErr: true,
      },
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
  },

  createCompany(values): ReturnType {
    return {
      method: "post",
      url: "/v1/auth/createCompany",
      data: values,
    };
  },
};
