import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { persistedReducer } from './root.reducer';

import { persistStore } from 'redux-persist';

const store = configureStore({
	reducer: persistedReducer,
	middleware: [logger]
});

export const persistor = persistStore(store);

export default store;
