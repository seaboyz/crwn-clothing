import { createSlice } from '@reduxjs/toolkit';

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
				action.payload.quantity = 1;
				state.cartItems.push(action.payload);
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
		}
	}
});

export const {
	addItem,
	removeItem,
	incQuantity,
	decQuantity,
	toggleCartHidden
} = slice.actions;

export default slice.reducer;
