import type { ReactNode } from 'react';

export type ExternalAccount = {
	icon: ReactNode,
	link: string,
	shortLink?: string,
	title: string,
	type: string,
};
