import choices from '../choices';
import {constants} from '../index';

// Initial State
export const initialState = {};

// Reducer
export default (state = initialState, action) => {
	switch (action.type) {
		case constants.ADD:
			return {
				id: action.id,
				required: false,
				kind: action.kind,
				title: action.kind,
				choices: action.multi ? [] : null
			};

		case constants.CHANGE_TITLE:
			return state.id === action.id ? ({...state, title: action.title}) : state;

		case constants.CHANGE_REQUIRED:
			return state.id === action.id ? ({...state, required: action.required}) : state;

		case constants.ADD_CHOICE:
		case constants.UPDATE_CHOICE:
		case constants.REMOVE_CHOICE:
			return state.id === action.id ? ({...state, choices: choices(state.choices, action)}) : state;

		default:
			return state;
	}
};

