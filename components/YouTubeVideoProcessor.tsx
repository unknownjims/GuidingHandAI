import React, { useState } from 'react';
import { useYouTubeVideo } from '@/hooks/useYouTubeVideo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';

export default function YouTubeVideoProcessor() {
  const [url, setUrl] = useState('');
  const { insight, isLoading, error, processVideo } = useYouTubeVideo();
  const [personalInstructions, setPersonalInstructions] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (url) {
      await processVideo(url);
    }
  };

  const handleAddToInstructions = () => {
    if (insight?.aiRelatedContent) {
      setPersonalInstructions(prev => {
        if (prev) {
          return `${prev}\n\n${insight.aiRelatedContent}`;
        }
        return insight.aiRelatedContent || '';
      });
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-5xl">
      <h2 className="text-2xl font-bold mb-6">YouTube Video Processor</h2>
      
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex gap-4">
          <Input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter YouTube video URL"
            className="flex-1"
            disabled={isLoading}
          />
          <Button type="submit" disabled={isLoading || !url}>
            {isLoading ? 'Processing...' : 'Process Video'}
          </Button>
        </div>
        {error && (
          <p className="mt-2 text-red-600">{error}</p>
        )}
      </form>

      {insight && (
        <div className="space-y-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex mb-4">
                <div className="w-1/3 pr-4">
                  <img 
                    src={insight.thumbnailUrl} 
                    alt={insight.title} 
                    className="w-full rounded-md"
                  />
                </div>
                <div className="w-2/3">
                  <h3 className="text-xl font-semibold mb-2">{insight.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">
                    {insight.channel} • {insight.timeAgo} • {insight.duration}
                  </p>
                  <p className="text-gray-700 mb-3">{insight.description}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {insight.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="px-2 py-1 text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-3">Video Summary</h3>
              <p className="text-gray-700 mb-4">{insight.summary}</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold">AI-Related Content</h3>
                <Button onClick={handleAddToInstructions}>
                  Add to Personal Instructions
                </Button>
              </div>
              <p className="text-gray-700 mb-4">{insight.aiRelatedContent}</p>
            </CardContent>
          </Card>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3">Personal AI Instructions</h3>
            <Textarea 
              value={personalInstructions}
              onChange={(e) => setPersonalInstructions(e.target.value)}
              placeholder="AI-related content from processed videos will be added here..."
              className="min-h-[200px]"
            />
          </div>
        </div>
      )}
    </div>
  );
} 