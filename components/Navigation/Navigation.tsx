import Link from 'next/link';
import React, {
	FunctionComponent,
} from 'react';

import styles from './navigation.module.scss';

import type { NavigationItem } from '../../types/navigationItem';

type Props = {
  navItems: Array<NavigationItem>
}

const Navigation: FunctionComponent<Props> = ({
	navItems = [],
}) => {
	return (
		<nav className={styles.navigation}>
			<ul>
				{navItems
					.map((navItem, index) => (
						<li
							key={index}
						>
							<Link href={navItem.href}>
								{navItem.content}
							</Link>
						</li>
					))
				}
			</ul>
		</nav>
	);
};

export default Navigation;
