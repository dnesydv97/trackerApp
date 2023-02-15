import { ReturnType } from "./types";
interface getPropertiesParameter {
  params: any;
  role: string;
  action: "set" | "update" | null | undefined;
}
export default {
  getProperties: ({
    params,
    role,
    action,
  }: getPropertiesParameter): ReturnType => {
    let url;
    if (role) {
      url =
        role === "tenant"
          ? "/v1/properties/searchProperties"
          : "/v1/properties/getMyProperties";
    } else {
      url = "/v1/properties/searchProperties";
    }
    return {
      method: "get",
      url: url,
      params: params,
      config: {
        store: {
          action: action || "set",
          key: "properties",
        },
      },
    };
  },

  getMyProperties: (): ReturnType => {
    return {
      method: "get",
      url: "/v1/properties/getMyProperties",
      params: {
        page: 0,
        filter: "active",
      },
    };
  },

  getSimilarProperties: (id: number): ReturnType => {
    return {
      method: "get",
      url: `/v1/properties/${id}/similarProperties`,
      config: {
        store: {
          action: "set",
          key: "similarProperties",
        },
      },
    };
  },

  getPropertyById: (id: number | undefined | null): ReturnType => {
    return {
      method: "get",
      url: `/v1/properties/property/${id}`,
      config: {
        store: {
          action: "set",
          key: "property",
        },
      },
    };
  },

  createOrUpdateProperty: (
    obj: any,
    id?: number | undefined | null
  ): ReturnType => {
    return {
      method: "post",
      url: `/v1/properties/updateProperty/${id || null}`,
      data: obj,
    };
  },

  deleteProperty: (id: number): ReturnType => {
    return {
      method: "delete",
      url: `/v1/properties/property/${id}`,
      config: {
        successMsg: `Property has been deleted`,
        navigateBack: true,
      },
    };
  },

  updatePropertyPhotos: (data: any, id: number): ReturnType => {
    return {
      method: "post",
      url: `/v1/properties/updatePropertyPhotos/${id}`,
      data: data,
      config: {
        showErr: true,
      },
    };
  },
  uploadPropertyReferenceImage: (data: any, id: number): ReturnType => {
    return {
      method: "post",
      url: `/v1/properties/updatePropertyRefPhotos/${id}`,
      data: data,
      config: {
        successMsg: `Property Reference Image uploded successfully`,
        showErr: true,
      },
    };
  },
};
