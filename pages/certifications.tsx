import Head from 'next/head';

import ExternalLinkIcons from '../components/ExternalLinkIcons';
import { certifications } from '../content/externalAccounts';
import Layout from '../content/layout';

import styles from './certifications.module.scss';

import type { NextPageWithLayout } from 'next';
import type { ReactElement } from 'react';

const Certifications: NextPageWithLayout = () => {
	return (
		<ExternalLinkIcons
			accounts={certifications}
			className={styles.certifications}
		/>
	);
};

Certifications.getLayout = function getLayout(page: ReactElement) {
	return (
		<>
			<Head>
				<title>Certifications | Michael Liu</title>
				<meta name="description" content="Michael Liu's Certifications" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Layout>
				{page}
			</Layout>
		</>
	);
};

export default Certifications;
