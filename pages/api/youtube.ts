import { NextApiRequest, NextApiResponse } from 'next';
import { processYouTubeVideo, fetchVideoTranscript, extractVideoId } from '@/lib/youtube-api';
import { YouTubeInsight, VideoTranscript } from '@/types/insights';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<
    | YouTubeInsight
    | VideoTranscript
    | { error: string }
  >
) {
  // Only allow GET and POST methods
  if (req.method !== 'GET' && req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    if (req.method === 'GET') {
      // For GET requests, return sample YouTube insight
      const videoId = 'dQw4w9WgXcQ'; // Sample video ID
      const insight = await processYouTubeVideo(`https://www.youtube.com/watch?v=${videoId}`);
      
      if (!insight) {
        return res.status(404).json({ error: 'Could not process video' });
      }
      
      return res.status(200).json(insight);
    } else {
      // For POST requests, process the provided YouTube URL
      const { url, transcriptOnly } = req.body;
      
      if (!url) {
        return res.status(400).json({ error: 'YouTube URL is required' });
      }
      
      if (transcriptOnly === true) {
        // Only fetch and return the transcript
        const transcript = await fetchVideoTranscript(url);
        
        if (!transcript) {
          return res.status(404).json({ error: 'Could not fetch transcript for this video' });
        }
        
        return res.status(200).json(transcript);
      } else {
        // Process the full video (info, transcript, and summary)
        const insight = await processYouTubeVideo(url);
        
        if (!insight) {
          return res.status(404).json({ error: 'Could not process video' });
        }
        
        return res.status(200).json(insight);
      }
    }
  } catch (error) {
    console.error('Error in YouTube API route:', error);
    return res.status(500).json({ error: 'An error occurred while processing the request' });
  }
} 