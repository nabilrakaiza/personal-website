/* eslint-disable react/jsx-no-comment-textnodes */
'use client';

import ScrollReveal from '../components/ScrollReveal';
import Link from 'next/link';
import { RiArrowRightLine } from 'react-icons/ri';

const playgroundItems = [
  {
    slug: 'id-en-translator',
    title: 'Indonesian-English Translation Machine',
    description: 'A from-scratch implementation of an Indonesian-to-English translation machine.',
    tags: ['Python', 'Machine Learning', 'NLP', 'PyTorch'],
    accent: '#ff6b6b',
    emoji: '🌐',
  },
  {
    slug: 'fairy-chess-machine',
    title: 'Fairy Chess Machine',
    description: 'Implementation of minimax + alpha-beta pruning to play fairy chess.',
    tags: ['Python', 'Adversarial Search', 'Algorithm', 'AI'],
    accent: '#ff6b6b',
    emoji: '📋',
  }
];

export default function PlaygroundPage() {
  return (
    <div style={{ paddingTop: '64px', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '4rem 2rem' }}>
        <ScrollReveal>
          <span className="font-mono" style={{ fontSize: '0.8rem', color: 'var(--accent-violet)', letterSpacing: '0.12em', display: 'block', marginBottom: '0.75rem' }}>
            // playground
          </span>
          <h1 className="font-mono" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem' }}>
            Interactive Tools
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7, maxWidth: '520px', marginBottom: '3rem' }}>
            Small tools and experiments I&apos;ve built that you can actually use. Click any card to try it.
          </p>
        </ScrollReveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem' }}>
          {playgroundItems.map((item, i) => (
            <ScrollReveal key={item.slug} delay={i * 0.08}>
              <Link href={`/playground/${item.slug}`} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
                <div
                  style={{
                    background: 'var(--bg-card)', border: '1px solid var(--border)',
                    borderRadius: '10px', padding: '1.5rem', height: '100%',
                    display: 'flex', flexDirection: 'column', transition: 'all 0.25s ease',
                    position: 'relative', overflow: 'hidden', cursor: 'pointer',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = item.accent;
                    el.style.transform = 'translateY(-4px)';
                    el.style.boxShadow = `0 12px 32px ${item.accent}1a`;
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = 'var(--border)';
                    el.style.transform = 'translateY(0)';
                    el.style.boxShadow = 'none';
                  }}
                >
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: item.accent, opacity: 0.6 }} />

                  <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{item.emoji}</div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                    <h3 className="font-mono" style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      {item.title}
                    </h3>
                    <RiArrowRightLine size={16} style={{ color: item.accent, flexShrink: 0, marginTop: '2px' }} />
                  </div>

                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.7, flex: 1, marginBottom: '1.25rem' }}>
                    {item.description}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {item.tags.map(tag => (
                      <span key={tag} className="font-mono" style={{
                        fontSize: '0.68rem', color: 'var(--text-muted)',
                        border: '1px solid var(--border)', borderRadius: '3px',
                        padding: '0.2rem 0.5rem', background: 'var(--bg-surface)',
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
