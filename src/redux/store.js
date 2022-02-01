import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rootReducer from './root.reducer';

export default configureStore({
	reducer: rootReducer
	middleware: [logger]
});
