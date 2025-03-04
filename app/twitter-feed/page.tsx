"use client";
import TwitterInsights from '@/components/TwitterInsights';

export default function TwitterFeedPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Twitter Prompt Engineering Insights</h1>
      <p className="text-gray-500 mb-8">
        Real-time prompt engineering insights from Twitter. Discover the latest techniques, discussions, and best practices.
      </p>
      
      <TwitterInsights />
    </div>
  );
} 