import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
	selectShop,
	shopData => shopData.collections
);

export const selectStatus = createSelector(
	selectShop,
	shopData => shopData.status
);

export const selectNormalizedCollections = createSelector(
	selectCollections,
	collections =>
		collections.reduce((acc, { categaory, ...rest }) => {
			acc[categaory] = { ...rest };
			return acc;
		}, {})
);

export const selectCollection = category =>
	createSelector(selectCollections, collections =>
		collections.find(collection => collection.routeName === category)
	);
