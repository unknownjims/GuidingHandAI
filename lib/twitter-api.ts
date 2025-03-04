import { TwitterInsight } from "@/types/insights";

// Simulated data since we don't have actual Twitter API credentials yet
// In a real implementation, we would use the twitter-api-v2 package to interact with Twitter API
export async function fetchTwitterInsights(): Promise<TwitterInsight[]> {
  // This would be a real API call in production
  // const client = new TwitterApi(process.env.TWITTER_BEARER_TOKEN);
  
  // Simulate API request delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Mock Twitter data for now
  return [
    {
      id: "1",
      title: "Few-Shot Learning Patterns",
      username: "PromptEngineer",
      handle: "@prompt_master",
      timeAgo: "1 day ago",
      description: "Providing 2-3 high-quality examples in your prompt can dramatically improve output quality and consistency.",
      tags: ["few-shot", "examples", "consistency"],
      likes: 352,
      retweets: 128
    },
    {
      id: "2",
      title: "System Message Optimization",
      username: "AIPromptGuru",
      handle: "@ai_prompt_guru",
      timeAgo: "4 hours ago",
      description: "Properly structured system messages can significantly improve model behavior and reduce the need for lengthy user prompts.",
      tags: ["system-messages", "roles", "constraints"],
      likes: 128,
      retweets: 47
    },
    {
      id: "3",
      title: "Persona-Based Prompting",
      username: "GenAIExpert",
      handle: "@gen_ai_expert",
      timeAgo: "2 days ago",
      description: "Assigning specific personas to the AI leads to more specialized and higher quality outputs for domain-specific tasks.",
      tags: ["personas", "role-playing", "expertise"],
      likes: 215,
      retweets: 83
    },
    {
      id: "4",
      title: "Context Windowing Techniques",
      username: "LLMResearcher",
      handle: "@llm_research",
      timeAgo: "3 hours ago",
      description: "Strategic management of context windows can improve performance on complex reasoning tasks while reducing token usage.",
      tags: ["context", "optimization", "memory"],
      likes: 189,
      retweets: 67
    }
  ];
} 