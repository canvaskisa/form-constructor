import test from 'ava';
import sinon from 'sinon';
import React from 'react';
import {shallow} from 'enzyme';
import styles from './index.css';
import Fields from './index';

test('Modules/Aside/Fields', t => {
	const props = {
		fields: [{kind: 'test', title: 'Test'}],
		onFieldClick: sinon.spy()
	};

	const el = shallow(<Fields {...props}/>);

	t.is(el.type(), 'ul', 'Must render `ul` node as root element.');
	t.truthy(el.hasClass(styles.root), 'Must have .root className.');
});
