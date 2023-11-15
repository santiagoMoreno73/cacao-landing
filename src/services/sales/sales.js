import axiosInstance from "../index";

export const createSale = (data) => {
  return axiosInstance.post("sales", data);
};
