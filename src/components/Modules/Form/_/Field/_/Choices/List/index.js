import React, {PropTypes as T, Component} from 'react';
import Item from './Item';
import styles from './index.css';

class List extends Component {
	static displayName = 'FormContructor/Modules/Form/Field/Choices/List';

	static propTypes = {
		id: T.string.isRequired,
		kind: T.string.isRequired,
		onAdd: T.func.isRequired,
		onItemChange: T.func.isRequired,
		onItemRemove: T.func.isRequired,
		error: T.string,
		items: T.arrayOf(T.shape({
			id: T.string.isRequired
		}).isRequired).isRequired
	};

	constructor(...args) {
		super(...args);
		this.handleAdd = ::this.handleAdd;
		this.handleChange = ::this.handleChange;
		this.handleRemove = ::this.handleRemove;
	}

	render() {
		const {kind, error} = this.props;

		return (
			<div className={styles.root}>
				{this.props.items.map(item => (
					<Item
						{...item}
						kind={kind}
						key={item.id}
						onChange={this.handleChange}
						onRemove={this.handleRemove}
						/>
				))}

				{error ? <p className={styles.error}>{error}</p> : null}

				<button
					type="button"
					children="+ Add choice"
					onClick={this.handleAdd}
					className={styles.button}
					/>
			</div>
		);
	}

	handleAdd() {
		this.props.onAdd(this.props.id);
	}

	handleChange(id, value) {
		this.props.onItemChange(this.props.id, id, value);
	}

	handleRemove(id) {
		this.props.onItemRemove(this.props.id, id);
	}
}

export default List;
