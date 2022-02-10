import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
	selectCart,
	cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(selectCartItems, cartItems =>
	cartItems.reduce((acc, cur) => acc + cur.quantity, 0)
);

export const selectCartDropDownHidden = createSelector(
	selectCart,
	cart => cart.hidden
);

export const selectTotalPrice = createSelector(selectCartItems, cartItems =>
	cartItems.reduce((total, item) => total + item.quantity * item.price, 0)
);
