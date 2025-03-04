"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

export default function Home() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [activeFilter, setActiveFilter] = useState("all");
  
  // Mock data for insights
  const insights = [
    {
      id: 1,
      title: "Chain-of-Thought Prompting",
      source: "YouTube",
      timeAgo: "2 days ago",
      description: "Breaking down complex reasoning tasks by asking the model to 'think step by step' improves accuracy on math and logic problems.",
      tags: ["reasoning", "problem-solving", "mathematics"]
    },
    {
      id: 2,
      title: "Few-Shot Learning Patterns",
      source: "Twitter",
      timeAgo: "1 day ago",
      description: "Providing 2-3 high-quality examples in your prompt can dramatically improve output quality and consistency.",
      tags: ["few-shot", "examples", "consistency"]
    },
    {
      id: 3,
      title: "Token Optimization Strategies",
      source: "Reddit",
      timeAgo: "3 days ago",
      description: "Techniques to reduce token usage while maintaining output quality, including prompt compression and strategic truncation.",
      tags: ["efficiency", "cost-saving", "optimization"]
    },
    {
      id: 4,
      title: "ReAct Prompting Framework",
      source: "YouTube",
      timeAgo: "5 days ago",
      description: "Combining reasoning and action in prompts allows models to interact with external tools and validate their own outputs.",
      tags: ["reasoning", "tools", "verification"]
    },
    {
      id: 5,
      title: "System Message Optimization",
      source: "Twitter",
      timeAgo: "4 hours ago",
      description: "Properly structured system messages can significantly improve model behavior and reduce the need for lengthy user prompts.",
      tags: ["system-messages", "roles", "constraints"]
    },
    {
      id: 6,
      title: "Prompt Chaining Techniques",
      source: "Reddit",
      timeAgo: "1 week ago",
      description: "Breaking complex tasks into sequences of simpler prompts yields better results than attempting everything in one go.",
      tags: ["workflows", "multi-step", "refinement"]
    },
    {
      id: 7,
      title: "Structured Output Formatting",
      source: "YouTube",
      timeAgo: "3 days ago",
      description: "Explicitly defining output structure in your prompts leads to more consistent and parseable responses.",
      tags: ["json", "structure", "parsing"]
    },
    {
      id: 8,
      title: "Persona-Based Prompting",
      source: "Twitter",
      timeAgo: "2 days ago",
      description: "Assigning specific personas to the AI leads to more specialized and higher quality outputs for domain-specific tasks.",
      tags: ["personas", "role-playing", "expertise"]
    },
    {
      id: 9,
      title: "Self-Critique and Refinement",
      source: "Reddit",
      timeAgo: "5 days ago",
      description: "Prompting models to evaluate and refine their own outputs leads to significantly improved results.",
      tags: ["refinement", "quality", "iteration"]
    }
  ];

  // Filter insights based on the active filter
  const filteredInsights = activeFilter === "all" 
    ? insights 
    : insights.filter(insight => 
        insight.source.toUpperCase() === activeFilter.toUpperCase()
      );

  // Handler for generating personalized instructions
  const [personalInput, setPersonalInput] = useState("");
  const [personalOutput, setPersonalOutput] = useState("");
  const generatePersonalInstructions = () => {
    if (!personalInput) return;
    setPersonalOutput(`Personalized Instructions:\nBased on your preferences: "${personalInput}"\n\nRecommended approach:\n- Use specific examples to clarify intent\n- Structure your prompts with clear steps\n- Include relevant context for better understanding`);
  };

  // Handler for generating AI tool instructions
  const [aiToolInput, setAiToolInput] = useState("");
  const [aiToolOutput, setAiToolOutput] = useState("");
  const generateAiToolInstructions = () => {
    if (!aiToolInput) return;
    setAiToolOutput(`AI Tool Instructions for: ${aiToolInput}\n\nOptimized approach:\n- Be precise with your requirements to reduce hallucinations\n- Use minimal tokens for efficiency\n- Specify output format for consistent results\n- Include validation steps for critical tasks`);
  };

  // Source icon component
  const SourceIcon = ({ source }: { source: string }) => {
    if (source === "YouTube") {
      return <span className="mr-1">📺</span>;
    } else if (source === "Twitter") {
      return <span className="mr-1">🐦</span>;
    } else if (source === "Reddit") {
      return <span className="mr-1">📱</span>;
    }
    return null;
  };

  return (
    <div className="container mx-auto p-4 max-w-7xl">
      <h1 className="text-3xl font-bold mb-2">Prompt Engineering Insights</h1>
      <p className="text-gray-500 mb-6">Discover the latest prompt engineering techniques from across the web and generate personalized instructions.</p>

      {/* Main navigation tabs */}
      <div className="flex mb-8 border rounded-lg overflow-hidden">
        <button 
          className={`flex-1 py-3 px-4 text-center ${activeTab === 'dashboard' ? 'bg-white' : 'bg-gray-100 text-gray-700'}`}
          onClick={() => setActiveTab('dashboard')}
        >
          Dashboard
        </button>
        <button 
          className={`flex-1 py-3 px-4 text-center ${activeTab === 'personal' ? 'bg-white' : 'bg-gray-100 text-gray-700'}`}
          onClick={() => setActiveTab('personal')}
        >
          Personal Instructions
        </button>
        <button 
          className={`flex-1 py-3 px-4 text-center ${activeTab === 'aitool' ? 'bg-white' : 'bg-gray-100 text-gray-700'}`}
          onClick={() => setActiveTab('aitool')}
        >
          AI Tool Instructions
        </button>
        <Link 
          href="/twitter-feed" 
          className="flex-1 py-3 px-4 text-center bg-blue-500 text-white hover:bg-blue-600 transition-colors"
        >
          Twitter Feed
        </Link>
      </div>

      {/* Dashboard Tab */}
      {activeTab === 'dashboard' && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Latest Insights</h2>
          
          {/* Filters */}
          <div className="flex mb-6 border rounded-lg overflow-hidden">
            <button 
              className={`flex-1 px-6 py-2 text-center ${activeFilter === 'all' ? 'bg-white' : 'bg-gray-100 text-gray-700'}`}
              onClick={() => setActiveFilter('all')}
            >
              All
            </button>
            <button 
              className={`flex-1 px-6 py-2 text-center ${activeFilter === 'YouTube' ? 'bg-white' : 'bg-gray-100 text-gray-700'}`}
              onClick={() => setActiveFilter('YouTube')}
            >
              YouTube
            </button>
            <button 
              className={`flex-1 px-6 py-2 text-center ${activeFilter === 'Twitter' ? 'bg-white' : 'bg-gray-100 text-gray-700'}`}
              onClick={() => setActiveFilter('Twitter')}
            >
              X/Twitter
            </button>
            <button 
              className={`flex-1 px-6 py-2 text-center ${activeFilter === 'Reddit' ? 'bg-white' : 'bg-gray-100 text-gray-700'}`}
              onClick={() => setActiveFilter('Reddit')}
            >
              Reddit
            </button>
          </div>

          {/* Insights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredInsights.map(insight => (
              <Card key={insight.id} className="border hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold">{insight.title}</h3>
                    <div className="flex items-center text-sm text-gray-600 shrink-0 ml-2">
                      <SourceIcon source={insight.source} />
                      <span>{insight.source}</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-500 mb-3">⏱ {insight.timeAgo}</p>
                  <p className="mb-4 text-gray-700">{insight.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {insight.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-gray-100 text-sm rounded-full text-gray-700">{tag}</span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-between items-center mt-6 text-sm text-gray-500">
            <p>🔄 Updated hourly based on trending discussions</p>
            <Button variant="outline" className="text-sm" onClick={() => console.log("Refreshing...")}>
              Refresh
            </Button>
          </div>
        </div>
      )}

      {/* Personal Instructions Tab */}
      {activeTab === 'personal' && (
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Personal Instructions Generator</h2>
          <Card className="mb-6">
            <CardContent className="p-6">
              <p className="mb-4">Describe your preferences, writing style, or specific use case:</p>
              <Input 
                placeholder="E.g., Technical documentation with concise explanations" 
                className="mb-4"
                value={personalInput}
                onChange={(e) => setPersonalInput(e.target.value)}
              />
              <Button 
                className="w-full"
                onClick={generatePersonalInstructions}
              >
                Generate Personalized Instructions
              </Button>
              
              {personalOutput && (
                <div className="mt-6">
                  <p className="font-semibold mb-2">Generated Instructions:</p>
                  <Textarea 
                    className="min-h-[200px]" 
                    value={personalOutput} 
                    readOnly 
                  />
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}

      {/* AI Tool Instructions Tab */}
      {activeTab === 'aitool' && (
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">AI Tool Instructions Generator</h2>
          <Card className="mb-6">
            <CardContent className="p-6">
              <p className="mb-4">Enter the name of the AI tool or specific task:</p>
              <Input 
                placeholder="E.g., ChatGPT for data analysis, DALL-E for logo creation" 
                className="mb-4"
                value={aiToolInput}
                onChange={(e) => setAiToolInput(e.target.value)}
              />
              <Button 
                className="w-full"
                onClick={generateAiToolInstructions}
              >
                Generate AI Tool Instructions
              </Button>
              
              {aiToolOutput && (
                <div className="mt-6">
                  <p className="font-semibold mb-2">Generated Instructions:</p>
                  <Textarea 
                    className="min-h-[200px]" 
                    value={aiToolOutput} 
                    readOnly 
                  />
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}