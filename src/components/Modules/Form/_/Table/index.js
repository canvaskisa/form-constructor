import React, {PropTypes as T} from 'react';
import styles from './index.css';

const Table = ({children}) => (
	<div className={styles.root}>
		<header className={styles.header}>
			<h3 className={styles.td}>Question title</h3>
			<h3 className={styles.td}>Choices</h3>
			<h3 className={styles.td}>Required?</h3>
		</header>

		{children}
	</div>
);

Table.displayName = 'FormConstructor/Modules/Form/Table';
Table.propTypes = {children: T.any};

export default Table;
