import client from './graphql.client';
import { GET_COLLECTIONS } from './shop/shop.query';

export const getShopData = async () => {
	const {
		data: { collections }
	} = await client.query({ query: GET_COLLECTIONS });

	return collections.map(collection => ({
		routeName: collection.title.toLowerCase(),
		...collection
	}));
};
