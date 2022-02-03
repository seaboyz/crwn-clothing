import { combineReducers } from 'redux';

import userReducer from './user/user.slice';
import cartReducer from './cart/cart.slice';
import directoryReducer from './directory/directory.slice';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
	user: userReducer,
	cart: cartReducer,
	directory: directoryReducer
});

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['cart']
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);

export default rootReducer;
