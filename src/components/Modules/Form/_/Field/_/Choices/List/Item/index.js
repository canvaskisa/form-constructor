import React, {PropTypes as T, Component} from 'react';
import cx from 'classnames';
import Editable from 'components/Base/Editable';
import styles from './index.css';

class Item extends Component {
	static displayName = 'FormConstructor/Modules/Form/Field/Choices/List/Item';

	static propTypes = {
		id: T.string.isRequired,
		kind: T.string.isRequired,
		title: T.string.isRequired,
		onChange: T.func.isRequired,
		onRemove: T.func.isRequired
	};

	constructor(...args) {
		super(...args);
		this.handleChange = ::this.handleChange;
		this.handleRemove = ::this.handleRemove;
	}

	render() {
		return (
			<div className={cx(styles.root, styles[this.props.kind])}>
				<Editable
					value={this.props.title}
					className={styles.editable}
					inputClassName={styles.input}
					valueClassName={styles.value}
					onChange={this.handleChange}
					onRemove={this.handleRemove}
					/>
			</div>
		);
	}

	handleChange(value) {
		this.props.onChange(this.props.id, value);
	}

	handleRemove() {
		this.props.onRemove(this.props.id);
	}
}

export default Item;
