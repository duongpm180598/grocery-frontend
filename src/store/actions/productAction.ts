import { GET_LIST_PRODUCT } from 'src/constant';

export const getListProduct = (params) => {
  return {
    type: 'GET_LIST_PRODUCT',
    params
  };
};
