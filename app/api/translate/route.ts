import { Client } from '@gradio/client';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { text } = await req.json();

    if (!text || typeof text !== 'string') {
      return NextResponse.json({ error: 'Text is required.' }, { status: 400 });
    }

    if (text.trim().length === 0) {
      return NextResponse.json({ error: 'Text cannot be empty.' }, { status: 400 });
    }

    const client = await Client.connect('nabilrakaiza/id-en-translator-api');
    const result = await client.predict('/translate_text', { text });
    const translation = (result.data as string[])[0];

    return NextResponse.json({ translation });
  } catch (error) {
    console.error('Translation error:', error);
    return NextResponse.json({ error: 'Translation failed. Please try again.' }, { status: 500 });
  }
}
