import type { NextApiRequest, NextApiResponse } from 'next';
import { getMovies } from '../../services/movies.service';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const movies = await getMovies();
            res.status(200).json(movies);
        } catch (error) {
            res.status(500).json({ message: 'Failed to fetch movies' });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}