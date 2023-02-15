import { ReturnType } from "./types";
export default {
  getEducation: (): ReturnType => {
    return {
      url: "/v1/auth/educationHistories",
      method: "get",
      config: {
        store: {
          key: "educations",
          action: "set",
        },
      },
    };
  },

  createOrUpdateEducation: (id: any, formData: any): ReturnType => {
    return {
      url: `/v1/auth/educationHistories/${id || ""}`,
      method: id ? "patch" : "post",
      data: formData,
      config: {
        successMsg: `Education history has been ${id ? "updated" : "added"}`,
        navigateBack: true,
      },
    };
  },

  deleteEducation: (id: number): ReturnType => {
    return {
      url: `/v1/auth/educationHistories/${id || ""}`,
      method: "delete",
      config: {
        successMsg: `Education history has been deleted`,
        navigateBack: true,
      },
    };
  },
};
