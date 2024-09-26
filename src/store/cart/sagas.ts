import {call, put, takeLatest} from 'redux-saga/effects';
import {SagaIterator} from 'redux-saga';
import {
  getCartItems,
  getCartItemsSuccess,
  getCartItemsError, addCartItemSuccess, addCartItemError, removeCartItemSuccess, removeCartItemError,
} from './slice';
import {CartApi} from '../../services/api/cart';
import {PayloadAction} from '@reduxjs/toolkit';
import {AddCartItemPayload, RemoveCartItemPayload} from './types';

export function* getCartItemsSaga(): SagaIterator {
  try {
    const data = yield call(CartApi.getAll);
    yield put(getCartItemsSuccess(data));
  } catch (error) {
    yield put(getCartItemsError(error));
  }
}

export function* addCartItemSaga({payload}: PayloadAction<AddCartItemPayload>): SagaIterator {
  try {
    const data = yield call(CartApi.create, payload.cartItem);
    yield put(addCartItemSuccess(data));
    yield call(payload.onSuccess);
    yield put(getCartItems());
  } catch (error) {
    yield put(addCartItemError(error));
    yield call(payload.onError);
  }
}

export function* removeCartItemSaga({payload}: PayloadAction<RemoveCartItemPayload>): SagaIterator {
  try {
    const data = yield call(CartApi.remove, payload.id);
    yield put(removeCartItemSuccess(data));
    yield call(payload.onSuccess);
    yield put(getCartItems());
  } catch (error) {
    yield put(removeCartItemError(error));
    yield call(payload.onError);
  }
}

export function* watchCart() {
  yield takeLatest('cart/getCartItems', getCartItemsSaga);
  yield takeLatest('cart/addCartItem', addCartItemSaga);
  yield takeLatest('cart/removeCartItem', removeCartItemSaga);
}
