import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:5050/api",
  withCredentials: true,
});

export default apiClient;
