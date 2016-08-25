import React from 'react';
import styles from './index.css';

const File = () => (
	<button
		disabled
		type="button"
		children="Choose file"
		className={styles.root}
		/>
);

File.displayName = 'FormContructor/Modules/Form/Field/Choices/File';

export default File;
