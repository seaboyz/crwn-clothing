import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { persistedReducer } from './root.reducer';

import { persistStore } from 'redux-persist';

const middleware = [];
if (process.env.NODE_ENV === 'development') {
	middleware.push(logger);
}

const store = configureStore({
	reducer: persistedReducer,
	middleware
});

export const persistor = persistStore(store);

export default store;
