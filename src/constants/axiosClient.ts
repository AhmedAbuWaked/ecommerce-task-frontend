import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { message } from "antd";
import { API_ENDPOINTS } from "@/constants";
import { localStorageHelper } from "@/utils";

const axiosClient = axios.create({
  baseURL: API_ENDPOINTS.BASE,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

// Interceptors
axiosClient.interceptors.request.use(
  function (config: AxiosRequestConfig): any {
    const user = localStorageHelper.get("user");
    if (user && config!.headers) {
      config!.headers["authorization"] = `Bearer ${user.token}`;
    }
    return config;
  },
  function (error) {
    message.error(error?.message);
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  function (response: AxiosResponse): any {
    const { statusText, status, data } = response;
    let result: { list?: Array<any>; data?: any } = {};
    if (typeof data === "object") {
      result = data;
      if (Array.isArray(data)) {
        result.list = data;
      }
    } else {
      result.data = data;
    }

    return Promise.resolve({
      success: true,
      message: statusText,
      statusCode: status,
      ...result,
    });
  },
  (error) => {
    const { response, message } = error;
    if (String(message) === "cancel request") {
      return {
        success: false,
      };
    }
    let msg;
    let statusCode;
    let fields;
    if (response && response instanceof Object) {
      const { data, statusText } = response;
      statusCode = response.status;
      msg = data?.message || statusText;
      fields = data?.feedback?.fields ?? data.fields ?? statusText;
    } else {
      statusCode = 600;
      msg = error?.message ?? "Network Error";
    }

    return Promise.reject({
      success: false,
      statusCode,
      message: msg,
      fields,
    });
  }
);

export default axiosClient;
