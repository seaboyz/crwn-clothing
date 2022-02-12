import { InMemoryCache } from '@apollo/client';
import { GET_CART_HIDDEN } from './cart/cart.query';

export const cache = new InMemoryCache();

cache.writeQuery({
	query: GET_CART_HIDDEN,
	data: { cartHidden: true }
});

export const toggleCartHidden = () =>
	cache.updateQuery({ query: GET_CART_HIDDEN }, data => ({
		cartHidden: !data.cartHidden
	}));
