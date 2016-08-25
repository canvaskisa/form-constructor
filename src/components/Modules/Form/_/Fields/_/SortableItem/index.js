import React, {PropTypes as T} from 'react';
import {SortableElement} from 'react-sortable-hoc';
import SortableHandle from '../SortableHandle';
import styles from './index.css';

const Item = ({children}) => (
	<div className={styles.root}>
		<SortableHandle/>
		<div className={styles.container} children={children}/>
	</div>
);

Item.displayName = 'FormConstructor/Modules/Form/SortableItem';
Item.propTypes = {children: T.any};

export default SortableElement(Item);
