import {all, fork} from 'redux-saga/effects';

import {watchProducts} from './products/sagas';
import {watchCart} from './cart/sagas';

const rootSaga = function* () {
  yield all([
    fork(watchProducts),
    fork(watchCart),
  ]);
};

export default rootSaga;
