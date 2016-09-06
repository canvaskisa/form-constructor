import React, {PropTypes as T, Component} from 'react';
import {connect} from 'react-redux';
import * as $$fields from 'ducks/fields';
import * as _ from './_';
import styles from './index.css';

class Form extends Component {
	static displayName = 'FormConstructor/Modules/Form';

	static propTypes = {
		description: T.string.isRequired,
		title: T.string.isRequired,
		fields: T.array.isRequired,
		error: T.string.isRequired,
		onSave: T.func,
		handleFieldsSort: T.func.isRequired,
		handleFieldRemove: T.func.isRequired,
		handleFieldTitleChange: T.func.isRequired,
		handleFieldRequiredChange: T.func.isRequired,
		handleFieldChoiceAdd: T.func.isRequired,
		handleFieldChoiceRemove: T.func.isRequired,
		handleFieldChoiceUpdate: T.func.isRequired
	};

	render() {
		const {description, fields, error} = this.props;

		return (
			<div className={styles.root}>
				<div className={styles.container}>
					<_.Title title={this.props.title}/>
					{description ? <_.Description description={description}/> : null}
					<_.Button onClick={this.props.onSave} children="Save form"/>
					{error ? <_.ErrorMessage message={error}/> : null}

					{fields.length ? (
						<_.Table>
							<_.Fields
								fields={fields}
								onSort={this.props.handleFieldsSort}
								onFieldRemove={this.props.handleFieldRemove}
								onFieldTitleChange={this.props.handleFieldTitleChange}
								onFieldRequiredChange={this.props.handleFieldRequiredChange}
								onFieldChoiceAdd={this.props.handleFieldChoiceAdd}
								onFieldChoiceRemove={this.props.handleFieldChoiceRemove}
								onFieldChoiceUpdate={this.props.handleFieldChoiceUpdate}
								/>
						</_.Table>
					) : null}
				</div>
			</div>
		);
	}
}

export const stateToProps = ({description, title, fields, error}) => ({
	description,
	title,
	fields,
	error
});

export const dispatchToProps = dispatch => ({
	handleFieldTitleChange: (id, title) => dispatch($$fields.actions.changeTitle(id, title)),
	handleFieldRequiredChange: (id, required) => dispatch($$fields.actions.changeRequired(id, required)),
	handleFieldChoiceAdd: id => dispatch($$fields.actions.addChoice(id)),
	handleFieldChoiceRemove: (id, choiceId) => dispatch($$fields.actions.removeChoice(id, choiceId)),
	handleFieldChoiceUpdate: (id, choiceId, value) => dispatch($$fields.actions.updateChoice(id, choiceId, value)),
	handleFieldsSort: ({oldIndex, newIndex}) => dispatch($$fields.actions.sort(oldIndex, newIndex)),
	handleFieldRemove: id => dispatch($$fields.actions.remove(id))
});

export default connect(stateToProps, dispatchToProps)(Form);
