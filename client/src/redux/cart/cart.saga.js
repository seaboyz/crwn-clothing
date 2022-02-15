import { isEmpty } from 'ramda';
import { takeLatest, put, all, select } from 'redux-saga/effects';
import {
	getCartItemsInDb,
	getUserRefById,
	updateCartInDb
} from '../../firebase/firebase.util';
import { selectCurrentUser } from '../user/user.selectors';
import { signInSuccess, signOutSuccess } from '../user/user.slice';
import { selectCartItems } from './cart.selector';
import {
	addItem,
	clearCart,
	decQuantity,
	incQuantity,
	removeItem,
	updateCart
} from './cart.slice';

function* watchSignOutSuccess() {
	yield takeLatest(signOutSuccess.type, onSignOutSuccess);
}

function* onSignOutSuccess() {
	yield put(clearCart());
}

function* watchSignInSuccess() {
	yield takeLatest(signInSuccess.type, onSignInSuccess);
}

function* onSignInSuccess() {
	try {
		const currentUser = yield select(selectCurrentUser);
		if (!currentUser) return;
		const currentUserRef = yield getUserRefById(currentUser.uid);
		const cartItemsFromDb = yield getCartItemsInDb(currentUserRef);
		const cartItemsFromLocalState = yield select(selectCartItems);
		const mergedCartItems = [...cartItemsFromDb, ...cartItemsFromLocalState];
		yield updateCartInDb(currentUserRef, mergedCartItems);
		yield put(updateCart(mergedCartItems));
	} catch (error) {
		console.log(error);
	}
}

function* watchCartUpdate() {
	yield takeLatest(
		[
			addItem.type,
			removeItem.type,
			incQuantity.type,
			decQuantity.type,
			clearCart.type
		],
		syncCart
	);
}

function* syncCart() {
	try {
		const currentUser = yield select(selectCurrentUser);
		if (!currentUser) return;
		const currentUserRef = yield getUserRefById(currentUser.uid);
		const cartItems = yield select(selectCartItems);

		yield updateCartInDb(currentUserRef, cartItems);
	} catch (error) {
		console.log(error);
	}
}

export function* cartSagas() {
	yield all([watchSignOutSuccess(), watchCartUpdate(), watchSignInSuccess()]);
}
