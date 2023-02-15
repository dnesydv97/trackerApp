import { Config, ReturnType } from "./types";
import callbackHandler from "./callbackHandlers";
export default {
  login(
    data: { email: string; password: string },
   
  ): ReturnType {
    console.log(callbackHandler);
    return {
      url: "/v1/auth/login",
      method: "post",
      data,
      config: {
        showErr: true,
        ...callbackHandler.login(data),
        
      },
    };
  },
  getMe(): ReturnType {
    return {
      method: "post",
      url: "/v1/auth/verifyToken",
      config: {
        store: {
          action: "set",
          key: "loggedInUser",
        },
        ...callbackHandler.getMe(),
      },
    };
  },

  register(data: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }): ReturnType {
    return {
      method: "post",
      url: "/v1/auth/register",
      data,
      config: {
        navigate: ["VerifyAccount", { email: data.email }],
        showErr: true,
        successMsg: "You have been successfully registered.",
      },
    };
  },

  updateBioAddress(data: { address?: string; bio?: string }): ReturnType {
    return {
      method: "patch",
      url: "/v1/auth/updateBio",
      data: data,
      config: {
        navigateBack: true,
        successMsg: `Profile updated successfully`,
      },
    };
  },

  verifyAccount(data: { code: string; email: string }): ReturnType {
    return {
      method: "post",
      url: "/v1/auth/verifyAccount",
      data,
      config: {
        showErr: true,
        successMsg: "Your account has been successfully verified",
        navigate: ["SignIn"],
      },
    };
  },

  addPhone(data: { countryCode: string; phone: string }): ReturnType {
    return {
      method: "post",
      url: "/v1/auth/addPhone",
      data,
    };
  },

  verifyPhone(data: { code: string }): ReturnType {
    return {
      method: "post",
      url: "/v1/auth/verifyPhone",
      data,
    };
  },

  getRequiredData(): ReturnType {
    return {
      method: "get",
      url: "/v1/users/getRequiredData",
    };
  },

  forgotPassword(data: { email: string }): ReturnType {
    return {
      method: "post",
      url: "/v1/auth/forgotPassword",
      data,
      config: {
        navigate: ["ResetPassword", { email: data.email }],
      },
    };
  },

  logout(): ReturnType {
    return {
      method: "post",
      url: "/v1/auth/logout",
    };
  },

  changePassword(data: {
    email: string;
    password: string;
    code: string;
  }): ReturnType {
    return {
      method: "post",
      url: "/v1/auth/resetPassword",
      data,
      config: {
        navigate: ["SignIn"],
        successMsg: "Password reset successfully.",
      },
    };
  },

  getNotifications(): ReturnType {
    return {
      method: "get",
      url: "/v1/auth/notifications",
      config: {
        store: {
          action: "set",
          key: "notifications",
        },
      },
    };
  },

  verifyToken(): ReturnType {
    return {
      url: "/v1/auth/verifyToken",
      method: "post",
    };
  },

  updateProfile(values: any): ReturnType {
    return {
      method: "post",
      url: "/v1/auth/updateProfile",
      data: values,
    };
  },
};
