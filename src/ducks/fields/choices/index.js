import {constants} from '../index';

// Helpers
const uniq = arr => arr.filter((value, index) => arr.indexOf(value) === index);
const checkIfTitlesUnique = items => uniq(items.map(({title}) => title.trim())).length === items.length ? null : 'Titles must be unique';

// Initial State
export const initialState = {
	items: [],
	error: null
};

// Reducer
export default (state = initialState, action) => {
	switch (action.type) {
		case constants.ADD_CHOICE:
			return (() => {
				const items = [...state.items, {id: action.choiceId, title: 'Choice', error: null}];

				return ({
					items,
					error: checkIfTitlesUnique(items)
				});
			})();

		case constants.UPDATE_CHOICE:
			return (() => {
				const items = state.items.map(choice => choice.id === action.choiceId ? ({
					...choice,
					title: action.value,
					error: action.value.trim() ? null : 'Cannot be empty'
				}) : choice);

				return ({
					items,
					error: checkIfTitlesUnique(items)
				});
			})();

		case constants.REMOVE_CHOICE:
			return (() => {
				const items = state.items.filter(({id}) => id !== action.choiceId);

				return ({
					items,
					error: items.length ? checkIfTitlesUnique(items) : 'Choices cannot be empty'
				});
			})();

		default:
			return state;
	}
};
