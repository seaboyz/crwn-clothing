import { takeLatest, call, put, all } from 'redux-saga/effects';
import {
	signInWithWithEmailAndPasswordStart,
	signInWithWithEmailAndPasswordSuccess,
	signInWithWithEmailAndPasswordFailed,
	signInWithGoogleStart,
	signInWithGoogleFailed,
	signInWithGoogleSuccess
} from '../../redux/user/user.slice';
import { signIn, signInWithGoogle } from '../../firebase/firebase.util';

export function* startSignInWithGoogle() {
	yield takeLatest(signInWithGoogleStart.type, onStartSignInWithGoogle);
}

export function* onStartSignInWithGoogle() {
	try {
		const user = yield call(signInWithGoogle);
		yield put(signInWithGoogleSuccess(user));
	} catch (error) {
		yield put(signInWithGoogleFailed(error));
	}
}

export function* startSignInWithEmail() {
	yield takeLatest(
		signInWithWithEmailAndPasswordStart.type,
		onStartSignInwithEmail
	);
}

export function* onStartSignInwithEmail(action) {
	try {
		const {
			payload: { email, password }
		} = action;
		const user = yield call(signIn, email, password);
		yield put(signInWithWithEmailAndPasswordSuccess(user));
	} catch (error) {
		yield put(signInWithWithEmailAndPasswordFailed(error));
	}
}

export function* userSagas() {
	yield all([startSignInWithGoogle(), startSignInWithEmail()]);
}
