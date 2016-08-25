import React, {PropTypes as T, Component} from 'react';
import cx from 'classnames';
import styles from './index.css';

export const ENTER_KEYCODE = 13;

class Editable extends Component {
	static displayName = 'FormConstructor/Base/Editable';

	static propTypes = {
		value: T.string.isRequired,
		onChange: T.func.isRequired,
		onRemove: T.func,
		className: T.string,
		inputClassName: T.string,
		valueClassName: T.string
	};

	constructor(...args) {
		super(...args);
		this.state = {isEditing: false};
		this.handleChange = ::this.handleChange;
		this.getInputDOMNode = ::this.getInputDOMNode;
		this.handleEditingOpen = ::this.handleEditingOpen;
		this.handleEditingClose = ::this.handleEditingClose;
		this.handleInputKeydown = ::this.handleInputKeydown;
	}

	render() {
		const {value, onRemove} = this.props;
		const {isEditing} = this.state;
		const classes = cx(styles.root, this.props.className, {
			[styles.removeable]: Boolean(onRemove)
		});

		return (
			<div className={classes}>
				{isEditing ? (
					<input
						type="text"
						value={value}
						ref={this.getInputDOMNode}
						onChange={this.handleChange}
						onBlur={this.handleEditingClose}
						onKeyDown={this.handleInputKeydown}
						className={cx(styles.input, this.props.inputClassName)}
						/>
				) : (
					<span
						children={value}
						onDoubleClick={this.handleEditingOpen}
						className={cx(styles.value, this.props.valueClassName)}
						/>
				)}

				{!isEditing && onRemove ? (
					<button type="button" className={styles.remove} onClick={onRemove}>
						<svg viewBox="47 1 11 13" className={styles.icon}>
							<path d="M56.842 3.286H54.77v-.572c0-.947-.695-1.714-1.554-1.714h-2.072c-.858 0-1.554.767-1.554 1.714v.572h-2.072c-.286 0-.518.256-.518.571 0 .316.232.572.518.572h.518v6.857c0 .947.695 1.714 1.554 1.714h5.18c.859 0 1.554-.767 1.554-1.714V4.429h.518c.286 0 .518-.256.518-.572 0-.315-.232-.571-.518-.571zm-6.216-.572c0-.315.232-.571.518-.571h2.072c.286 0 .518.256.518.571v.572h-3.108v-.572zm4.662 8.572c0 .315-.232.571-.518.571h-5.18c-.286 0-.518-.256-.518-.571V4.429h6.216v6.857z"/>
						</svg>
					</button>
				) : null}

				{!isEditing ? (
					<button type="button" onClick={this.handleEditingOpen} className={styles.edit}>
						<svg className={styles.icon} viewBox="68 6 8 12">
							<path d="M74.848 10.12l1.08-2.018L72.552 6l-.976 1.82-.324.607L68 14.494l.714 2.871 2.664-.77 3.25-6.066.22-.41zM69.2 16.455l-.476-1.913 2.252 1.401-1.776.512zm2.102-1.12l-2.252-1.4 2.763-5.158 2.251 1.402-2.762 5.157zm.836-7.165l.65-1.213 2.253 1.401-.652 1.213-2.251-1.4z"/>
						</svg>
					</button>
				) : null}
			</div>
		);
	}

	getInputDOMNode($node) {
		if ($node) {
			this.$input = $node;
		}
	}

	componentDidUpdate() {
		if (this.$input) {
			this.$input.focus();
		}
	}

	handleInputKeydown(e) {
		if (e.keyCode === ENTER_KEYCODE) {
			e.preventDefault();
			this.handleEditingClose();
		}
	}

	handleEditingOpen() {
		this.setState({isEditing: true});
	}

	handleEditingClose() {
		this.setState({isEditing: false});
	}

	handleChange(e) {
		this.props.onChange(e.target.value);
	}
}

export default Editable;
