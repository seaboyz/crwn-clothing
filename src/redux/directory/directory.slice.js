import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getDirectory } from '../../firebase/firebase.util';

const initialState = {
	sections: [],
	status: 'idle',
	error: null
};

const directorySlice = createSlice({
	name: 'directory',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchDirectory.pending, state => {
			state.status = 'loading';
		});
		builder.addCase(fetchDirectory.fulfilled, (state, action) => {
			state.status = 'succeeded';
			state.sections = action.payload;
		});
		builder.addCase(fetchDirectory.rejected, (state, action) => {
			state.status = 'failed';
			state.error = action.error.message;
		});
	}
});

export const fetchDirectory = createAsyncThunk(
	'directory/fetchDirectory',
	async () => await getDirectory()
);

export default directorySlice.reducer;
