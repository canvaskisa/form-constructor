import {arrayMove} from 'react-sortable-hoc';
import shortid from 'shortid';
import field from './field';

// Constants
export const constants = {
	ADD: '@FIELDS/ADD',
	SORT: '@FIELDS/SORT',
	REMOVE: '@FIELDS/REMOVE',
	CHANGE_TITLE: '@FIELDS/CHANGE_TITLE',
	CHANGE_REQUIRED: '@FIELDS/CHANGE_REQUIRED',
	ADD_CHOICE: '@FIELDS/ADD_CHOICE',
	REMOVE_CHOICE: '@FIELDS/REMOVE_CHOICE',
	UPDATE_CHOICE: '@FIELDS/UPDATE_CHOICE'
};

// Actions
export const actions = {
	add: (kind, multi) => ({type: constants.ADD, kind, multi, id: shortid.generate()}),
	remove: id => ({type: constants.REMOVE, id}),
	changeTitle: (id, title) => ({type: constants.CHANGE_TITLE, id, title}),
	changeRequired: (id, required) => ({type: constants.CHANGE_REQUIRED, id, required}),
	addChoice: id => ({type: constants.ADD_CHOICE, id, choiceId: shortid.generate()}),
	removeChoice: (id, choiceId) => ({type: constants.REMOVE_CHOICE, id, choiceId}),
	updateChoice: (id, choiceId, value) => ({type: constants.UPDATE_CHOICE, id, choiceId, value}),
	sort: (oldIndex, newIndex) => ({type: constants.SORT, oldIndex, newIndex})
};

// Initial State
export const initialState = [];

// Reducer
export default (state = initialState, action) => {
	switch (action.type) {
		case constants.ADD:
			return [...state, field(undefined, action)];

		case constants.SORT:
			return arrayMove([...state], action.oldIndex, action.newIndex);

		case constants.REMOVE:
			return state.filter(({id}) => id !== action.id);

		case constants.CHANGE_TITLE:
		case constants.CHANGE_REQUIRED:
		case constants.ADD_CHOICE:
		case constants.UPDATE_CHOICE:
		case constants.REMOVE_CHOICE:
			return state.map(f => field(f, action));

		default:
			return state;
	}
};
