import React, {PropTypes as T} from 'react';
import styles from './index.css';

const Title = ({title}) => (
	<h1 className={styles.root}>{title}</h1>
);

Title.displayName = 'FormConstructor/Modules/Form/Title';
Title.propTypes = {title: T.string.isRequired};

export default Title;
