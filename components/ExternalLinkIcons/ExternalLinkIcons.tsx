import React, {
	FunctionComponent,
} from 'react';

import { ExternalAccount } from '../../types/externalAccount';
import ExternalLink from '../ExternalLink';

import styles from './external-link-icons.module.scss';

type Props = {
	accounts: Array<ExternalAccount>
	className?: string,
}

const ExternalLinkIcons: FunctionComponent<Props> = ({
	accounts = [],
	className = '',
}) => {
	return (
		<ul className={`${styles.externalLinkIcons} ${className}`}>
			{accounts
				.map((account) => (
					<li
						key={account.type}
					>
						<ExternalLink
							href={account.link}
							title={account.title}
						>
							{account.icon}
						</ExternalLink>
					</li>
				))
			}
		</ul>
	);
};

export default ExternalLinkIcons;
