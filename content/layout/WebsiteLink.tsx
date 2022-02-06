import React, {
	FunctionComponent,
} from 'react';

import ExternalLink from '../../components/ExternalLink';

const WebsiteLink: FunctionComponent = () => {
	return (
		<ExternalLink
			href="https://michaelangeliu.com"
		>
			https://michaelangeliu.com
		</ExternalLink>
	);
};

export default WebsiteLink;
