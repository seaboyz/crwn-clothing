import { SET_CURRENT_USER } from './user.actions.types.js';

const userReducer = (state = { currentUser: null }, action) => {
	switch (action.type) {
		case SET_CURRENT_USER:
			return {
				...state,
				currentUser: action.payload
			};
		default:
			return state;
	}
};

export default userReducer;
