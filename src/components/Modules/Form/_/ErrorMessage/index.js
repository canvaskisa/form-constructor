import React, {PropTypes as T} from 'react';
import styles from './index.css';

const ErrorMessage = ({message}) => (
	<h3 className={styles.root}>{message}</h3>
);

ErrorMessage.propTypes = {message: T.string.isRequired};

export default ErrorMessage;
