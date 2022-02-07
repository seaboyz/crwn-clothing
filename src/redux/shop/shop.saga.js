import { takeEvery, put, call } from 'redux-saga/effects';
import { getShopData } from '../../firebase/firebase.util';
import {
	fetchShopData,
	fetchShopDataSuccess,
	fetchShopDataFailed
} from '../shop/shop.slice';

export function* startFetchShopData() {
	yield takeEvery(fetchShopData.type, handleFetchShopData);
}

export function* handleFetchShopData() {
	try {
		const data = yield call(getShopData);
		yield put(fetchShopDataSuccess(data));
	} catch (error) {
		yield put(fetchShopDataFailed(error));
	}
}
