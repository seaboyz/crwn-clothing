import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { firebase } from '../../firebase/firebase.util';

const initialState = {
	sections: [],
	status: 'idle',
	error: null
};

export const fetchDirectory = createAsyncThunk('directory/fetch', async () => {
	const directory = await firebase.getDirectory();
	return directory;
});

const directorySlice = createSlice({
	name: 'directory',
	initialState,
	extraReducers: builder => {
		builder
			.addCase(fetchDirectory.pending, state => {
				state.status = 'loading';
			})
			.addCase(fetchDirectory.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.sections = action.payload;
			});
	}
});

export default directorySlice.reducer;
