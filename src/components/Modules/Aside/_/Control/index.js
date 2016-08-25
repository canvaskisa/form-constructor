import React, {PropTypes as T, Component} from 'react';
import cx from 'classnames';
import styles from './index.css';

class Control extends Component {
	static displayName = 'FormContructor/Aside/Control';

	static propTypes = {
		isActive: T.bool.isRequired,
		onChange: T.func.isRequired,
		index: T.number.isRequired,
		title: T.string.isRequired
	};

	constructor(...args) {
		super(...args);
		this.handleClick = ::this.handleClick;
	}

	render() {
		return (
			<li className={cx(styles.root, {[styles.active]: this.props.isActive})}>
				<button className={styles.button} type="button" onClick={this.handleClick}>
					{this.props.title}
				</button>
			</li>
		);
	}

	handleClick() {
		this.props.onChange(this.props.index);
	}
}

export default Control;
