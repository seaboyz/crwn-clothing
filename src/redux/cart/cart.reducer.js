import { ADD_ITEM, TOGGLE_CART_HIDDEN } from './cart.action.types';
import { over, lensPath, add } from 'ramda';

const initialState = {
	hidden: true,
	cartItems: []
};

const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_CART_HIDDEN:
			return { ...state, hidden: !state.hidden };

		case ADD_ITEM:
			const cartItems = state.cartItems;
			const foundItemIndex = cartItems.findIndex(
				cartItem => cartItem.id === action.payload.id
			);
			if (foundItemIndex === -1)
				return {
					...state,
					cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }]
				};
			return {
				...state,
				cartItems: over(
					lensPath([foundItemIndex, 'quantity']),
					add(1),
					cartItems
				)
			};

		default:
			return state;
	}
};

export default cartReducer;
