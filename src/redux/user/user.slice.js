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
		signInWithGoogleSuccess(state, action) {
			state.status = 'succeeded';
			state.error = null;
			state.currentUser = action.payload;
		},
		signInWithGoogleFailed(state, action) {
			state.status = 'failed';
			state.error = action.error.message;
		},
		signInWithWithEmailAndPasswordStart(state, action) {
			state.status = 'loading';
		},
		signInWithWithEmailAndPasswordSuccess(state, action) {
			state.status = 'succeeded';
			state.error = null;
			state.currentUser = action.payload;
		},
		signInWithWithEmailAndPasswordFailed(state, action) {
			state.status = 'failed';
			state.error = action.error.message;
		}
	}
});

export const {
	setCurrentUser,
	signInWithGoogleStart,
	signInWithGoogleSuccess,
	signInWithGoogleFailed,
	signInWithWithEmailAndPasswordStart,
	signInWithWithEmailAndPasswordSuccess,
	signInWithWithEmailAndPasswordFailed
} = slice.actions;

export default slice.reducer;
