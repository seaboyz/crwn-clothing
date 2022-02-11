import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
	uri: 'https://crwn-clothing.com/',
	cache: new InMemoryCache()
});

export default client;
