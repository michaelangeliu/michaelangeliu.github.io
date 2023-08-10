import React, {
	FunctionComponent,
} from 'react';

import ExternalLink from '../../components/ExternalLink';

type Props = {
	className?: string,
}

const PhoneLink: FunctionComponent<Props> = ({
	className,
}) => {
	return (
		<ExternalLink
			className={className}
			href="tel:"
		>
			PHONE NUMBER
			{/* Excluded for digital privacy */}
		</ExternalLink>
	);
};

export default PhoneLink;
