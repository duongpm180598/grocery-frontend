import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { getListProducts } from 'src/api/product';

export function* getListProduct(params) {
  //   try {
  //     const response = yield call(getListProducts(params));
  //     if (response.status >= 200 && response.status < 300) {
  //         yield put(getProductsSuccess(response.data));
  //     } else {
  //         yield put(getProductsFail('error'));
  //     }
  //   } catch (error) {
  //     yield put(getProductsFail('error'));
  //   }
}
