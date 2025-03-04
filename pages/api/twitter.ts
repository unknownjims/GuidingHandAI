import { NextApiRequest, NextApiResponse } from 'next';
import { fetchTwitterInsights } from '@/lib/twitter-api';
import { TwitterInsight } from '@/types/insights';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TwitterInsight[] | { error: string }>
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const insights = await fetchTwitterInsights();
    res.status(200).json(insights);
  } catch (error) {
    console.error('Error fetching Twitter insights:', error);
    res.status(500).json({ error: 'Failed to fetch Twitter insights' });
  }
} 