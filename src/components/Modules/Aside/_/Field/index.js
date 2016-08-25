import React, {PropTypes as T, Component} from 'react';
import styles from './index.css';

class Field extends Component {
	static propTypes = {
		onClick: T.func.isRequired,
		kind: T.string.isRequired,
		title: T.string.isRequired,
		multi: T.bool
	};

	constructor(...args) {
		super(...args);
		this.handleClick = ::this.handleClick;
	}

	render() {
		return (
			<li className={styles.root}>
				<button type="button" className={styles.button} onClick={this.handleClick}>
					{this.props.title}
				</button>
			</li>
		);
	}

	handleClick() {
		this.props.onClick(this.props.kind, this.props.multi);
	}
}

export default Field;
