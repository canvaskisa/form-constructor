import React, {PropTypes as T, Component} from 'react';
import cx from 'classnames';
import {connect} from 'react-redux';
import * as $$description from 'ducks/description';
import * as $$title from 'ducks/title';
import * as $$fields from 'ducks/fields';
import * as _ from './_';
import {views, fields} from './data.json';
import styles from './index.css';

export class Aside extends Component {
	static propTypes = {
		description: T.string.isRequired,
		onDescriptionUpdate: T.func.isRequired,
		title: T.string.isRequired,
		onTitleUpdate: T.func.isRequired,
		onFieldAdd: T.func.isRequired
	};

	constructor(...args) {
		super(...args);
		this.state = {activeIndex: 0, isShown: false};
		this.handleViewChange = ::this.handleViewChange;
		this.handleBurgerClick = ::this.handleBurgerClick;
	}

	render() {
		const {activeIndex, isShown} = this.state;
		const classes = cx(styles.root, {
			[styles.shown]: isShown
		});

		return (
			<aside className={classes}>
				<_.Burger
					isOpen={isShown}
					onClick={this.handleBurgerClick}
					/>

				<_.Title
					value={this.props.title}
					onChange={this.props.onTitleUpdate}
					/>

				<_.Controls
					views={views}
					activeIndex={activeIndex}
					onChange={this.handleViewChange}
					/>

				<div className={styles.container}>
					<_.Caption title={views[activeIndex].caption}/>
					<_.Subtitle title={views[activeIndex].title}/>

					{views[activeIndex].view === 'fields' ? (
						<_.Fields
							fields={fields}
							onFieldClick={this.props.onFieldAdd}
							/>
					) : (
						<_.Textarea
							value={this.props.description}
							onChange={this.props.onDescriptionUpdate}
							/>
					)}
				</div>
			</aside>
		);
	}

	handleViewChange(activeIndex) {
		this.setState({activeIndex});
	}

	handleBurgerClick() {
		this.setState({isShown: !this.state.isShown});
	}
}

export const stateToProps = ({description, title}) => ({
	description,
	title
});

export const dispatchToProps = dispatch => ({
	onDescriptionUpdate: value => dispatch($$description.actions.update(value)),
	onTitleUpdate: value => dispatch($$title.actions.update(value)),
	onFieldAdd: (kind, multi) => dispatch($$fields.actions.add(kind, multi))
});

export default connect(stateToProps, dispatchToProps)(Aside);
