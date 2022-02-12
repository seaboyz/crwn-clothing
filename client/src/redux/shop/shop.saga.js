import { takeLatest, put, call, all } from 'redux-saga/effects';
import {
	fetchShopDataStart,
	fetchShopDataSuccess,
	fetchShopDataFailed
} from '../shop/shop.slice';
import { getShopData } from '../../firebase/firebase.util';

export function* shopSagas() {
	yield all([watchStartFetchShopData()]);
}

function* watchStartFetchShopData() {
	yield takeLatest(fetchShopDataStart.type, startFetchShopData);
}

function* startFetchShopData() {
	try {
		const data = yield call(getShopData);
		yield put(fetchShopDataSuccess(data));
	} catch (error) {
		yield put(fetchShopDataFailed(error));
	}
}
