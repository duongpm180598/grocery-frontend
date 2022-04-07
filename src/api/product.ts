import axios from 'axios';
import { Product } from 'src/models/product';

export const getProductByBarcode = (barcode) => {
  return axios
    .get(`http://localhost:5000/api/product/${barcode}`)
    .then((response) => {
      return response;
    })
    .catch((error) => error);
};

export const getListProducts = (params): Promise<any> => {
  return axios
    .post(`http://localhost:5000/api/product/filter`, params)
    .then((response) => {
      return response;
    })
    .catch((error) => error);
};

// export const getListProducts = (params): Promise<any> => {
//   return unauthorizedRequest.post<any>('/product/filter', params);
// };

export const addProduct = (params) => {
  return axios.post(``, params).then().catch();
};

export const updateProduct = (params) => {
  return axios.put(``, params).then().catch();
};

export const deleteProduct = (barcode) => {
  return axios.delete(`${barcode}`).then().catch();
};
