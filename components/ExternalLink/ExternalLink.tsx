import React, {
	FunctionComponent,
	ReactNode,
} from 'react';

type Props = {
	children: ReactNode,
	className?: string,
	href?: string,
	title?: string,
}

const ExternalLink: FunctionComponent<Props> = ({
	children,
	className,
	href,
	title,
}) => {
	return (
		<a
			className={className}
			href={href}
			rel="noopener noreferrer"
			target="_blank"
			title={title}
		>
			{children}
		</a>
	);
};

export default ExternalLink;
