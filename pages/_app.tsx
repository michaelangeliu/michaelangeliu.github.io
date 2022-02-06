import type { NextPageWithLayout } from 'next';
import type { AppPropsWithLayout } from 'next/app';

import '../styles/globals.scss';

export default function MyApp({
	Component, pageProps,
}: AppPropsWithLayout) {
	// Use the layout defined at the page level, if available
	const getLayout = Component.getLayout ?? ((page: NextPageWithLayout) => page);

	return getLayout(<Component {...pageProps} />);
}
