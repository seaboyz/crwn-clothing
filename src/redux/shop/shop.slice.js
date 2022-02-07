import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	collections: [],
	status: 'idle',
	error: null
};

// export const fetchShopData = createAsyncThunk(
// 	'shop/fetchShopData',
// 	async () => await getShopData()
// );

const shopSlice = createSlice({
	name: 'shop',
	initialState,
	reducers: {
		fetchShopData(state) {
			if (state.status === 'idle') {
				state.status = 'loading';
			}
		},
		fetchShopDataSuccess(state, action) {
			state.status = 'succeeded';
			state.collections = action.payload;
		},
		fetchShopDataFailed(state, action) {
			state.status = 'failed';
			state.error = action.error.message;
		}
	}
});
export default shopSlice.reducer;
export const { fetchShopData, fetchShopDataSuccess, fetchShopDataFailed } =
	shopSlice.actions;
