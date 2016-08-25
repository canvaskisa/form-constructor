import test from 'ava';
import React from 'react';
import {Provider} from 'react-redux';
import {shallow} from 'enzyme';
import FormConstructor from './FormConstructor';

test('components/FormConstructor', t => {
	const el = shallow(<FormConstructor/>);
	t.is(el.type(), Provider);
});
