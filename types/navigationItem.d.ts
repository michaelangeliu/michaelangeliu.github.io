import type { ReactNode } from 'react';

export type NavigationItem = {
	content: ReactNode,
	href: string,
	target?: '_self' | '_blank' | '_parent' | '_top'
};
