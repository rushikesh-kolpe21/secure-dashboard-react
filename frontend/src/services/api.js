// src/services/api.js
import axios from "axios";
import { toast } from "react-toastify";
import { isTokenExpired, clearExpiredToken } from "../utils/tokenExpiry.js";

// baseURL via environment variable (recommended)
const baseURL = import.meta.env.VITE_API_URL;
const api = axios.create({
  baseURL,
});

// Request interceptor — attach token automatically & check expiry
api.interceptors.request.use(
  (config) => {
    // Check if token has expired
    if (isTokenExpired()) {
      clearExpiredToken();
      return Promise.reject(new Error("Token expired"));
    }
    
    const token = localStorage.getItem("token");
    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor — global error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Safe check for response
    const status = error?.response?.status;

    if (status === 401) {
      // token invalid or expired — clear and redirect to login
      localStorage.removeItem("token");
      toast.error("Session expired. Redirecting to login...");
      // use location.href because we are outside React hooks
      window.location.href = "/login";
    } else if (status >= 400 && status < 500) {
      // client error
      toast.error(error?.response?.data?.message || "Request failed.");
    } else {
      // network / server error
      toast.error("Server error. Please try again later.");
    }

    return Promise.reject(error);
  }
);

export default api;
