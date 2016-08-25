import React, {PropTypes as T} from 'react';
import Field from '../Field';
import styles from './index.css';

const Fields = ({fields, onFieldClick}) => (
	<ul className={styles.root}>
		{fields.map(field =>
			<Field
				{...field}
				key={field.kind}
				onClick={onFieldClick}
				/>
		)}
	</ul>
);

Fields.displayName = 'FormConstructor/Modules/Aside/Fields';
Fields.propTypes = {
	onFieldClick: T.func.isRequired,
	fields: T.arrayOf(T.shape({
		kind: T.string.isRequired
	}).isRequired).isRequired
};

export default Fields;
