import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

declare module 'next' {
	type NextPageWithLayout = NextPage & {
		getLayout?: (page: ReactElement) => ReactNode
	}
}

declare module 'next/app' {
	type AppPropsWithLayout = AppProps & {
		Component: NextPageWithLayout
	}
}
