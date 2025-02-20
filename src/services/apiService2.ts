import axios from "axios";

// Create a reusable Axios instance
const apiInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  withCredentials: true, // Ensures cookies are sent with requests
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
  },
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
});

// Generic API request function
export const apiRequest = async (
  endpoint: string,
  method: "GET" | "POST" | "PUT" | "DELETE", // Limit method types
  data?: any,
  config?: any
) => {
  try {
    const response = await apiInstance({
      url: endpoint,
      method,
      data,
      ...config, // Allow custom config overrides
    });

    return response.data;
  } catch (error) {
    console.error(`Error with ${method} request to ${endpoint}:`, error);
    throw error;
  }
};
