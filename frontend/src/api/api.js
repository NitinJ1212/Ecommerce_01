import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

// Create axios instance
const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

// Attach token to every request
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Global response handler
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    return Promise.reject(
      error.response?.data || { message: "Something went wrong" }
    );
  }
);

// =====================
// Common API functions
// =====================

export const apiGet = (url, params = {}) =>
  api.get(url, { params });

export const apiPost = (url, data = {}) =>
  api.post(url, data);

export const apiPut = (url, data = {}) =>
  api.put(url, data);

export const apiDelete = (url) =>
  api.delete(url);

// File Upload
export const apiUpload = (url, formData) =>
  api.post(url, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
