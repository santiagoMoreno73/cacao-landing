import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: import.meta.env.REACT_API_IMPULSESALES,
  baseURL: "http://127.0.0.1:4000/api/",
});

export default axiosInstance;
