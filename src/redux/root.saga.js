import { all } from 'redux-saga/effects';
import { startFetchShopData } from './shop/shop.saga';

export default function* rootSaga() {
	yield all([startFetchShopData()]);
}
