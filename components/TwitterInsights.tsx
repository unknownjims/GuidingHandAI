import React from 'react';
import { useTwitterInsights } from '@/hooks/useTwitterInsights';
import { TwitterInsight } from '@/types/insights';

const TwitterInsightCard = ({ insight }: { insight: TwitterInsight }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-4">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{insight.title}</h3>
        <span className="text-sm text-gray-500 dark:text-gray-400">{insight.timeAgo}</span>
      </div>
      <div className="flex items-center mb-2">
        <span className="font-medium text-blue-600 dark:text-blue-400">{insight.username}</span>
        <span className="ml-1 text-gray-500 dark:text-gray-400">{insight.handle}</span>
      </div>
      <p className="text-gray-700 dark:text-gray-300 mb-3">{insight.description}</p>
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
      <div className="flex text-sm text-gray-500 dark:text-gray-400">
        <div className="flex items-center mr-4">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
          </svg>
          {insight.likes}
        </div>
        <div className="flex items-center">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 8h10a1 1 0 011 1v1a1 1 0 11-2 0V9H6v1a1 1 0 11-2 0V9a1 1 0 011-1zm11 4h-10a1 1 0 00-1 1v1a1 1 0 002 0v-1h8v1a1 1 0 002 0v-1a1 1 0 00-1-1z" />
          </svg>
          {insight.retweets}
        </div>
      </div>
    </div>
  );
};

export default function TwitterInsights() {
  const { insights, isLoading, error, refreshInsights } = useTwitterInsights();

  if (isLoading) {
    return (
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Twitter Insights</h2>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md opacity-50 cursor-not-allowed"
            disabled
          >
            Refreshing...
          </button>
        </div>
        <div className="space-y-4">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="bg-gray-200 dark:bg-gray-700 animate-pulse rounded-lg h-48"></div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Twitter Insights</h2>
          <button
            onClick={refreshInsights}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors"
          >
            Try Again
          </button>
        </div>
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">{error}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Twitter Insights</h2>
        <button
          onClick={refreshInsights}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors"
        >
          Refresh
        </button>
      </div>
      {insights.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">No insights available at the moment.</p>
      ) : (
        <div className="space-y-4">
          {insights.map(insight => (
            <TwitterInsightCard key={insight.id} insight={insight} />
          ))}
        </div>
      )}
    </div>
  );
} 