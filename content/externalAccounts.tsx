
import Image from 'next/image';

import FacebookLogo from '../public/static/images/social-icons/facebook.svg';
import GithubLogo from '../public/static/images/social-icons/github.svg';
import InstagramLogo from '../public/static/images/social-icons/instagram.svg';
import LinkedinLogo from '../public/static/images/social-icons/linkedin.svg';
import TwitterLogo from '../public/static/images/social-icons/twitter.svg';

import type { ExternalAccount } from '../types/externalAccount';
// import TumblrLogo from '../public/static/images/social-icons/tumblr.svg';

export const linkedin = {
	icon: <LinkedinLogo className="social-icon" />,
	link: 'https://www.linkedin.com/in/michaelangeliu',
	shortLink: 'linkedin.com/in/michaelangeliu',
	title: 'LinkedIn',
	type: 'linkedin',
};

export const github = {
	icon: <GithubLogo className="social-icon" />,
	link: 'https://github.com/michaelangeliu',
	title: 'GitHub',
	type: 'github',
};

export const facebook = {
	icon: <FacebookLogo className="social-icon" />,
	link: 'https://www.facebook.com/michaelangeliu',
	title: 'Facebook',
	type: 'facebook',
};

export const instagram = {
	icon: <InstagramLogo className="social-icon" />,
	link: 'https://instagram.com/michaelangeliu',
	title: 'Instagram',
	type: 'instagram',
};

export const twitter = {
	icon: <TwitterLogo className="social-icon" />,
	link: 'https://twitter.com/michaelangeliu',
	title: 'Twitter',
	type: 'twitter',
};

// export const tumblr = {
// 	icon: <TumblrLogo />,
// 	link: 'https://michaelangeliu.tumblr.com',
// 	title: 'Tumblr',
// 	type: 'tumblr',
// };

export const socialMediaAccounts: Array<ExternalAccount> = [
	linkedin,
	github,
	facebook,
	instagram,
	twitter,
	// tumblr,
];

export const certifications: Array<ExternalAccount> = [
	{
		icon: <Image
			alt="AWS Certified Cloud Practitioner Badge"
			src="/static/images/aws-certified-cloud-practitioner.png"
			height={160}
			width={160}
		/>,
		link: 'https://www.credly.com/badges/275f6b4a-5894-44c4-9abf-125a0e0d7086/public_url',
		title: 'AWS Certified Cloud Practitioner',
		type: 'CLF-C01',
	},
	{
		icon: <Image
			alt="AWS Certified Solutions Architect Associate Badge"
			src="/static/images/aws-certified-solutions-architect-associate.png"
			height={160}
			width={160}
		/>,
		link: 'https://www.credly.com/badges/55de8b47-a355-498d-9d16-cddee44062c2/public_url',
		title: 'AWS Certified Solutions Architect - Associate',
		type: 'SAA-C02',
	},
];
