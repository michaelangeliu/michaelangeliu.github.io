import React, {
	FunctionComponent,
} from 'react';

import styles from './site-title.module.scss';

const SiteTitle: FunctionComponent = () =>{
	return (
		<h1 className={styles.title}>
			Michael Liu
		</h1>
	);
};

export default SiteTitle;
