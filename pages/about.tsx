import Head from 'next/head';

import Layout from '../content/layout';

import styles from './home.module.scss';

import type { NextPageWithLayout } from 'next';
import type { ReactElement } from 'react';

const About: NextPageWithLayout = () => {
	return (
		<>
			<p className={styles.description}>
				A perpetually&nbsp;curious software&nbsp;engineering leader with experience fostering individuals and enabling collaboration.
			</p>
			<p className={styles.description}>
				Passionate about creating holistic solutions through data-first design and writing consistent, maintainable code.
			</p>
			<p className={styles.description}>
				Seeking to continue growth and education through contributions to mission-driven organizations.
			</p>
		</>
	);
};

About.getLayout = function getLayout(page: ReactElement) {
	return (
		<>
			<Head>
				<title>About | Michael Liu</title>
				<meta name="description" content="Michael Liu" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Layout>
				{page}
			</Layout>
		</>
	);
};

export default About;
