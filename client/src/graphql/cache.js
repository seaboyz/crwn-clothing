import { makeVar, InMemoryCache } from '@apollo/client';

export const cartHiddenVar = makeVar(true);

export const cache = new InMemoryCache({
	typePolicies: {
		Query: {
			fields: {
				cartHidden: {
					read() {
						return cartHiddenVar();
					}
				}
			}
		}
	}
});
