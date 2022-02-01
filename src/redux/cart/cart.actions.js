import {
	ADD_ITEM,
	REMOVE_ITEM,
	TOGGLE_CART_HIDDEN,
	INC_QUANTITY,
	DEC_QUANTITY
} from './cart.action.types';

export const toggleCartHidden = () => ({ type: TOGGLE_CART_HIDDEN });

export const addItem = item => ({ type: ADD_ITEM, payload: item });

export const removeItem = id => ({ type: REMOVE_ITEM, payload: id });

export const incQuantity = id => ({ type: INC_QUANTITY, payload: id });

export const decQuantity = id => ({ type: DEC_QUANTITY, payload: id });
