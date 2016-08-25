import test from 'ava';
import reducer, {constants, actions, initialState} from './index';

test('ducks/description/reducer', t => {
	t.deepEqual(
		reducer(undefined, {}),
		initialState,
		'Must return initialState by default.'
	);

	t.deepEqual(
		reducer(undefined, {type: constants.UPDATE, value: 'Desc'}),
		'Desc',
		'Must handle constants.UPDATE action.'
	);

	t.deepEqual(
		reducer('Default', {type: constants.UPDATE, value: 'Desc'}),
		'Desc',
		'Must handle constants.UPDATE action with defined initialState.'
	);
});

test('ducks/description/actions/update', t => {
	const value = 'Description';

	t.deepEqual(
		actions.update(value),
		{type: constants.UPDATE, value},
		'Must create constants.UPDATE action.'
	);
});
