import {constants} from '../index';

// Initial State
export const initialState = [];

// Reducer
export default (state = initialState, action) => {
	switch (action.type) {
		case constants.ADD_CHOICE:
			return [...state, {id: action.choiceId, title: 'Choice'}];

		case constants.UPDATE_CHOICE:
			return state.map(choice => choice.id === action.choiceId ? ({...choice, title: action.value}) : choice);

		case constants.REMOVE_CHOICE:
			return state.filter(({id}) => id !== action.choiceId);

		default:
			return state;
	}
};
