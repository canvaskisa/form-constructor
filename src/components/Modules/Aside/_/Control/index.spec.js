import test from 'ava';
import sinon from 'sinon';
import React from 'react';
import {shallow} from 'enzyme';
import styles from './index.css';
import Control from './index';

test('Modules/Aside/Control', t => {
	const props = {
		isActive: true,
		onChange: sinon.spy(),
		index: 0,
		title: 'Test'
	};

	const el = shallow(<Control {...props}/>);

	t.is(el.type(), 'li', 'Must render `li` node as root element.');
	t.truthy(el.hasClass(styles.root), 'Must have .root className.');
	t.truthy(el.hasClass(styles.active), 'Must have .active className, when `isActive` props is passed.');
	t.is(el.find('button').text(), props.title, 'Must render title prop.');

	el.find('button').simulate('click');
	t.truthy(props.onChange.calledOnce, 'Must call `onChange` prop func, when button is clicked.');
	t.truthy(props.onChange.calledWith(props.index), 'Must call `onChange` prop func with `index` prop.');
});
