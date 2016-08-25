import test from 'ava';
import sinon from 'sinon';
import React from 'react';
import {shallow} from 'enzyme';
import styles from './index.css';
import Field from './index';

test('Modules/Aside/Field', t => {
	const props = {
		onClick: sinon.spy(),
		title: 'Test',
		kind: 'textarea'
	};

	const el = shallow(<Field {...props}/>);
	t.is(el.type(), 'li', 'Must render `li` node as root element.');
	t.truthy(el.hasClass(styles.root), 'Must have .root className.');
	t.is(el.find('button').text(), props.title, 'Must render title prop.');

	el.find('button').simulate('click');
	t.truthy(props.onClick.calledOnce, 'Must call `onClick` prop func, when button is clicked.');
	t.truthy(props.onClick.calledWith(props.kind), 'Must call `onClick` prop func with `kind` prop.');
});
