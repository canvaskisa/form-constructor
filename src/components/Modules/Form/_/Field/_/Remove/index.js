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
				<svg viewBox="47 1 11 13" className={styles.icon}>
					<path d="M56.842 3.286H54.77v-.572c0-.947-.695-1.714-1.554-1.714h-2.072c-.858 0-1.554.767-1.554 1.714v.572h-2.072c-.286 0-.518.256-.518.571 0 .316.232.572.518.572h.518v6.857c0 .947.695 1.714 1.554 1.714h5.18c.859 0 1.554-.767 1.554-1.714V4.429h.518c.286 0 .518-.256.518-.572 0-.315-.232-.571-.518-.571zm-6.216-.572c0-.315.232-.571.518-.571h2.072c.286 0 .518.256.518.571v.572h-3.108v-.572zm4.662 8.572c0 .315-.232.571-.518.571h-5.18c-.286 0-.518-.256-.518-.571V4.429h6.216v6.857z"/>
				</svg>
			</button>
		);
	}

	handleClick() {
		this.props.onRemove(this.props.id);
	}
}

export default Remove;
