import test from 'ava';
import sinon from 'sinon';
import React from 'react';
import {shallow} from 'enzyme';
import styles from './index.css';
import Controls from './index';

test('Modules/Aside/Controls', t => {
	const props = {
		views: [{type: 'test', title: 'Test'}],
		onChange: sinon.spy(),
		activeIndex: 0
	};

	const el = shallow(<Controls {...props}/>);

	t.is(el.type(), 'ul', 'Must render `ul` node as root element.');
	t.truthy(el.hasClass(styles.root), 'Must have .root className.');
});
