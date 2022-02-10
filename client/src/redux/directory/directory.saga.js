import { all, takeLatest, call, put } from 'redux-saga/effects';
import { getDirectory } from '../../firebase/firebase.util';
import {
	fetchDirectoryFailed,
	fetchDirectoryStart,
	fetchDirectorySuccess
} from './directory.slice';

export function* directorySagas() {
	yield all([watchFetchDirectory()]);
}

function* watchFetchDirectory() {
	yield takeLatest(fetchDirectoryStart.type, fetchDirectory);
}

function* fetchDirectory() {
	try {
		const data = yield call(getDirectory);
		yield put(fetchDirectorySuccess(data));
	} catch (error) {
		yield put(fetchDirectoryFailed(error));
	}
}
