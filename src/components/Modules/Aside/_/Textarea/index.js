import React, {PropTypes as T, Component} from 'react';
import styles from './index.css';

class Textarea extends Component {
	static propTypes = {
		value: T.string.isRequired,
		onChange: T.func.isRequired
	};

	constructor(...args) {
		super(...args);
		this.handleChange = ::this.handleChange;
	}

	render() {
		return (
			<textarea
				className={styles.root}
				value={this.props.value}
				onChange={this.handleChange}
				placeholder="Write your form description here"
				/>
		);
	}

	handleChange(e) {
		this.props.onChange(e.target.value);
	}
}

export default Textarea;
