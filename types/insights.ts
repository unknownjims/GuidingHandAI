// Base insight interface for common properties
export interface BaseInsight {
  id: string;
  title: string;
  timeAgo: string;
  description: string;
  tags: string[];
  source: "YouTube" | "Twitter" | "Reddit";
}

// Twitter-specific insight properties
export interface TwitterInsight {
  id: string;
  title: string;
  username: string;
  handle: string;
  timeAgo: string;
  description: string;
  tags: string[];
  likes: number;
  retweets: number;
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
export function transformTwitterToInsight(tweet: TwitterInsight): BaseInsight {
  return {
    id: tweet.id,
    title: tweet.title,
    timeAgo: tweet.timeAgo,
    description: tweet.description,
    tags: tweet.tags,
    source: "Twitter"
  };
}

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