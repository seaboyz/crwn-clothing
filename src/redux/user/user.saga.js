import { takeLatest, call, put, all } from 'redux-saga/effects';
import {
	checkUserSession,
	signInFailed,
	signInSuccess,
	signInWithGoogleStart,
	signInWithWithEmailAndPasswordStart
} from '../../redux/user/user.slice';
import {
	getCurrentUser,
	signInWithEmail,
	signInWithGoogle
} from '../../firebase/firebase.util';

export function* userSagas() {
	yield all([
		watchStartSignInWithEmail(),
		watchStartSignInWithGoogle(),
		watchCheckUserSession()
	]);
}

function* watchStartSignInWithGoogle() {
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

function* watchStartSignInWithEmail() {
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

function* watchCheckUserSession() {
	yield takeLatest(checkUserSession.type, startCheckUserSession);
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
