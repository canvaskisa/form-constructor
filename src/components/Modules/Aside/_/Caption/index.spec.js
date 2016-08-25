import test from 'ava';
import React from 'react';
import {shallow} from 'enzyme';
import styles from './index.css';
import Caption from './index';

test('Modules/Aside/Caption', t => {
	const el = shallow(<Caption title="Test title"/>);
	t.is(el.type(), 'h3', 'Must render `h3` node as root element.');
	t.truthy(el.hasClass(styles.root), 'Must have .root className.');
	t.is(el.text(), 'Test title', 'Must render title prop.');
});
