import { takeEvery } from 'redux-saga/effects';
import { getShopData } from '../../firebase/firebase.util';
import { fetchShopData } from '../shop/shop.slice';

export function* startFetchShopData() {
	yield takeEvery(fetchShopData.type, handleFetchShopData);
}

export function* handleFetchShopData() {
	yield console.log('I am fired from saga');
}
