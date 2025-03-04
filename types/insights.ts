// Base insight interface for common properties
export interface BaseInsight {
  id: string;
  title: string;
  timeAgo: string;
  description: string;
  tags: string[];
  source: "YouTube" | "Reddit";
}

// YouTube-specific insight properties
export interface YouTubeInsight {
  id: string;
  title: string;
  channel: string;
  timeAgo: string;
  description: string;
  tags: string[];
  views: number;
  likes: number;
  videoId: string;
  thumbnailUrl: string;
  duration: string;
  summary?: string;
  aiRelatedContent?: string;
}

// Reddit-specific insight properties
export interface RedditInsight {
  id: string;
  title: string;
  subreddit: string;
  author: string;
  timeAgo: string;
  description: string;
  tags: string[];
  upvotes: number;
  comments: number;
}

// Transform functions to convert platform-specific data to BaseInsight
export function transformYouTubeToInsight(video: YouTubeInsight): BaseInsight {
  return {
    id: video.id,
    title: video.title,
    timeAgo: video.timeAgo,
    description: video.description,
    tags: video.tags,
    source: "YouTube"
  };
}

export function transformRedditToInsight(post: RedditInsight): BaseInsight {
  return {
    id: post.id,
    title: post.title,
    timeAgo: post.timeAgo,
    description: post.description,
    tags: post.tags,
    source: "Reddit"
  };
}

// YouTube transcript segment
export interface TranscriptSegment {
  text: string;
  offset: number;
  duration: number;
}

// Full transcript type
export interface VideoTranscript {
  videoId: string;
  segments: TranscriptSegment[];
  fullText: string;
}

// YouTube video summary
export interface VideoSummary {
  videoId: string;
  title: string;
  summary: string;
  aiRelatedContent: string;
  keyInsights: string[];
} 