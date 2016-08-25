import React, {PropTypes as T} from 'react';
import styles from './index.css';

const Caption = ({title}) => <h3 className={styles.root}>{title}</h3>;
Caption.displayName = 'FormContructor/Modules/Aside/Caption';
Caption.propTypes = {title: T.string.isRequired};

export default Caption;
