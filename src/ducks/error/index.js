// Constants
export const constants = {
	SET: '@ERROR/SET',
	CLEAR: '@ERROR/CLEAR'
};

// Actions
export const actions = {
	set: message => ({type: constants.SET, message}),
	clear: () => ({type: constants.CLEAR})
};

// Initial State
export const initialState = '';

// Reducer
export default (state = initialState, action) => {
	switch (action.type) {
		case constants.SET:
			return action.message;

		case constants.CLEAR:
			return initialState;

		default:
			return state;
	}
};
