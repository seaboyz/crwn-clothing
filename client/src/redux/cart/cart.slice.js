import { createSlice } from '@reduxjs/toolkit';
import { assoc } from 'ramda';

const initialState = {
	hidden: true,
	cartItems: []
};

const slice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		toggleCartHidden(state) {
			state.hidden = !state.hidden;
		},

		addItem(state, action) {
			const foundItem = state.cartItems.find(
				cartItem => cartItem.id === action.payload.id
			);
			if (foundItem) {
				foundItem.quantity += 1;
			} else {
				const item = assoc('quantity', 1, action.payload);
				state.cartItems.push(item);
			}
		},

		removeItem(state, action) {
			const foundItemIndex = state.cartItems.findIndex(
				cartItem => cartItem.id === action.payload
			);
			if (foundItemIndex === -1) {
				return;
			}
			state.cartItems.splice(foundItemIndex, 1);
		},

		incQuantity(state, action) {
			const foundItem = state.cartItems.find(
				cartItem => cartItem.id === action.payload
			);
			foundItem.quantity += 1;
		},

		decQuantity(state, action) {
			const foundItemIndex = state.cartItems.findIndex(
				cartItem => cartItem.id === action.payload
			);
			const foundItem = state.cartItems.find(
				cartItem => cartItem.id === action.payload
			);
			if (foundItemIndex === -1) {
				return;
			}
			if (foundItem.quantity === 1) {
				state.cartItems.splice(foundItemIndex, 1);
			} else {
				foundItem.quantity -= 1;
			}
		},

		clearCart(state) {
			state.cartItems = [];
		}
	}
});

export const {
	addItem,
	removeItem,
	incQuantity,
	decQuantity,
	toggleCartHidden,
	clearCart
} = slice.actions;

export default slice.reducer;
