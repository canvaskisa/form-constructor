import React, {PropTypes as T, Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import * as ducks from 'ducks';
import Aside from 'components/Modules/Aside';
import Form from 'components/Modules/Form';
import styles from './index.css';

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
		if (this.props.onSave) {
			this.props.onSave(this.store.getState());
		}
	}
}

export default FormConstructor;
