import prisma from '../../../lib/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { id, published, is_visited } = req.body;

    try {
      const review = await prisma.review.update({
        where: { id },
        data: {
          published,
          is_visited,
        },
      });
      res.status(200).json(review);
    } catch (error) {
      res.status(500).json({ error: 'Unable to submit review' });
    }
  }
}
