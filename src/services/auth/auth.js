import axiosInstance from "../index";

export const createUser = (data) => {
  return axiosInstance.post("users", data);
};

export const getUserById = (id) => {
  return axiosInstance.get(`users/${id}`);
};

export const login = (data) => {
  return axiosInstance.post(`auth/login`, data);
};
