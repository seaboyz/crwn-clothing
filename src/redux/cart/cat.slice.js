import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	hidden: true,
	cartItems: []
};

const slice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem(state, action) {
			const foundItem = state.cartItems.find(
				cartItem => cartItem.id === action.payload.id
			);
			if (foundItem) {
				foundItem.quantity += 1;
			} else {
				state.cartItems.push(action.payload);
			}
		},

		removeItem(state, action) {
			return state.cartItems.filter(cartItem => cartItem.id !== action.payload);
		},

		incQuantity(state, action) {
			const foundItem = state.cartItems.find(
				cartItem => cartItem.id === action.payload
			);
			foundItem.quantity += 1;
		},

		decQuantity(state, action) {
			const foundItem = state.cartItems.find(
				cartItem => cartItem.id === action.payload
			);
			if (foundItem.quantity === 1) {
				return state.cartItems.filter(
					cartItem => cartItem.id !== action.payload
				);
			} else {
				foundItem.quantity -= 1;
			}
		}
	}
});

export const { addItem, removeItem, incQuantity, decQuantity } = slice.actions;

export default slice.reducer;
