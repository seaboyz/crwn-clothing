import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
	name: 'user',
	initialState: {
		currentUser: null,
		status: 'idle',
		error: null
	},
	reducers: {
		setCurrentUser(state, action) {
			state.currentUser = action.payload;
		},
		signInWithGoogleStart(state, action) {
			state.status = 'loading';
		},
		signInWithWithEmailAndPasswordStart(state, action) {
			state.status = 'loading';
		},
		signInSuccess(state, action) {
			state.status = 'succeeded';
			state.error = null;
			state.currentUser = action.payload;
		},
		signInFailed(state, action) {
			state.status = 'failed';
			state.error = action.payload.message;
		},
		signOut(state) {
			state.status = 'idle';
			state.currentUser = null;
		},
		checkUserSession() {}
	}
});

export const {
	setCurrentUser,
	signInWithGoogleStart,
	signInWithWithEmailAndPasswordStart,
	signInSuccess,
	signInFailed,
	signOut,
	checkUserSession
} = slice.actions;

export default slice.reducer;
