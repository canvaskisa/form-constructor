import React, {PropTypes as T, Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import * as ducks from 'ducks';
import * as $$error from 'ducks/error';
import Aside from 'components/Modules/Aside';
import Form from 'components/Modules/Form';
import styles from './index.css';

const uniq = arr => arr.filter((value, index) => arr.indexOf(value) === index);

class FormConstructor extends Component {
	static propTypes = {
		onSave: T.func,
		initialState: T.object
	};

	constructor(props, context) {
		super(props, context);
		this.store = process.env.NODE_ENV === 'production' ?
			createStore(
				combineReducers(ducks),
				props.initialState ? props.initialState : undefined
			) : createStore(
				combineReducers(ducks),
				props.initialState ? props.initialState : undefined,
				applyMiddleware(require('redux-logger')({collapsed: true}))
			);

		this.handleSave = ::this.handleSave;
	}

	render() {
		return (
			<Provider store={this.store}>
				<div className={styles.root}>
					<Aside/>
					<Form onSave={this.handleSave}/>
				</div>
			</Provider>
		);
	}

	handleSave() {
		const state = this.store.getState();

		if (!state.title.trim()) {
			this.store.dispatch($$error.actions.set('Form title cannot be empty.'));
		} else if (!state.fields.length) {
			this.store.dispatch($$error.actions.set('Form must contain questions.'));
		} else if (state.fields.some(({title}) => !title.trim())) {
			this.store.dispatch($$error.actions.set('Question title cannot be empty.'));
		} else if (uniq(state.fields.map(({title}) => title)).length !== state.fields.length) {
			this.store.dispatch($$error.actions.set('Question must contain unique title.'));
		} else if (!state.fields.every(({choices}) => choices !== null ? choices.length : true)) {
			this.store.dispatch($$error.actions.set('Question choices must not be empty.'));
		} else if (!state.fields.every(({choices}) =>
			choices !== null ?
				uniq(choices.map(({title}) => title)).length === choices.length :
				true
			)) {
			this.store.dispatch($$error.actions.set('Question choices must be unique'));
		} else {
			if (state.error) {
				this.store.dispatch($$error.actions.clear());
			}

			if (this.props.onSave) {
				this.props.onSave(this.store.getState());
			}
		}
	}
}

export default FormConstructor;
