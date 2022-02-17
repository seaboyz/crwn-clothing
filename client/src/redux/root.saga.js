import { all } from 'redux-saga/effects';
import { cartSagas } from './cart/cart.saga';
import { shopSagas } from './shop/shop.saga';
export default function* rootSaga() {
	yield all([shopSagas(), cartSagas()]);
}
