import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
	name: 'user',
	initialState: {
		currentUser: null,
		status: 'idle',
		error: null
	},
	reducers: {
		signInWithGoogleStart(state) {
			state.status = 'loading';
		},
		signInWithWithEmailAndPasswordStart(state) {
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
		signOutStart() {},
		signOutSuccess(state) {
			state.status = 'succeeded';
			state.currentUser = null;
		},
		signOUtFailed(state, action) {
			state.status = 'failed';
			state.error = action.payload.message;
		},
		checkUserSessionStart() {},
		signUpStart(state) {
			state.status = 'loading';
		}
	}
});

export const {
	setCurrentUser,
	signInWithGoogleStart,
	signInWithWithEmailAndPasswordStart,
	signInSuccess,
	signInFailed,
	checkUserSessionStart,
	signOutStart,
	signOUtFailed,
	signOutSuccess,
	signUpStart
} = slice.actions;

export default slice.reducer;
