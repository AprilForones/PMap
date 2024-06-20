import axios from "axios";

export const API_BASE_URL = import.meta.env.PROD
  ? "/"
  :"https://main.d2k93d841gralt.amplifyapp.com";
  //: "http://localhost:8081";


  
// Create an Axios instance
const apiService = axios.create({
  baseURL: API_BASE_URL,
});

export default apiService;
