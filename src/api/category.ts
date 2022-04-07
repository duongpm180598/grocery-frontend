import axios from 'axios';

export const getListCategory = (params) => {
  return axios.post(``, params).then().catch();
};
