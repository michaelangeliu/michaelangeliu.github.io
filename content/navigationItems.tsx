import type { NavigationItem } from '../types/navigationItem';

export const navigationItems: Array<NavigationItem> = [
	{
		content: 'Home',
		href: '/',
	},
	{
		content: 'About',
		href: '/about',
	},
	{
		content: 'Certifications',
		href: '/certifications',
	},
	{
		content: 'Résumé',
		href: '/resume',
		target: '_blank',
	},
];
