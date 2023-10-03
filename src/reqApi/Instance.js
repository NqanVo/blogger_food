import axios from "axios";
import Cookies from "js-cookie";

//Tạo instance
const instance = axios.create({
  baseURL: "http://localhost:7070",
});

//Tạo interceptor để kiểm tra accessToken trước mỗi request
instance.interceptors.request.use(
  async (config) => {
    const accessToken = Cookies.get("accessToken");

    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

let isRefreshing = false;
let refreshSubscribers = [];

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    let statusResponse = error.response.status;

    if (statusResponse === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        try {
          const refreshToken = localStorage.getItem("refreshtoken");
          const accessToken = await refreshAccessToken(refreshToken);

          originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;
          return instance(originalRequest);
        } catch (refreshError) {
          return Promise.reject(refreshError);
        }
      }

      originalRequest._retry = true;
      isRefreshing = true;

      return new Promise((resolve) => {
        refreshSubscribers.push((accessToken) => {
          originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;
          resolve(instance(originalRequest));
        });
      });
    }

    // Khi refreshToken cũng hết hạn
    if (statusResponse === 401 && originalRequest._retry && !isRefreshing) {
      // Thực hiện logout
    }

    return Promise.reject(error);
  }
);

const refreshAccessToken = async (refreshToken) => {
  try {
    const response = await axios.post("http://localhost:7070/refreshToken", {
      refreshToken,
    });

    const newAccessToken = response.data.accessToken;

    // Lưu newAccessToken vào cookie hoặc localStorage
    //   Cookies.set('accessToken', newAccessToken); // Sử dụng js-cookie hoặc bạn có thể sử dụng localStorage

    return newAccessToken;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default instance;
