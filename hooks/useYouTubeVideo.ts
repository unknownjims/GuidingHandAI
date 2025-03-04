import { useState, useCallback } from 'react';
import { YouTubeInsight, VideoTranscript } from '@/types/insights';

export function useYouTubeVideo() {
  const [insight, setInsight] = useState<YouTubeInsight | null>(null);
  const [transcript, setTranscript] = useState<VideoTranscript | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Function to process a YouTube video URL
  const processVideo = useCallback(async (youtubeUrl: string) => {
    setIsLoading(true);
    setError(null);
    setInsight(null);
    
    try {
      const response = await fetch('/api/youtube', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: youtubeUrl }),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to process YouTube video');
      }
      
      const data: YouTubeInsight = await response.json();
      setInsight(data);
      return data;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred while processing the video';
      setError(errorMessage);
      console.error('Error processing YouTube video:', err);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Function to fetch only the transcript
  const fetchTranscript = useCallback(async (youtubeUrl: string) => {
    setIsLoading(true);
    setError(null);
    setTranscript(null);
    
    try {
      const response = await fetch('/api/youtube', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: youtubeUrl, transcriptOnly: true }),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to fetch transcript');
      }
      
      const data: VideoTranscript = await response.json();
      setTranscript(data);
      return data;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred while fetching the transcript';
      setError(errorMessage);
      console.error('Error fetching transcript:', err);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Reset all state
  const reset = useCallback(() => {
    setInsight(null);
    setTranscript(null);
    setIsLoading(false);
    setError(null);
  }, []);

  return {
    insight,
    transcript,
    isLoading,
    error,
    processVideo,
    fetchTranscript,
    reset,
  };
} 