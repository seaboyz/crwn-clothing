import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { persistedReducer } from './root.reducer';

import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './root.saga';

const sagaMiddleware = createSagaMiddleware();

const middleware = [thunk, sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
	middleware.push(logger);
}

const store = configureStore({
	reducer: persistedReducer,
	middleware
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default store;
