import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { firebase } from '../../firebase/firebase.util';

const initialState = {
	collections: [],
	status: 'idle',
	error: null
};

export const fetchShopData = createAsyncThunk(
	'shop/fetchShopData',
	async () => await firebase.getShopData()
);

const shopSlice = createSlice({
	name: 'shop',
	initialState,
	extraReducers: builder => {
		builder
			.addCase(fetchShopData.pending, state => {
				state.status = 'pending';
			})
			.addCase(fetchShopData.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.collections = action.payload;
			});
	}
});
export default shopSlice.reducer;
