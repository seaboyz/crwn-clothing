import { takeLatest, put, all } from 'redux-saga/effects';
import { signOutSuccess } from '../user/user.slice';
import { clearCart } from './cart.slice';

function* watchSignOutSuccess() {
	yield takeLatest(signOutSuccess.type, onSignOutSuccess);
}

function* onSignOutSuccess() {
	yield put(clearCart());
}

export function* cartSagas() {
	yield all([watchSignOutSuccess()]);
}
