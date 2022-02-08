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
		fetchShopDataStart(state) {
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
			state.error = action.payload.message;
		}
	}
});
export default shopSlice.reducer;
export const { fetchShopDataStart, fetchShopDataSuccess, fetchShopDataFailed } =
	shopSlice.actions;
