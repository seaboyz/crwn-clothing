import { takeLatest, call, put, all } from 'redux-saga/effects';
import {
	signInWithWithEmailAndPasswordStart,
	signInWithWithEmailAndPasswordSuccess,
	signInWithWithEmailAndPasswordFailed,
	signInWithGoogleStart,
	signInWithGoogleFailed,
	signInWithGoogleSuccess
} from '../../redux/user/user.slice';
import { signInWithGoogle } from '../../firebase/firebase.util';

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

export function* userSagas() {
	yield all([startSignInWithGoogle()]);
}
