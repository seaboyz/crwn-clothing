import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getShopData } from '../../firebase/firebase.util';
import SHOP_DATA from '../../pages/shop/shop.data';

const initialState = {
	collections: [],
	status: 'idle',
	error: null
};

export const fetchShopData = createAsyncThunk(
	'shop/fetchShopData',
	async () => await getShopData()
);

const shopSlice = createSlice({
	name: 'shop',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchShopData.pending, state => {
			state.status = 'loading';
		});
		builder.addCase(fetchShopData.fulfilled, (state, action) => {
			state.status = 'succeeded';
			state.collections = action.payload;
		});
		builder.addCase(fetchShopData.rejected, (state, action) => {
			state.status = 'failed';
			state.error = action.error.message;
		});
	}
});

export default shopSlice.reducer;
