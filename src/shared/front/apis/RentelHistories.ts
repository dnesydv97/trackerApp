import { ReturnType } from "./types";

export default {
  getRentalHistories: (): ReturnType => {
    return {
      method: "get",
      url: "/v1/auth/rentalHistories",
      config: {
        store: {
          action: "set",
          key: "rentalHistories",
        },
      },
    };
  },

  createOrUpdate: (obj: any, id?: number | undefined | null): ReturnType => {
    return {
      method: id ? "patch" : "post",
      url: `/v1/auth/rentalHistories/${id || ""}`,
      data: obj,
      config: {
        successMsg: `Rental history has been ${id ? "updated" : "added"}`,
      },
    };
  },

  delete: (id: number): ReturnType => {
    return {
      method: "delete",
      url: `/v1/auth/rentalHistories/${id}`,
      config: {
        successMsg: "Your rental history has been deleted successfully.",
      },
    };
  },
};
