'use client';

import ScrollReveal from './ScrollReveal';
import { RiCodeSSlashLine, RiLightbulbLine, RiTeamLine } from 'react-icons/ri';

const highlights = [
  { icon: <RiCodeSSlashLine size={20} />, label: '3+ years experience', desc: 'Building production-grade apps and AI models' },
  { icon: <RiLightbulbLine size={20} />, label: 'Problem-first mindset', desc: 'I design for clarity and function' },
  { icon: <RiTeamLine size={20} />, label: 'Collaborative', desc: 'Comfortable in cross-functional teams' },
];

export default function AboutShort() {
  return (
    <section style={{ padding: '6rem 2rem', maxWidth: '1100px', margin: '0 auto' }}>
      <ScrollReveal>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
          <span className="font-mono" style={{ color: 'var(--accent-mint)', fontSize: '0.8rem', letterSpacing: '0.12em' }}>01</span>
          <span style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
          <h2 className="font-mono" style={{ fontSize: 'clamp(1.2rem, 3vw, 1.6rem)', fontWeight: 700, color: 'var(--text-primary)' }}>
            about_me
          </h2>
        </div>
      </ScrollReveal>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
        <ScrollReveal direction="left">
          <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.85, marginBottom: '1.25rem' }}>
            Hi, I&apos;m Nabil. I&apos;m a Data Science and Computer Science student at the National University of Singapore. 
            I sit at the intersection of AI/ML, data structures, and software engineering—passionate about building intelligent systems and turning complex data problems into elegant, scalable solutions.
          </p>
          <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.85, marginBottom: '1.5rem' }}>
            When I&apos;m not coding, I&apos;m usually playing games, watching youtube/anime, playing Rubiks cube, or just sleeping.
          </p>
          <a href="/about" style={{ textDecoration: 'none' }}>
            <span className="font-mono" style={{ fontSize: '0.85rem', color: 'var(--accent-mint)', borderBottom: '1px solid var(--accent-mint)', paddingBottom: '2px', transition: 'opacity 0.2s', cursor: 'pointer' }}>
              More about me →
            </span>
          </a>
        </ScrollReveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {highlights.map((h, i) => (
            <ScrollReveal key={h.label} direction="right" delay={i * 0.1}>
              <div
                style={{
                  display: 'flex', gap: '1rem', alignItems: 'flex-start',
                  padding: '1.2rem', background: 'var(--bg-card)',
                  border: '1px solid var(--border)', borderRadius: '8px',
                  transition: 'border-color 0.2s',
                  cursor: 'default',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,255,157,0.3)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; }}
              >
                <span style={{ color: 'var(--accent-mint)', marginTop: '2px', flexShrink: 0 }}>{h.icon}</span>
                <div>
                  <div className="font-mono" style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: 600, marginBottom: '0.2rem' }}>{h.label}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{h.desc}</div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          section > div:last-child { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  );
}
