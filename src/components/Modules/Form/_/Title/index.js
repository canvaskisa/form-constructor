import React, {PropTypes as T} from 'react';
import styles from './index.css';

const Title = ({title}) => (
	<h1 className={styles.root}>
		<span className={styles.value}>{title}</span>
	</h1>
);

Title.displayName = 'FormConstructor/Modules/Form/Title';
Title.propTypes = {title: T.string.isRequired};

export default Title;
