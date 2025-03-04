export function generateInstructions(input: string, type: "personal" | "ai-tool"): string {
  if (type === "personal") {
    return `Simulated personal instructions for: ${input}`;
  }
  return `Simulated AI tool instructions for: ${input}`;
} 