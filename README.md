# Dragon News

Dragon News is a modern news portal built with Next.js. It provides a clean,
responsive reading experience with category-based discovery, breaking-news
updates, detailed article pages, and account authentication.

## Live Demo

**[Open Dragon News](https://dragon-news-t7md.vercel.app/)**

## Features

- Browse news by category
- View article summaries and full article details
- Breaking-news ticker on the main layout
- Responsive interface for desktop and mobile screens
- Email and password registration and login
- Social login with Google and GitHub
- Session-aware navigation with logout support
- Protected article routes for authenticated readers
- Server-rendered pages powered by Next.js

## Tech Stack

- [Next.js](https://nextjs.org/) 16 with the App Router
- [React](https://react.dev/) 19
- [Tailwind CSS](https://tailwindcss.com/) and [DaisyUI](https://daisyui.com/)
- [Better Auth](https://www.better-auth.com/) for authentication
- [MongoDB](https://www.mongodb.com/) for authentication data
- [React Hook Form](https://react-hook-form.com/) for form handling
- [date-fns](https://date-fns.org/) for date formatting
- [Programming Hero News API](https://openapi.programming-hero.com/) for news data

## Getting Started

### Prerequisites

- Node.js 20 or later
- npm
- A MongoDB database
- OAuth credentials if Google or GitHub login is enabled

### Installation

```bash
git clone https://github.com/antick-arch/dragon_news.git
cd dragon_news
npm install
```

Create a `.env.local` file in the project root:

```env
MONGO_URI=your_mongodb_connection_string
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
```

Keep `.env.local` private and never commit real credentials to the repository.
Configure the OAuth callback URLs for your local and deployed domains in the
respective Google and GitHub developer consoles.

### Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |

## Project Structure

```text
src/
├── app/                 # App Router pages, layouts, and API routes
├── assets/              # Local images and visual assets
├── componets/           # Reusable homepage and shared UI components
└── lib/                 # News data access and authentication setup
public/                  # Static JSON data and public assets
```

## Deployment

The project is deployed on Vercel:

**[dragon-news-t7md.vercel.app](https://dragon-news-t7md.vercel.app/)**

To deploy your own instance:

1. Import the repository into Vercel.
2. Add the required environment variables in the Vercel project settings.
3. Add the Vercel deployment URL to the Google and GitHub OAuth callback settings.
4. Deploy the project using the default Next.js build configuration.

## License

This project is intended for educational and portfolio use.
