import { InMemoryCache } from '@apollo/client';
import { add, append, assoc, lensPath, over } from 'ramda';
import { GET_CART_HIDDEN, GET_CART_ITEMS } from './cart/cart.query';

export const cache = new InMemoryCache();

cache.writeQuery({
	query: GET_CART_HIDDEN,
	data: { cartHidden: true }
});

cache.writeQuery({
	query: GET_CART_ITEMS,
	data: { cartItems: [] }
});

export const toggleCartHidden = () =>
	cache.updateQuery({ query: GET_CART_HIDDEN }, data => ({
		cartHidden: !data.cartHidden
	}));

export const addItem = item =>
	cache.updateQuery({ query: GET_CART_ITEMS }, data => {
		const cartItems = data.cartItems;
		const idx = cartItems.findIndex(cartItem => cartItem.id === item.id);
		if (idx === -1) {
			return {
				cartItems: append(assoc('quantity', 1, item), cartItems)
			};
		} else {
			return {
				cartItems: over(lensPath([idx, 'quantity']), add(1), cartItems)
			};
		}
	});
