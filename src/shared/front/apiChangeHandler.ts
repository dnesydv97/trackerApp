export const envAPI = process.env.API_URL;

let API: any;

export const loadInital = async () => {
  const api = await localStorage.getItem("API");
  if (api) {
    API = api;
  } else {
    API = envAPI;
  }
};

export const changeAPI = async (endpoint) => {
  if (endpoint) {
    API = endpoint;
    await localStorage.setItem("API", endpoint);
  } else {
    API = "";
  }
};
export const setDefaultEnvApi = () => {
  API = envAPI;
};

export const getAPI = () => {
  return API || envAPI;
};
