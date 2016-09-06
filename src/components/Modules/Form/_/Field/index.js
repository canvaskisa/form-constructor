import React, {PropTypes as T, Component} from 'react';
import match from 'switch-match';
import * as _ from './_';
import styles from './index.css';

class Field extends Component {
	static displayName = 'Modules/Form/Field';

	static propTypes = {
		id: T.string.isRequired,
		kind: T.string.isRequired,
		title: T.string.isRequired,
		choices: T.shape({
			error: T.string,
			items: T.array.isRequired
		}),
		error: T.string,
		required: T.bool.isRequired,
		onRemove: T.func.isRequired,
		onTitleChange: T.func.isRequired,
		onRequiredChange: T.func.isRequired,
		onChoiceAdd: T.func.isRequired,
		onChoiceUpdate: T.func.isRequired,
		onChoiceRemove: T.func.isRequired
	};

	render() {
		const {id} = this.props;

		return (
			<div className={styles.root}>
				<_.Title
					id={id}
					error={this.props.error}
					title={this.props.title}
					required={this.props.required}
					onChange={this.props.onTitleChange}
					/>

				<_.Choices.Container>
					{match(this.props.kind, {
						text: <_.Choices.Text/>,
						file: <_.Choices.File/>,
						textarea: <_.Choices.Textarea/>
					}, () => (
						<_.Choices.List
							id={id}
							kind={this.props.kind}
							items={this.props.choices.items}
							error={this.props.choices.error}
							onAdd={this.props.onChoiceAdd}
							onItemChange={this.props.onChoiceUpdate}
							onItemRemove={this.props.onChoiceRemove}
							/>
					))}
				</_.Choices.Container>

				<_.Required id={id} checked={this.props.required} onChange={this.props.onRequiredChange}/>
				<_.Remove id={id} onRemove={this.props.onRemove}/>
			</div>
		);
	}
}

export default Field;
