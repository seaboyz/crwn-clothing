import { ADD_ITEM, TOGGLE_CART_HIDDEN } from './cart.action.types';

export const toggleCartHidden = () => ({ type: TOGGLE_CART_HIDDEN });

export const addItem = item => ({ type: ADD_ITEM, payload: item });
