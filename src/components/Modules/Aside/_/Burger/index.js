import React, {PropTypes as T} from 'react';
import cx from 'classnames';
import styles from './index.css';

const Burger = ({onClick, isOpen}) => (
	<button type="button" className={cx(styles.root, {[styles.open]: isOpen})} onClick={onClick}>
		{[1, 2, 3].map(i => <i className={styles.line} key={i}/>)}
	</button>
);

Burger.displayName = 'FormConstructor/Modules/Aside/Burger';
Burger.propTypes = {
	onClick: T.func.isRequired,
	isOpen: T.bool.isRequired
};

export default Burger;
