import type { NextPage } from 'next';
import {
	Flex,
	Text,
	Divider,
	ListItem,
	UnorderedList,
	Grid,
} from '@chakra-ui/react';
import useSWR from 'swr';
import { Prisma } from '@prisma/client';
import React from 'react';
import MyJobs from '@frontend/components/jobs';

type jobsSwrType = Prisma.previous_jobsGetPayload<{
	include: {
		bullets: true;
	};
}>;

const Home: NextPage = () => {
	const { data, isValidating } =
		useSWR<ApiResponse<jobsSwrType[]>>('/api/jobs');

	return (
		<Flex flexDir={'column'}>
			<MyJobs />
		</Flex>
	);
};

export default Home;
