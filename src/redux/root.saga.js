import { all } from 'redux-saga/effects';
import { startFetchShopData } from './shop/shop.saga';
import { userSagas } from './user/user.saga';

export default function* rootSaga() {
	yield all([startFetchShopData(), userSagas()]);
}
