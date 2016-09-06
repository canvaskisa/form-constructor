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
		({items: [{title: 'Choice', id: 'wat', error: null}], error: null}),
		'Must handle constants.ADD_CHOICE action.'
	);
});
