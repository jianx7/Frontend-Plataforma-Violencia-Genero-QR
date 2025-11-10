import axios from "axios";

const chatApi = axios.create({
  baseURL: "http://127.0.0.1:8000/api", // link de api
  headers: {
    "Content-Type": "application/json",
  },
});

chatApi.interceptors.response.use(
  response => response, 
  error => {
    console.error("API ERROR:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default chatApi;

