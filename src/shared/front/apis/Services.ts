import { ReturnType } from "./types";
export default {
  getServices: (obj: any): ReturnType => {
    let url;
    if (obj?.role) {
      url =
        obj?.role === "service"
          ? "/v1/services/searchServices"
          : "/v1/services/getMyServices";
    } else {
      url = "/v1/services/searchServices";
    }
    return {
      method: "get",
      url: url,
      params: obj?.params,
      config: {
        store: {
          action: obj?.action || "set",
          key: "jobs",
        },
      },
    };
  },

  getSimilarServices: (id: number): ReturnType => {
    return {
      method: "get",
      url: `/v1/services/${id}/similar`,
      config: {
        store: {
          action: "set",
          key: "similarJobs",
        },
      },
    };
  },

  getServiceById: (id: number | undefined | null): ReturnType => {
    return {
      method: "get",
      url: `/v1/services/service/${id}`,
      config: {
        store: {
          action: "set",
          key: "job",
        },
      },
    };
  },

  createOrUpdateService: (
    obj: any,
    id?: number | undefined | null
  ): ReturnType => {
    return {
      method: "post",
      url: `/v1/services/updateService/${id || ""}`,
      data: obj,
    };
  },
  updateServicePhoto: (data: any, id: number): ReturnType => {
    return {
      method: "post",
      url: `/v1/services/updateServiceAttachments/${id}`,
      data: data,
      config: {
        showErr: true,
      },
    };
  },
  closeService: (id: number | undefined | null): ReturnType => {
    return {
      method: "get",
      url: `/v1/services/${id}/close`,
    };
  },

  deleteService: (id: number | undefined | null): ReturnType => {
    return {
      method: "delete",
      url: `/v1/services/service/${id}`,
    };
  },

  updateServiceCategories: (data: any, id: number): ReturnType => {
    return {
      method: "post",
      url: `/v1/services/updateServiceCategories/${id}`,
      data: data,
    };
  },
};
// {
//   title: parsedValues?.categories.toString(),
// },
