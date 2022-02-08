import { all } from 'redux-saga/effects';
import { directorySagas } from './directory/directory.saga';
import { shopSagas } from './shop/shop.saga';
import { userSagas } from './user/user.saga';

export default function* rootSaga() {
	yield all([shopSagas(), userSagas(), directorySagas()]);
}
