import React, {
	FunctionComponent,
} from 'react';

import ExternalLink from '../../components/ExternalLink';

const EmailLink: FunctionComponent = () => {
	return (
		<ExternalLink
			href="mailto:contact@michaelangeliu.com"
		>
			contact@michaelangeliu.com
		</ExternalLink>
	);
};

export default EmailLink;
