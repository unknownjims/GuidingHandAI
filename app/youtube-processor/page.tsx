"use client";
import YouTubeVideoProcessor from '@/components/YouTubeVideoProcessor';

export default function YouTubeProcessorPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">YouTube Video Processor</h1>
      <p className="text-gray-500 mb-8">
        Enter a YouTube video URL to extract its content, generate a summary, and identify AI-related insights that can be added to your personal instruction database.
      </p>
      
      <YouTubeVideoProcessor />
    </div>
  );
} 