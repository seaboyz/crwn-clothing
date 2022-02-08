import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	sections: [],
	status: 'idle',
	error: null
};

const directorySlice = createSlice({
	name: 'directory',
	initialState,
	reducers: {
		fetchDirectoryStart(state) {
			state.status = 'loading';
		},
		fetchDirectorySuccess(state, action) {
			state.status = 'succedded';
			state.sections = action.payload;
		},
		fetchDirectoryFailed(state, action) {
			state.status = 'failed';
			state.error = action.payload.message;
		}
	}
});

export const {
	fetchDirectoryStart,
	fetchDirectorySuccess,
	fetchDirectoryFailed
} = directorySlice.actions;
export default directorySlice.reducer;
