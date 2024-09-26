import {call, put, takeLatest} from 'redux-saga/effects';
import {SagaIterator} from 'redux-saga';
import {ProductApi} from '../../services/api/product';
import {
  getProductsSuccess,
  getProductsError,
} from './slice';

export function* getProductsSaga(): SagaIterator {
  try {
    const data = yield call(ProductApi.getAll);
    yield put(getProductsSuccess(data));
  } catch (error) {
    yield put(getProductsError(error));
  }
}

export function* watchProducts() {
  yield takeLatest('products/getProducts', getProductsSaga);
}
