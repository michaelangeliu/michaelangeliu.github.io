import type { NavigationItem } from '../types/navigationItem';

export const navigationItems: Array<NavigationItem> = [
	{
		content: <a>Home</a>,
		href: '/',
	},
	// {
	// 	content: <a>About</a>,
	// 	href: '/about',
	// },
	{
		content: <a>Certifications</a>,
		href: '/certifications',
	},
	{
		content: <a target="_blank">Résumé</a>,
		href: '/resume',
	},
];
