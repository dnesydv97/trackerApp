import { ReturnType } from "./types";

export default {
  getMyProposal: (params): ReturnType => {
    return {
      method: "get",
      url: "/v1/services/getMyProposals",
      params: params,
      config: {
        store: {
          action: "set",
          key: "proposals",
        },
      },
    };
  },
  getProposalById: (id: number): ReturnType => {
    return {
      method: "get",
      url: `/v1/services/proposals/${id}`,
      config: {
        store: {
          action: "set",
          key: "proposal",
        },
      },
    };
  },

  proposalWithDraw: (id: number): ReturnType => {
    return {
      method: "post",
      url: `/v1/services/proposals/${id}/withdraw`,
    };
  },
  updateProposal: (data: any, id: number): ReturnType => {
    return {
      method: "patch",
      url: `/v1/services/proposals/${id}`,
      data: data,
    };
  },
};
