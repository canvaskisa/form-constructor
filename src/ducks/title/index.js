// Constants
export const constants = {
	UPDATE: '@TITLE/UPDATE'
};

// Actions
export const actions = {
	update: value => ({type: constants.UPDATE, value})
};

// Initial State
export const initialState = 'Form title';

// Reducer
export default (state = initialState, action) => {
	switch (action.type) {
		case constants.UPDATE:
			return action.value;

		default:
			return state;
	}
};
