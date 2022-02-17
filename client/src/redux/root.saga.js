import { all } from 'redux-saga/effects';
import { cartSagas } from './cart/cart.saga';

export default function* rootSaga() {
	yield all([cartSagas()]);
}
