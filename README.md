# personal-website

Portfolio site — Next.js App Router, TypeScript, deployed on Vercel.

Most of it is static: about, projects, contact. The interesting part is `/playground`, which hosts things that actually run in the browser rather than linking out to a repo.

```bash
npm run dev        # :3000
npm run build
npm run lint
```

## Environment

Copy into `.env.local`:

| Variable | Used by | Notes |
|---|---|---|
| `RESEND_API_KEY` | `/api/contact` | Contact form delivery |
| `CONTACT_EMAIL` | `/api/contact` | Where contact submissions go |
| `SOCIALSIM_API_URL` | `/api/socialsim/[...path]` | Base URL of the [socialsim-rag](https://github.com/nabilrakaiza/socialsim-rag) deployment, no trailing slash |

## Playground

| Page | What it is |
|---|---|
| `/playground/socialsim` | RAG-powered dating sim — see below |
| `/playground/id-en-translator` | Indonesian↔English translation model |
| `/playground/fairy-chess-machine` | Minimax + alpha-beta over fairy chess |

### socialsim

The UI lives here; the game engine, the Supabase database and the Gemini calls all live in a **separate project**, reached through the `/api/socialsim/[...path]` proxy. That split is deliberate — `SERVICE_ROLE` (which bypasses row-level security) and `GOOGLE_API_KEY` stay over there and never enter this project's environment.

Three things to know before editing anything in that path:

- **The proxy must pipe the upstream response body through untouched.** End-of-day streams progress over several minutes; `await res.json()` would buffer it into one silent wait and destroy the progress reporting.
- **`maxDuration` matches upstream's 300s**, because this route holds the connection open for the whole run. 300s is Vercel Hobby's hard maximum, not a chosen value.
- **This project keeps its own copies** of the socialsim page and components — only `lib/` is remote. They have to be kept in sync by hand, and letting them drift is what once left the playground's chat broken: the engine made `inGameHour` a required field and this copy carried on not sending it. When the engine's API changes, check here.

Deploy order matters for the same reason: **engine first, then this site.** A push here triggers a Vercel build immediately, so shipping a playground that calls a route the live engine doesn't have yet breaks it until the engine catches up.

To run both locally:

```bash
# terminal 1 — the game engine
cd ../socialsim-rag && npm run dev        # :3000

# terminal 2 — this site
npm run dev -- -p 3001                    # with SOCIALSIM_API_URL=http://localhost:3000
```
