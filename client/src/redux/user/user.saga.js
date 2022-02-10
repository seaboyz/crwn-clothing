import { takeLatest, call, put, all } from 'redux-saga/effects';
import {
	checkUserSessionStart,
	signInFailed,
	signInSuccess,
	signInWithGoogleStart,
	signInWithWithEmailAndPasswordStart,
	signOutStart,
	signOutSuccess,
	signUpStart
} from './user.slice.js';
import {
	getCurrentUser,
	signInWithEmail,
	signInWithGoogle,
	signUp,
	userSignOut
} from '../../firebase/firebase.util';

export function* userSagas() {
	yield all([
		watchSignInWithEmailStart(),
		watchSignInWithGoogleStart(),
		watchCheckUserSessionStart(),
		watchSignOutStart(),
		watchSignUpStart()
	]);
}

function* watchSignInWithGoogleStart() {
	yield takeLatest(signInWithGoogleStart.type, startSignInWithGoogle);
}

function* startSignInWithGoogle() {
	try {
		const user = yield call(signInWithGoogle);
		yield put(signInSuccess(user));
	} catch (error) {
		yield put(signInFailed(error));
	}
}

function* watchSignInWithEmailStart() {
	yield takeLatest(
		signInWithWithEmailAndPasswordStart.type,
		startSignInwithEmail
	);
}

function* startSignInwithEmail(action) {
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

function* watchCheckUserSessionStart() {
	yield takeLatest(checkUserSessionStart.type, startCheckUserSession);
}

function* startCheckUserSession() {
	try {
		const user = yield getCurrentUser();
		if (!user) return;
		yield put(signInSuccess(user));
	} catch (error) {
		yield put(signInFailed(error));
	}
}

function* watchSignOutStart() {
	yield takeLatest(signOutStart.type, startUserSignOut);
}

function* startUserSignOut() {
	try {
		yield userSignOut();
		yield put(signOutSuccess());
	} catch (error) {
		yield put(signInFailed(error));
	}
}

function* watchSignUpStart() {
	yield takeLatest(signUpStart.type, onSignUpStart);
}

function* onSignUpStart(action) {
	try {
		const {
			payload: { firstname, lastname, email, password }
		} = action;
		const user = yield signUp(email, password, firstname, lastname);
		if (!user) return;
		yield put(signInSuccess(user));
	} catch (error) {
		yield put(signInFailed(error));
	}
}
