import axios from "axios";

export const API_BASE_URL = import.meta.env.PROD
  ? "/"
  : "https://pmap-tqot.onrender.com";


  
// Create an Axios instance
const apiService = axios.create({
  baseURL: API_BASE_URL,
});

export default apiService;
