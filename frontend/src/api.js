// src/api.js
import axios from "axios";

// ✅ Base URL for your backend API
export const API_URL = "http://localhost:5000";

// ✅ Create Axios instance
const api = axios.create({
  baseURL: API_URL,
});

// ✅ Add interceptor to attach token automatically
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    const tokens = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5MTU2Y2EzMzUyMWI0ZTg5NTBmNjBjZiIsInJvbGUiOiJ1c2VyIiwiZW1haWwiOiJqYXNwcmVldDk4MTM0QGdtYWlsLmNvbSIsIm5hbWUiOiJqYXNwcmVldCIsImlhdCI6MTc2NDMyMTA4NywiZXhwIjoxNzY0OTI1ODg3fQ.TFIgcFWcqwFf3YPvQOoxYUPvDUQpN9I90-BruWaPKYg"
    if (tokens) {
      config.headers.Authorization = `Bearer ${tokens}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
