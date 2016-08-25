import test from 'ava';
import {constants} from '../index';
import reducer, {initialState} from './index';

test('ducks/fields/choices/reducer', t => {
	t.deepEqual(
		reducer(undefined, {}),
		initialState,
		'Must return initialState by default.'
	);

	t.deepEqual(
		reducer(undefined, {type: constants.ADD_CHOICE, choiceId: 'wat'}),
		[{title: 'Choice', id: 'wat'}],
		'Must handle constants.ADD_CHOICE action.'
	);

	t.deepEqual(
		reducer([{title: '1', choiceId: '1'}], {type: constants.ADD_CHOICE, choiceId: 'wat'}),
		[{title: '1', choiceId: '1'}, {title: 'Choice', id: 'wat'}],
		'Must handle constants.ADD_CHOICE action with defined initialState.'
	);

	t.deepEqual(
		reducer([{title: '1', id: '1'}], {type: constants.UPDATE_CHOICE, choiceId: '1', value: 'new'}),
		[{title: 'new', id: '1'}],
		'Must handle constants.UPDATE_CHOICE action.'
	);

	t.deepEqual(
		reducer([{title: '1', id: '1'}], {type: constants.REMOVE_CHOICE, choiceId: '1'}),
		[],
		'Must handle constants.REMOVE_CHOICE action.'
	);
});
