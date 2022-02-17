import { all } from 'redux-saga/effects';
import { cartSagas } from './cart/cart.saga';
import { directorySagas } from './directory/directory.saga';
import { shopSagas } from './shop/shop.saga';
export default function* rootSaga() {
	yield all([shopSagas(), directorySagas(), cartSagas()]);
}
