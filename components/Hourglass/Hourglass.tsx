import React, {
	FunctionComponent,
} from 'react';

import styles from './hourglass.module.scss';

const Hourglass: FunctionComponent = () => {
	return (
		<svg id={styles.landingLogo} viewBox="0 0 282 422" preserveAspectRatio="xMidYMid meet">
			<path id={styles.hourglassSilhouette} d="M1,1 L281,1 L161,208.846 L281,416.692 L1,416.692 L121,208.846 L1,1 Z"/>
			<path id={styles.M} d="M101,174.205 L1,1 L121,1 L141,35.641 L161,1 L281,1 L181,174.205 L161,139.564 L221,35.641 L181,35.641 L141,104.923 L101,35.641 L61,35.641 L121,139.564 L101,174.205 Z"/>
			<path id={styles.L} d="M141,174.205 L1,416.692 L281,416.692 L261,382.051 L61,382.051 L161,208.846 L141,174.205 Z"/>
			<path id={styles.triangle} d="M181,243.487 L121,347.410 L241,347.410 L181,243.487 Z"/>
		</svg>
	);
};

export default Hourglass;
