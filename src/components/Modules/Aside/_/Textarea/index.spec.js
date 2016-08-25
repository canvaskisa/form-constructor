import test from 'ava';
import sinon from 'sinon';
import React from 'react';
import {shallow} from 'enzyme';
import styles from './index.css';
import Textarea from './index';

test('Modules/Aside/Textarea', t => {
	const props = {
		value: 'Test value',
		onChange: sinon.spy()
	};

	const el = shallow(<Textarea {...props}/>);

	t.is(el.type(), 'textarea', 'Must render `textarea` node as root element.');
	t.truthy(el.hasClass(styles.root), 'Must have .root className.');
	t.is(el.prop('value'), props.value, 'Must render value prop.');

	el.simulate('change', {target: {value: 'Simple value'}});
	t.truthy(props.onChange.calledOnce, 'Must call `onChange` prop func, when button is clicked.');
	t.truthy(props.onChange.calledWith('Simple value'), 'Must call `onChange` prop func with textarea current value.');
});
