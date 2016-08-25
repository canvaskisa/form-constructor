import React from 'react';
import {SortableHandle} from 'react-sortable-hoc';
import styles from './index.css';

const Handle = () => (
	<span className={styles.root}/>
);

export default SortableHandle(Handle);
