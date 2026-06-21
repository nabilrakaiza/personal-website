'use client';

import { use } from 'react';
import Link from 'next/link';
import { RiArrowLeftLine } from 'react-icons/ri';

const tools: Record<string, { title: string; description: string; emoji: string; accent: string; component: React.ReactNode }> = {
  'id-en-translator': {
    title: 'Indonesian-English Translation Machine',
    description: 'A from-scratch implementation of an Indonesian-to-English translation machine.',
    emoji: '🔍',
    accent: '#00ff9d',
    component: <IDENTranslation />,
  },
  'fairy-chess-machine': {
    title: 'Fairy Chess Machine',
    description: 'Implementation of minimax + alpha-beta pruning to play fairy chess.',
    emoji: '📋',
    accent: '#00d4ff',
    component: <FairyChessMachine />,
  }
};

function IDENTranslation() {
  return (
    <div style={{ padding: '2rem', background: 'var(--bg-card)', borderRadius: '10px', border: '1px solid var(--border)' }}>
      <p className="font-mono" style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
        🚧 This tool is coming soon. Check back later!
      </p>
    </div>
  );
}
function FairyChessMachine() {
  return (
    <div style={{ padding: '2rem', background: 'var(--bg-card)', borderRadius: '10px', border: '1px solid var(--border)' }}>
      <p className="font-mono" style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
        🚧 This tool is coming soon. Check back later!
      </p>
    </div>
  );
}

export default function PlaygroundSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const tool = tools[slug];

  if (!tool) {
    return (
      <div style={{ paddingTop: '64px', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <p className="font-mono" style={{ fontSize: '3rem', marginBottom: '1rem' }}>404</p>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Tool not found.</p>
          <Link href="/playground" style={{ textDecoration: 'none', color: 'var(--accent-mint)' }}>← Back to Playground</Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: '64px', minHeight: '100vh' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '4rem 2rem' }}>
        <Link href="/playground" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '2rem', transition: 'color 0.2s' }}
          onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)'}
          onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'}
        >
          <RiArrowLeftLine size={14} /> Back to Playground
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
          <span style={{ fontSize: '2rem' }}>{tool.emoji}</span>
          <h1 className="font-mono" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: 700, color: 'var(--text-primary)' }}>
            {tool.title}
          </h1>
        </div>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', fontSize: '0.95rem' }}>
          {tool.description}
        </p>

        {tool.component}
      </div>
    </div>
  );
}
