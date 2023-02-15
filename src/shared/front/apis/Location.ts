import { ReturnType } from "./types";

export default {
  getPlacesAutoComplete: (query: any): ReturnType => {
    return {
      method: "get",
      url: "/v1/common/googlePlacesAutocomplete",
      params: {
        input: query.trim(),
      },
    };
  },

  getLocationFromPlaceId: (params: object): ReturnType => {
    return {
      method: "get",
      url: "/v1/common/googleGeocode",
      params: params,
    };
  },

  getAddressFromLatLng: (obj: {
    latitude: unknown;
    longitude: unknown;
  }): ReturnType => {
    return {
      method: "post",
      url: "/v1/common/getAddressFromLatLng",
      data: obj,
    };
  },
};
