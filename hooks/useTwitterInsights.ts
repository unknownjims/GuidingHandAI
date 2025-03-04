import { useState, useEffect } from 'react';
import { TwitterInsight } from '@/types/insights';

export function useTwitterInsights() {
  const [insights, setInsights] = useState<TwitterInsight[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInsights = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        const response = await fetch('/api/twitter');
        
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        
        const data = await response.json();
        setInsights(data);
      } catch (err) {
        console.error('Error fetching Twitter insights:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch Twitter insights');
      } finally {
        setIsLoading(false);
      }
    };

    fetchInsights();
  }, []);

  const refreshInsights = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/twitter');
      
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
      
      const data = await response.json();
      setInsights(data);
    } catch (err) {
      console.error('Error refreshing Twitter insights:', err);
      setError(err instanceof Error ? err.message : 'Failed to refresh Twitter insights');
    } finally {
      setIsLoading(false);
    }
  };

  return { insights, isLoading, error, refreshInsights };
} 