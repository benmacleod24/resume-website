import { Flex, Grid, Icon, Text } from '@chakra-ui/react';
import { Prisma } from '@prisma/client';
import * as React from 'react';
import useSWR from 'swr';
import JobCard from './job-card';
import { MdWork } from 'react-icons/md';

export type jobsSwrType = Prisma.previous_jobsGetPayload<{
	include: {
		bullets: true;
	};
}>;

const MyJobs: React.FunctionComponent = ({}) => {
	const { data, isValidating } =
		useSWR<ApiResponse<jobsSwrType[]>>('/api/jobs');

	return (
		<Flex flexDir={'column'}>
			<Flex align={'center'} gap={2} mb='2'>
				<Icon as={MdWork} fontSize='xl' color='blue.300' />
				<Text fontWeight={'bold'} fontSize='lg'>
					My Jobs
				</Text>
			</Flex>
			<Grid
				w='fit-content'
				templateColumns={[
					'repeat(1, 1fr)',
					'repeat(2, 1fr)',
					'repeat(3, 1fr)',
				]}
				gap={4}
			>
				{data?.data.map((job) => (
					<JobCard key={job.id} job={job} />
				))}
			</Grid>
		</Flex>
	);
};

export default MyJobs;
