import { ApolloClient } from '@apollo/client';
import { cache } from './cache';

const client = new ApolloClient({
	uri: 'https://crwn-clothing.com/',
	cache
});

export default client;
