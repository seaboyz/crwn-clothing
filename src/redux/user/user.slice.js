import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
	name: 'user',
	initialState: {
		currentUser: null
	},
	reducers: {
		setCurrentUser: (state, action) => {
			state.currentUser = action.payload;
		}
	}
});

export const { setCurrentUser } = slice.actions;

export default slice.reducer;
