import React, { ReactNode } from 'react';

import ExternalLinkIcons from '../../components/ExternalLinkIcons';
import Navigation from '../../components/Navigation';
import { socialMediaAccounts } from '../externalAccounts';
import { navigationItems } from '../navigationItems';

import EmailLink from './EmailLink';
import SiteTitle from './SiteTitle';
import styles from './layout.module.scss';

type Props = {
	children: ReactNode,
}

const Layout: React.FunctionComponent<Props> = ({
	children,
}) => {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<header className={styles.header}>
					<SiteTitle />
					<Navigation navItems={navigationItems} />
				</header>

				{children}
			</main>

			<footer className={styles.footer}>
				<ExternalLinkIcons accounts={socialMediaAccounts} />
				<EmailLink />
			</footer>
		</div>
	);
};

export default Layout;
