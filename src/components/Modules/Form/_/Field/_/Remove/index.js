import React, {PropTypes as T, Component} from 'react';
import styles from './index.css';

class Remove extends Component {
	static displayName = 'FormConstructor/Modules/Form/Field/Remove';

	static propTypes = {
		onRemove: T.func.isRequired,
		id: T.string.isRequired
	};

	constructor(...args) {
		super(...args);
		this.handleClick = ::this.handleClick;
	}

	render() {
		return (
			<button type="button" className={styles.root} onClick={this.handleClick}>
				Remove
			</button>
		);
	}

	handleClick() {
		this.props.onRemove(this.props.id);
	}
}

export default Remove;
