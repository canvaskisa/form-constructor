// Constants
export const constants = {
	UPDATE: '@DESCRIPTION/UPDATE'
};

// Actions
export const actions = {
	update: value => ({type: constants.UPDATE, value})
};

// Initial State
export const initialState = '';

// Reducer
export default (state = initialState, action) => {
	switch (action.type) {
		case constants.UPDATE:
			return action.value;

		default:
			return state;
	}
};
