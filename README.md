# Prompt Engineering Insights Compiler

A web application that compiles and analyzes prompt engineering best practices from YouTube videos, enabling users to discover the latest techniques and generate personalized instructions.

## Features

- Dashboard showing latest prompt engineering insights 
- Personal Instructions Generator based on user preferences
- AI Tool Instructions Generator for optimizing prompts for specific AI tools
- YouTube Video Processor that:
  - Extracts video transcripts
  - Generates video summaries
  - Identifies AI-related content
  - Allows adding extracted insights to personal instructions
- Filtering capabilities for insights by source platform

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui components
- API Routes for backend functionality
- YouTube transcript extraction

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

- `app/` - Next.js App Router pages and layouts
- `components/` - React components 
- `components/ui/` - shadcn/ui components
- `hooks/` - Custom React hooks
- `lib/` - Utility functions and API clients
- `pages/api/` - Next.js API routes
- `types/` - TypeScript type definitions

## Current Status

The application currently extracts YouTube video transcripts, generates summaries, and identifies AI-related content. The YouTube Video Processor allows users to extract insights from videos and add them to their personal instructions database.

See [PROGRESS.md](./PROGRESS.md) for detailed progress tracking and upcoming tasks.

## Future Enhancements

- Connect to YouTube Data API for more comprehensive video data
- Implement Reddit data integration
- Implement user authentication
- Add insight collection/saving features
- Create analytics dashboard for prompt engineering trends
- Implement AI-powered recommendations

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
