import React, {PropTypes as T} from 'react';
import {SortableContainer} from 'react-sortable-hoc';

const List = ({children}) => <div>{children}</div>;
List.displayName = 'FormConstructor/Modules/Form/SortableList';
List.propTypes = {children: T.any};

export default SortableContainer(List);
