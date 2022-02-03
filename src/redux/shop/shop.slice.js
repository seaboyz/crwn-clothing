import { createSlice } from '@reduxjs/toolkit';
import SHOP_DATA from '../../pages/shop/shop.data';

const initialState = {
	collections: SHOP_DATA.reduce((collections, collection) => {
		collections[collection.routeName] = collection;
		return collections;
	}, {})
};

const shopSlice = createSlice({
	name: 'shop',
	initialState,
	reducers: {
		getShopData(state, action) {
			return state;
		}
	}
});

export const { getShopData } = shopSlice.actions;

export default shopSlice.reducer;
