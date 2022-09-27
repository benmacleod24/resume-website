import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@prisma';
import { Prisma } from '@prisma/client';

// Handler request coming into /api/jobs.
const handler = (req: NextApiRequest, res: NextApiResponse) => {
	const { method } = req;

	// Route the request to the correct method.
	switch (method) {
		case 'GET':
			return GET(req, res);
		default:
			return res.status(404).json({
				success: false,
				message: 'Method not supported at this endpoint.',
			});
	}
};

/**
 * @brief Send the collection of jobs.
 * @method GET
 */
const GET = async (req: NextApiRequest, res: NextApiResponse) => {
	// Collect records of my jobs.
	const myJobs = await prisma.previous_jobs.findMany({
		include: {
			bullets: true,
		},
	});

	// Verify we collected the jobs and it's not an error.
	if (!myJobs || myJobs instanceof Prisma.PrismaClientKnownRequestError) {
		res.status(500).json({
			success: false,
			message: 'An error occured while collecting jobs.',
		});
	}

	// Send back data successfully.
	res.status(200).json({
		success: true,
		data: myJobs,
	});
};

export default handler;
