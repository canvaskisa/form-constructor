import test from 'ava';
import reducer, {initialState} from './index';

test('ducks/fields/feild/reducer', t => {
	t.deepEqual(
		reducer(undefined, {}),
		initialState,
		'Must return initialState by default.'
	);
});
