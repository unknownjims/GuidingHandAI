# Prompt Engineering Insights Compiler

A web application that compiles and analyzes prompt engineering best practices from social media platforms, enabling users to discover the latest techniques and generate personalized instructions.

## Features

- Dashboard showing latest prompt engineering insights from social media (Twitter/X, YouTube, Reddit)
- Personal Instructions Generator based on user preferences
- AI Tool Instructions Generator for optimizing prompts for specific AI tools
- Real-time Twitter feed of prompt engineering insights (implemented with mock data, ready for API integration)
- Filtering capabilities for insights by source platform

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui components
- API Routes for backend functionality

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   ```bash
   cp .env.local.example .env.local
   ```
   Then edit `.env.local` to add your API credentials

4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

- `app/` - Next.js App Router pages and layouts
- `components/` - React components 
- `components/ui/` - shadcn/ui components
- `hooks/` - Custom React hooks
- `lib/` - Utility functions and API clients
- `pages/api/` - Next.js API routes
- `types/` - TypeScript type definitions

## Current Status

The application currently simulates fetching data from social media platforms with mock implementations. The Twitter feed integration is complete and ready to be connected to the real Twitter API once credentials are provided.

See [PROGRESS.md](./PROGRESS.md) for detailed progress tracking and upcoming tasks.

## Future Enhancements

- Connect to real social media APIs (Twitter/X, YouTube, Reddit)
- Implement user authentication
- Add insight collection/saving features
- Create analytics dashboard for prompt engineering trends
- Implement AI-powered recommendations

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
