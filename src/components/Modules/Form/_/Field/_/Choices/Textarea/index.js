import React from 'react';
import styles from './index.css';

const Textarea = () => (
	<textarea readOnly value="Paragraph text" className={styles.root}/>
);

Textarea.displayName = 'FormContructor/Modules/Form/Field/Choices/Textarea';

export default Textarea;
