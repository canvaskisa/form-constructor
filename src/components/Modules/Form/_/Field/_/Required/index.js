import React, {PropTypes as T, Component} from 'react';
import styles from './index.css';

class Required extends Component {
	static displayName = 'FormConstructor/Modules/Form/Field/Required';

	static propTypes = {
		onChange: T.func.isRequired,
		id: T.string.isRequired,
		checked: T.bool.isRequired
	};

	constructor(...args) {
		super(...args);
		this.handleChange = ::this.handleChange;
	}

	render() {
		return (
			<div className={styles.root}>
				<input
					type="checkbox"
					checked={this.props.checked}
					className={styles.checkbox}
					onChange={this.handleChange}
					/>
			</div>
		);
	}

	handleChange(e) {
		this.props.onChange(this.props.id, e.target.checked);
	}
}

export default Required;
