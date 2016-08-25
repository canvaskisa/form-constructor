import test from 'ava';
import {constants} from '../index';
import reducer, {initialState} from './index';

test('ducks/fields/feild/reducer', t => {
	t.deepEqual(
		reducer(undefined, {}),
		initialState,
		'Must return initialState by default.'
	);

	t.deepEqual(
		reducer(undefined, {type: constants.ADD, id: '1', kind: 'text'}),
		{
			id: '1',
			required: false,
			kind: 'text',
			title: 'text',
			choices: null
		},
		'Must handle constants.ADD action.'
	);

	t.deepEqual(
		reducer({title: '1', id: '1'}, {type: constants.CHANGE_TITLE, id: '1', title: 'new'}),
		{id: '1', title: 'new'},
		'Must handle constants.CHANGE_TITLE action.'
	);
});
