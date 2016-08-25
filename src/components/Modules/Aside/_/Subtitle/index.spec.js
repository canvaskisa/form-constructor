import test from 'ava';
import React from 'react';
import {shallow} from 'enzyme';
import styles from './index.css';
import Subtitle from './index';

test('Modules/Aside/Subtitle', t => {
	const el = shallow(<Subtitle title="Test title"/>);
	t.is(el.type(), 'h2', 'Must render `h2` node as root element.');
	t.truthy(el.hasClass(styles.root), 'Must have .root className.');
	t.is(el.text(), 'Test title', 'Must render title prop.');
});
