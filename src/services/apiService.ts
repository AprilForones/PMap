import axios from "axios";

// export const API_BASE_URL = import.meta.env.PROD
//   ? "/"
//   : "http://localhost:8081";

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Create an Axios instance
const apiService = axios.create({
  baseURL: API_BASE_URL,
});

export default apiService;
