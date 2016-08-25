import React, {PropTypes as T} from 'react';
import styles from './index.css';

const Description = ({description}) => (
	<h3 className={styles.root}>
		<strong className={styles.caption}>Description: </strong>
		<span className={styles.value}>{description}</span>
	</h3>
);

Description.displayName = 'FormConstructor/Modules/Form/Description';
Description.propTypes = {description: T.string.isRequired};

export default Description;
