import { ReturnType } from "./types";

export default {
  getEmployeeHistories: (): ReturnType => {
    return {
      method: "get",
      url: "/v1/auth/employmentHistories",
      config: {
        store: {
          action: "set",
          key: "employmentHistories",
        },
      },
    };
  },

  createOrUpdate: (obj?: any, id?: number): ReturnType => {
    return {
      url: `/v1/auth/employmentHistories/${id || ""}`,
      method: id ? "patch" : "post",
      data: obj,
      config: {
        successMsg: `Employment history has been ${id ? "updated" : "added"}`,
      },
    };
  },

  delete: (id: number) => {
    return {
      method: "delete",
      url: `/v1/auth/employmentHistories/${id}`,
      config: {
        successMsg: "Your employment history has been deleted successfully.",
      },
    };
  },
};
