import React, {PropTypes as T, Component} from 'react';
import Control from '../Control';
import styles from './index.css';

class Controls extends Component {
	static displayName = 'FormContructor/Aside/Controls';

	static propTypes = {
		views: T.arrayOf(T.shape({
			type: T.string.isRequired
		}).isRequired).isRequired,
		activeIndex: T.number.isRequired,
		onChange: T.func.isRequired
	};

	render() {
		const {views, activeIndex, onChange} = this.props;

		return (
			<ul className={styles.root}>
				{views.map(({title}, i) => (
					<Control
						key={i}
						index={i}
						title={title}
						onChange={onChange}
						isActive={activeIndex === i}
						/>
				))}
			</ul>
		);
	}
}

export default Controls;
