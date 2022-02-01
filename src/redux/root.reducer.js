import { combineReducers } from 'redux';
// import userReducer from './user/user.reducer';
// import cartReducer from './cart/cart.reducer';

import userReducer from './user/user.slice';
import cartReducer from './cart/cart.slice';

const rootReducer = combineReducers({
	user: userReducer,
	cart: cartReducer
});

export default rootReducer;
