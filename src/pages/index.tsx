import type { NextPage } from 'next';
import {
	Flex,
	Text,
	Divider,
	ListItem,
	UnorderedList,
	Grid,
	Container,
} from '@chakra-ui/react';
import useSWR from 'swr';
import { Prisma } from '@prisma/client';
import React from 'react';
import MyJobs from '@frontend/components/jobs';
import Layout from '@frontend/components/layout';

const Home: NextPage = () => {
	return (
		<Layout>
			<Flex flexDir={'column'} w='full' mt='3'>
				<MyJobs />
			</Flex>
		</Layout>
	);
};

export default Home;
