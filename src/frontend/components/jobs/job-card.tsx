import {
	Divider,
	Flex,
	ListItem,
	UnorderedList,
	Text,
} from '@chakra-ui/react';
import dayjs from 'dayjs';
import * as React from 'react';
import { jobsSwrType } from '.';

interface JobCardProps {
	job: jobsSwrType;
}

const JobCard: React.FunctionComponent<JobCardProps> = ({ job }) => {
	const getFormattedEndDate =
		(job.ended_at && dayjs(job.ended_at).format('YYYY')) || 'Present';

	return (
		<Flex
			w='xs'
			bg='gray.700'
			p='3'
			rounded={'md'}
			border='1px solid'
			borderColor={'whiteAlpha.300'}
			flexDir='column'
		>
			<Text
				textTransform={'capitalize'}
				fontWeight='medium'
				color='blue.200'
			>
				{job.title}
			</Text>
			<Text
				textTransform={'capitalize'}
				fontSize='sm'
				color='whiteAlpha.600'
			>
				{job.company} / {job.location} /{' '}
				{dayjs(job.started_at).format('YYYY')} - {getFormattedEndDate}
			</Text>
			<Text whiteSpace={'normal'} fontSize='sm' color='whiteAlpha.800'>
				{job.description}
			</Text>
			<Divider my='2' />
			<UnorderedList>
				{job.bullets.map((bullet) => {
					return (
						<ListItem fontSize={'sm'}>{bullet.content}</ListItem>
					);
				})}
			</UnorderedList>
		</Flex>
	);
};

export default JobCard;
