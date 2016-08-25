import React from 'react';
import styles from './index.css';

const Text = () => (
	<input
		disabled
		readOnly
		type="text"
		className={styles.root}
		value="Single-line text"
		/>
);

Text.displayName = 'FormContructor/Modules/Field/Choices/Text';

export default Text;
