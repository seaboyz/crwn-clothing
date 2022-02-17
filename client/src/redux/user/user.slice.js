import { firebase } from '../../firebase/firebase.util';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const signInWithGoogle = createAsyncThunk(
	'user/signInWithGoogle',
	async () => {
		const user = await firebase.signInWithGoogle();
		return user;
	}
);
export const checkUserSession = createAsyncThunk(
	'user/checkUserSession',
	async () => {
		const user = await firebase.getCurrentUser();
		return user;
	}
);
export const signInWithEmail = createAsyncThunk(
	'user/signInWithEmail',
	async ({ email, password }) => {
		const user = await firebase.signInWithEmail(email, password);
		return user;
	}
);
export const signUp = createAsyncThunk(
	'user/signUp',
	async ({ email, password, firstname, lastname }) => {
		const user = await firebase.signUp(email, password, firstname, lastname);
		return user;
	}
);

export const signOut = createAsyncThunk('user/signOUt', () => {
	firebase.userSignOut();
});

export const slice = createSlice({
	name: 'user',
	initialState: {
		currentUser: null
	},
	extraReducers: builder => {
		builder
			.addCase(signInWithGoogle.fulfilled, (state, action) => {
				state.currentUser = action.payload;
			})
			.addCase(signInWithEmail.fulfilled, (state, action) => {
				state.currentUser = action.payload;
			})
			.addCase(signUp.fulfilled, (state, action) => {
				state.currentUser = action.payload;
			})
			.addCase(checkUserSession.fulfilled, (state, action) => {
				state.currentUser = action.payload;
			})
			.addCase(signOut.fulfilled, state => {
				state.currentUser = null;
			});
	}
});

export default slice.reducer;
