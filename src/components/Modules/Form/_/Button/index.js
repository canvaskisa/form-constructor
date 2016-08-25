import React from 'react';
import styles from './index.css';

const Button = props => (
	<button type="button" className={styles.root} {...props}/>
);

Button.displayName = 'FormConstructor/Modules/Form/Button';

export default Button;
