import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { SWRConfig } from 'swr';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<SWRConfig
			value={{
				fetcher: (resource, init) =>
					fetch(resource, init).then((res) => res.json()),
			}}
		>
			<ChakraProvider resetCSS>
				<Component {...pageProps} />
			</ChakraProvider>
		</SWRConfig>
	);
}

export default MyApp;
