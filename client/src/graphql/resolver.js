import { gql } from '@apollo/client';
import { GET_CART_HIDDEN } from './cart/cart.query';

export const typeDefs = gql`
	extend type Mutation {
		ToggleCartHidden: Boolean!
	}
`;

export const resolvers = {
	Mutation: {
		toggleCartHiddent: (_root, _args, { cache }, _info) => {
			const { cartHidden } = cache.readQuery({ query: GET_CART_HIDDEN });

			cache.writeQuery({
				query: GET_CART_HIDDEN,
				data: { cartHidden: !cartHidden }
			});

			return !cartHidden;
		}
	}
};
