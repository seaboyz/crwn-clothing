import { ApolloClient, InMemoryCache } from '@apollo/client';
import { typeDefs, resolvers } from './graphql.resolvers';
import { GET_CART_HIDDEN } from './cart/cart.query';

const cache = new InMemoryCache();
cache.writeQuery({ query: GET_CART_HIDDEN, data: { cartHidden: true } });

const client = new ApolloClient({
	uri: 'https://crwn-clothing.com/',
	cache,
	typeDefs,
	resolvers
});

export default client;
