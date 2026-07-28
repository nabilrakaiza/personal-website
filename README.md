This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Environment

Copy the keys below into `.env.local`:

| Variable | Used by | Notes |
|---|---|---|
| `RESEND_API_KEY` | `/api/contact` | Contact form delivery |
| `CONTACT_EMAIL` | `/api/contact` | Where contact submissions go |
| `SOCIALSIM_API_URL` | `/api/socialsim/[...path]` | Base URL of the [socialsim-rag](https://github.com/nabilrakaiza/socialsim-rag) deployment |

## Playground: socialsim

`/playground/socialsim` is a RAG-powered dating sim. The UI lives here; the game engine, the Supabase database and the Gemini calls all live in a **separate** project, reached through the `/api/socialsim/[...path]` proxy. That split is deliberate — `SERVICE_ROLE` (which bypasses row-level security) and `GOOGLE_API_KEY` stay in that project and never enter this one's environment.

Two things about that route worth knowing before editing it:

- It **must pipe the upstream response body through untouched**. End-of-day streams progress over several minutes; awaiting `res.json()` would buffer it into one silent wait.
- Its `maxDuration` matches upstream's 300s, because it holds the connection open for the whole run. 300s is Vercel Hobby's hard maximum, not a chosen value.

To run both locally:

```bash
# terminal 1 — the game engine
cd ../socialsim-rag && npm run dev        # :3000

# terminal 2 — this site
PORT=3001 npm run dev                     # :3001, with SOCIALSIM_API_URL=http://localhost:3000
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
