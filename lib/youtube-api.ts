import { YouTubeInsight, TranscriptSegment, VideoTranscript, VideoSummary } from "@/types/insights";
import { YoutubeTranscript } from 'youtube-transcript';

// Function to extract video ID from YouTube URL
export function extractVideoId(url: string): string | null {
  const regExp = /^.*(youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
}

// Function to fetch YouTube video transcript
export async function fetchVideoTranscript(videoIdOrUrl: string): Promise<VideoTranscript | null> {
  try {
    // Extract video ID if URL is provided
    const videoId = videoIdOrUrl.includes('youtube.com') || videoIdOrUrl.includes('youtu.be') 
      ? extractVideoId(videoIdOrUrl) 
      : videoIdOrUrl;
    
    if (!videoId) {
      throw new Error('Invalid YouTube video ID or URL');
    }

    // Fetch transcript using the library
    const transcriptSegments = await YoutubeTranscript.fetchTranscript(videoId);
    
    // Convert to our TranscriptSegment type
    const segments: TranscriptSegment[] = transcriptSegments.map(segment => ({
      text: segment.text,
      offset: segment.offset,
      duration: segment.duration
    }));

    // Combine all segments into a full text
    const fullText = segments.map(segment => segment.text).join(' ');

    return {
      videoId,
      segments,
      fullText
    };
  } catch (error) {
    console.error('Error fetching video transcript:', error);
    return null;
  }
}

// Simulated video information (in a real implementation, this would use the YouTube Data API)
export async function fetchVideoInfo(videoId: string): Promise<Partial<YouTubeInsight> | null> {
  try {
    // Simulate API request delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // For now, return mock data
    // In a real implementation, we would call the YouTube Data API here
    return {
      id: videoId,
      videoId,
      title: "Understanding Large Language Models",
      channel: "AI Explained",
      timeAgo: "2 weeks ago",
      description: "This video provides a comprehensive explanation of how Large Language Models work and their applications in prompt engineering.",
      tags: ["AI", "language models", "prompt engineering"],
      views: 245000,
      likes: 15700,
      thumbnailUrl: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
      duration: "18:42"
    };
  } catch (error) {
    console.error('Error fetching video info:', error);
    return null;
  }
}

// Generate a summary from a transcript
export async function generateVideoSummary(transcript: VideoTranscript, videoInfo: Partial<YouTubeInsight>): Promise<VideoSummary> {
  try {
    // In a real implementation, this would use an AI model to generate a summary
    // For now, we'll just simulate a summary
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    return {
      videoId: transcript.videoId,
      title: videoInfo.title || 'Unknown Title',
      summary: "This video explores large language models, explaining their architecture, training methods, and applications. The speaker discusses how transformers work, the impact of self-attention mechanisms, and the importance of proper prompting techniques for optimal results.",
      aiRelatedContent: "The video highlights several key prompt engineering techniques including chain-of-thought prompting, few-shot learning, and system message optimization. It emphasizes the importance of clearly structured prompts that provide context, examples, and constraints.",
      keyInsights: [
        "Chain-of-thought prompting improves reasoning capabilities in LLMs",
        "System messages establish model behavior more effectively than user prompts",
        "Few-shot learning with 2-3 examples dramatically improves output quality",
        "Specific, structured prompts yield better results than vague instructions"
      ]
    };
  } catch (error) {
    console.error('Error generating summary:', error);
    return {
      videoId: transcript.videoId,
      title: videoInfo.title || 'Unknown Title',
      summary: "Error generating summary",
      aiRelatedContent: "Could not extract AI-related content",
      keyInsights: []
    };
  }
}

// Combines fetching video info, transcript, and generating a summary
export async function processYouTubeVideo(videoUrl: string): Promise<YouTubeInsight | null> {
  try {
    const videoId = extractVideoId(videoUrl);
    
    if (!videoId) {
      throw new Error('Invalid YouTube URL');
    }
    
    // Fetch video info and transcript in parallel
    const [videoInfo, transcript] = await Promise.all([
      fetchVideoInfo(videoId),
      fetchVideoTranscript(videoId)
    ]);
    
    if (!videoInfo || !transcript) {
      throw new Error('Failed to fetch video information or transcript');
    }
    
    // Generate summary from transcript
    const summary = await generateVideoSummary(transcript, videoInfo);
    
    // Combine everything into a YouTubeInsight object
    return {
      ...videoInfo as YouTubeInsight,
      summary: summary.summary,
      aiRelatedContent: summary.aiRelatedContent
    };
  } catch (error) {
    console.error('Error processing YouTube video:', error);
    return null;
  }
} 