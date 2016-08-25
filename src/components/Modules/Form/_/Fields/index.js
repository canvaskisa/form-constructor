import React, {PropTypes as T, Component} from 'react';
import Field from '../Field';
import * as _ from './_';

class Fields extends Component {
	static displayName = 'FormConstructor/Modules/Form/Fields';

	static propTypes = {
		onSort: T.func.isRequired,
		onFieldRemove: T.func.isRequired,
		onFieldTitleChange: T.func.isRequired,
		onFieldRequiredChange: T.func.isRequired,
		onFieldChoiceAdd: T.func.isRequired,
		onFieldChoiceRemove: T.func.isRequired,
		onFieldChoiceUpdate: T.func.isRequired,
		fields: T.arrayOf(T.shape({
			id: T.string.isRequired
		}).isRequired).isRequired
	};

	render() {
		const {fields, onFieldRemove} = this.props;

		return (
			<_.SortableList useDragHandle onSortEnd={this.props.onSort}>
				{fields.map((field, index) => (
					<_.SortableItem key={field.id} index={index}>
						<Field
							{...field}
							onRemove={onFieldRemove}
							onTitleChange={this.props.onFieldTitleChange}
							onRequiredChange={this.props.onFieldRequiredChange}
							onChoiceAdd={this.props.onFieldChoiceAdd}
							onChoiceUpdate={this.props.onFieldChoiceUpdate}
							onChoiceRemove={this.props.onFieldChoiceRemove}
							/>
					</_.SortableItem>
				))}
			</_.SortableList>
		);
	}
}

export default Fields;
