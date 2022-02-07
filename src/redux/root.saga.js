import { all, call } from 'redux-saga/effects';
import { startFetchShopData } from './shop/shop.saga';
import { startSignInWithGoogle, userSagas } from './user/user.saga';

export default function* rootSaga() {
	yield all([startFetchShopData(), userSagas()]);
}
