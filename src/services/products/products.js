import axiosInstance from "../index";

export const createProduct = (data) => {
  return axiosInstance.post("products", data);
};

export const getAllProducts = (data) => {
  return axiosInstance.get("products", data);
};

export const getProductById = (id) => {
  return axiosInstance.get(`products/${id}`);
};
