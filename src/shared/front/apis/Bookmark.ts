import { ReturnType } from "./types";
export default {
  getBookmark: (): ReturnType => {
    return {
      method: "get",
      url: "/v1/common/bookmark/getMyBookedMark",
      config: {
        store: {
          action: "set",
          key: "bookmarks",
        },
      },
    };
  },

  createBoookmark: (obj: any): ReturnType => {
    return {
      method: "post",
      url: "/v1/common/bookmark/createBookmark",
      data: obj,
      config: {
        successMsg: "Bookmarked Successfully",
        store: {
          action: "update",
          key: "bookmarks",
        },
      },
    };
  },

  deleteBookmark: (obj: any): ReturnType => {
    return {
      method: "post",
      url: `/v1/common/bookmark/delete`,
      data: obj,
      config: {
        successMsg: "Bookmarked remove Successfully",
      },
    };
  },
};
