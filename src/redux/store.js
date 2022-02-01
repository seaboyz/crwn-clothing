import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer from './root.reducer';
import logger from 'redux-logger';

const middlewares = [logger];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
