import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
	selectShop,
	shopData => shopData.collections
);
