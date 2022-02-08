import { all } from 'redux-saga/effects';
import { shopSagas } from './shop/shop.saga';
import { userSagas } from './user/user.saga';

export default function* rootSaga() {
	yield all([shopSagas(), userSagas()]);
}
