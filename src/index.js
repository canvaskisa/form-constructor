import React from 'react';
import ReactDOM from 'react-dom';
import FormConstructor from 'components/FormConstructor';

const $node = document.getElementById('form-contructor-root');

const stateStr = localStorage.getItem('form-constructor-preview');
const initialState = stateStr ? JSON.parse(stateStr) : undefined;

const handleSave = state => localStorage.setItem('form-constructor-preview', JSON.stringify(state));

ReactDOM.render(
	<FormConstructor
		onSave={handleSave}
		initialState={initialState}
		/>,
	$node
);
