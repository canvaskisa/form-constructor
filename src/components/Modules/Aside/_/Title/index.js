import React, {PropTypes as T} from 'react';
import Editable from 'components/Base/Editable';
import styles from './index.css';

const Title = ({value, onChange}) => (
	<h1 className={styles.root}>
		<Editable
			value={value}
			onChange={onChange}
			className={styles.editable}
			valueClassName={styles.value}
			inputClassName={styles.input}
			iconClassName={styles.icon}
			/>
	</h1>
);

Title.propTypes = {
	value: T.string.isRequired,
	onChange: T.func.isRequired
};

export default Title;
