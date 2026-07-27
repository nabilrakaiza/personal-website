import { NextRequest, NextResponse } from 'next/server';

// Thin pass-through to the socialsim-rag deployment, which owns the game
// engine. Same shape as the translator route calling out to Gradio: the heavy
// lifting and the credentials live elsewhere.
//
// The point of proxying rather than letting the browser call socialsim
// directly is that SERVICE_ROLE (which bypasses row-level security) and
// GOOGLE_API_KEY never need to exist in this project's environment.

const UPSTREAM = process.env.SOCIALSIM_API_URL;

// End of day runs 1m40s–4m24s upstream, and this function holds the connection
// open for all of it, so it needs the same ceiling. 300s is Vercel's Hobby
// maximum — not a chosen margin.
export const maxDuration = 300;

async function proxy(req: NextRequest, path: string[]) {
  if (!UPSTREAM) {
    return NextResponse.json({ error: 'SOCIALSIM_API_URL is not configured.' }, { status: 500 });
  }

  const target = `${UPSTREAM.replace(/\/$/, '')}/api/${path.join('/')}${req.nextUrl.search}`;

  try {
    const upstream = await fetch(target, {
      method: req.method,
      headers: { 'content-type': req.headers.get('content-type') ?? 'application/json' },
      body: req.method === 'GET' ? undefined : await req.text(),
    });

    // Critical: hand back the body stream untouched rather than awaiting
    // res.json(). End of day streams newline-delimited progress over several
    // minutes, and buffering it here would collapse that into one silent wait —
    // the exact thing the streaming was added to avoid.
    return new Response(upstream.body, {
      status: upstream.status,
      headers: {
        'content-type': upstream.headers.get('content-type') ?? 'application/json',
        // no-transform stops any proxy in between re-chunking the stream.
        'cache-control': 'no-cache, no-transform',
      },
    });
  } catch (error) {
    console.error('socialsim proxy error:', error);
    return NextResponse.json({ error: 'Could not reach the game server.' }, { status: 502 });
  }
}

// Next 15 hands route params as a promise.
export async function GET(req: NextRequest, ctx: { params: Promise<{ path: string[] }> }) {
  const { path } = await ctx.params;
  return proxy(req, path);
}

export async function POST(req: NextRequest, ctx: { params: Promise<{ path: string[] }> }) {
  const { path } = await ctx.params;
  return proxy(req, path);
}
