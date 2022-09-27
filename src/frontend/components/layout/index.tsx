import { Container, Flex } from '@chakra-ui/react';
import * as React from 'react';

interface LayoutProps {
	title?: string;
}

const Layout: React.FunctionComponent<
	React.PropsWithChildren<LayoutProps>
> = ({ children, title }) => {
	return (
		<Flex w='100vw' h='100vh'>
			<header>
				<title>{title || "Ben's Resume"}</title>
			</header>
			<Container maxW='container.xl'>{children}</Container>
		</Flex>
	);
};

export default Layout;
