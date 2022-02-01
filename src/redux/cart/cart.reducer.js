import {
	ADD_ITEM,
	TOGGLE_CART_HIDDEN,
	REMOVE_ITEM,
	INC_QUANTITY,
	DEC_QUANTITY
} from './cart.action.types';
import { __, over, lensPath, add, subtract } from 'ramda';

const initialState = {
	hidden: true,
	cartItems: []
};

const cartReducer = (state = initialState, action) => {
	const cartItems = state.cartItems;
	switch (action.type) {
		case TOGGLE_CART_HIDDEN: {
			return { ...state, hidden: !state.hidden };
		}

		case ADD_ITEM: {
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
		}

		case REMOVE_ITEM: {
			return {
				...state,
				cartItems: cartItems.filter(cartItem => cartItem.id !== action.payload)
			};
		}

		case INC_QUANTITY: {
			const foundItemIndex = cartItems.findIndex(
				cartItem => cartItem.id === action.payload
			);
			if (foundItemIndex === -1) {
				return state;
			}
			return {
				...state,
				cartItems: over(
					lensPath([foundItemIndex, 'quantity']),
					add(1),
					cartItems
				)
			};
		}

		case DEC_QUANTITY: {
			const foundItemIndex = cartItems.findIndex(
				cartItem => cartItem.id === action.payload
			);
			if (foundItemIndex === -1) {
				return state;
			}
			if (cartItems[foundItemIndex].quantity === 1) {
				return {
					...state,
					cartItems: cartItems.filter(
						cartItem => cartItem.id !== action.payload
					)
				};
			}
			return {
				...state,
				cartItems: over(
					lensPath([foundItemIndex, 'quantity']),
					subtract(__, 1),
					cartItems
				)
			};
		}

		default:
			return state;
	}
};

export default cartReducer;
