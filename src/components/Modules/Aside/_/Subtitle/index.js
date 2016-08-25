import React, {PropTypes as T} from 'react';
import styles from './index.css';

const Subtitle = ({title}) => <h2 className={styles.root}>{title}</h2>;
Subtitle.displayName = 'FormContructor/Modules/Aside/Subtitle';
Subtitle.propTypes = {title: T.string.isRequired};

export default Subtitle;
