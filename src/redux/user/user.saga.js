import { takeLatest, call, put, all } from 'redux-saga/effects';
import {
	signInFailed,
	signInSuccess,
	signInWithGoogleStart,
	signInWithWithEmailAndPasswordStart
} from '../../redux/user/user.slice';
import {
	signInWithEmail,
	signInWithGoogle
} from '../../firebase/firebase.util';

export function* startSignInWithGoogle() {
	yield takeLatest(signInWithGoogleStart.type, onStartSignInWithGoogle);
}

function* onStartSignInWithGoogle() {
	try {
		const user = yield call(signInWithGoogle);
		yield put(signInSuccess(user));
	} catch (error) {
		yield put(signInFailed(error));
	}
}

export function* startSignInWithEmail() {
	yield takeLatest(
		signInWithWithEmailAndPasswordStart.type,
		onStartSignInwithEmail
	);
}

function* onStartSignInwithEmail(action) {
	try {
		const {
			payload: { email, password }
		} = action;
		const user = yield call(signInWithEmail, email, password);
		yield put(signInSuccess(user));
	} catch (error) {
		yield put(signInFailed(error));
	}
}

export function* userSagas() {
	yield all([startSignInWithGoogle(), startSignInWithEmail()]);
}
