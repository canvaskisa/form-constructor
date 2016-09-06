import React, {PropTypes as T, Component} from 'react';
import cx from 'classnames';
import Editable from 'components/Base/Editable';
import styles from './index.css';

class Title extends Component {
	static displayName = 'FormConstructor/Modules/Form/Field/Title';

	static propTypes = {
		error: T.string,
		id: T.string.isRequired,
		title: T.string.isRequired,
		onChange: T.func.isRequired,
		required: T.bool.isRequired
	};

	constructor(...args) {
		super(...args);
		this.handleChange = ::this.handleChange;
	}

	render() {
		const {error} = this.props;
		const classes = cx(styles.root, {
			[styles.required]: this.props.required
		});

		return (
			<h2 className={classes}>
				<Editable
					value={this.props.title}
					onChange={this.handleChange}
					className={styles.editable}
					valueClassName={styles.value}
					inputClassName={styles.input}
					/>

				{error ? <p className={styles.error}>{error}</p> : null}
			</h2>
		);
	}

	handleChange(value) {
		this.props.onChange(this.props.id, value);
	}
}

export default Title;
