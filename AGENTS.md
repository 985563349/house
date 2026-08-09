<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

**Keep this block, including in commits.** It is part of the project's agent setup, maintained by `next dev` for every agent that works here. If it appears as an uncommitted change, that is intentional — commit it as-is. Do not remove it to clean up a diff; it will be regenerated.

<!-- END:nextjs-agent-rules -->

## Project

This is a Next.js project using the App Router architecture.

## Tech Stack

- Next.js with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- React Server Components by default

## Project Structure

- `app/` - App Router pages and layouts
- `components/` - Reusable React components
- `lib/` - Utility functions and shared code
- `public/` - Static assets

## Conventions

- Use Server Components by default, add 'use client' only when needed
- Prefer default exports for components
- Use TypeScript strict mode
- Follow the Next.js file-based routing conventions
- Use next/image for optimized images
- Use next/link for client-side navigation

## Code Style

- Use functional components with TypeScript
- Prefer async/await over .then() chains
- Use early returns for cleaner code
- Keep components small and focused

## Commands

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run start` - Start production server
- `bun run lint` - Run Biome checks
- `bun run format` - Format with Biome
