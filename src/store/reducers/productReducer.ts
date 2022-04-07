import {
  GET_LIST_PRODUCT,
  GET_LIST_PRODUCT_FAIL,
  GET_LIST_PRODUCT_SUCCESS,
  GET_PRODUCT_DETAIL,
  GET_PRODUCT_DETAIL_FAIL,
  GET_PRODUCT_DETAIL_SUCCESS
} from 'src/constant';

const initialState = {
  products: [],
  product: {},
  loadingProducts: false,
  loadingProduct: false,
  error: {
    message: ''
  }
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_PRODUCT:
      return {
        ...state,
        loadingProducts: true
      };
    case GET_LIST_PRODUCT_SUCCESS:
      return {
        ...state,
        loadingProducts: false,
        products: action.payload
      };
    case GET_LIST_PRODUCT_FAIL:
      return {
        ...state,
        loadingProducts: false,
        error: {
          message: 'Error'
        }
      };
    case GET_PRODUCT_DETAIL:
      return {
        ...state,
        loadingProduct: true
      };
    case GET_PRODUCT_DETAIL_SUCCESS:
      return {
        ...state,
        loadingProduct: false,
        product: action.payload
      };
    case GET_PRODUCT_DETAIL_FAIL:
      return {
        ...state,
        loadingProduct: false,
        error: {
          message: 'Error'
        }
      };
    default:
      return state;
  }
};

export default productReducer;
