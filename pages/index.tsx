import Head from 'next/head';

import Hourglass from '../components/Hourglass';
import Layout from '../content/layout';

import styles from './home.module.scss';

import type { NextPageWithLayout } from 'next';
import type { ReactElement } from 'react';

const Home: NextPageWithLayout = () => {
	return (
		<>
			<figure className={styles.hourglass}>
				<Hourglass />
			</figure>

			<p className={styles.description}>
				A perpetually&nbsp;curious software&nbsp;engineer
			</p>
		</>
	);
};

Home.getLayout = function getLayout(page: ReactElement) {
	return (
		<>
			<Head>
				<title>Michael Liu</title>
				<meta name="description" content="Michael Liu's Website" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Layout>
				{page}
			</Layout>
		</>
	);
};

export default Home;
