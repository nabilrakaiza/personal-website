'use client';

import ScrollReveal from './ScrollReveal';
import Link from 'next/link';
import { RiExternalLinkLine, RiGithubLine } from 'react-icons/ri';

const projects = [
  { title: '[upcoming] Indo-English Translation Machine', description: 'A mini Indonesian-English translation machine built from scratch.', tags: ['Python', 'PyTorch', 'NLP', 'AI'], github: 'https://github.com/nabilrakaiza/id-en-translator', live: '/playground/id-en-translator', accent: '#ff6b6b'},
  { title: 'Papper', description: 'Built a cross-platform, multi-role React Native POS system with Supabase and PostgreSQL that automates stock deduction, dual-printer Bluetooth printing, and analytics, actively processing 50+ daily orders and reducing SaaS costs by 100%.', tags: ['React', 'React Native', 'TypeScript', 'PostgreSQL', 'Supabase', 'Expo', 'Tailwind CSS'], github: 'https://github.com/nabilrakaiza/Papper', accent: '#7b61ff' },
  { title: 'Monitoring Human Mobility with Smartphones', description: 'Utilizing several traditional and modern ML framework to solve this problem.', tags: ['Python', 'sklearn', 'Pandas', 'PyTorch', 'Machine Learning'], github: 'https://github.com/NbF5/CS3244-repo', accent: '#00d4ff'},
];

export default function Projects() {
  return (
    <section style={{ padding: '2rem 2rem 6rem', maxWidth: '1100px', margin: '0 auto' }}>
      <ScrollReveal>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
          <span className="font-mono" style={{ color: 'var(--accent-mint)', fontSize: '0.8rem', letterSpacing: '0.12em' }}>03</span>
          <span style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
          <h2 className="font-mono" style={{ fontSize: 'clamp(1.2rem, 3vw, 1.6rem)', fontWeight: 700, color: 'var(--text-primary)' }}>
            projects
          </h2>
        </div>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', textAlign: 'right', marginBottom: '2.5rem' }}>
          A selection of things I&apos;ve built
        </p>
      </ScrollReveal>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem' }}>
        {projects.map((project, i) => (
          <ScrollReveal key={project.title} delay={i * 0.1}>
            <div
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '10px',
                padding: '1.5rem',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.25s ease',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = project.accent;
                el.style.transform = 'translateY(-4px)';
                el.style.boxShadow = `0 12px 32px ${project.accent}1a`;
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'var(--border)';
                el.style.transform = 'translateY(0)';
                el.style.boxShadow = 'none';
              }}
            >
              {/* Top accent line */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: project.accent, opacity: 0.6 }} />

              <h3 className="font-mono" style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                {project.title}
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.7, flex: 1, marginBottom: '1.25rem' }}>
                {project.description}
              </p>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                {project.tags.map(tag => (
                  <span key={tag} className="font-mono" style={{
                    fontSize: '0.68rem', color: 'var(--text-muted)',
                    border: '1px solid var(--border)', borderRadius: '3px',
                    padding: '0.2rem 0.5rem', background: 'var(--bg-surface)',
                    letterSpacing: '0.04em',
                  }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              {(project.github || project.live) && (
                <div style={{ display: 'flex', gap: '1rem' }}>
                  {/* Render Code link if project.github is available */}
                  {project.github && (
                    <a 
                      href={project.github} 
                      style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-muted)', fontSize: '0.8rem', transition: 'color 0.2s' }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--text-primary)'}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)'}
                    >
                      <RiGithubLine size={15} /> Code
                    </a>
                  )}

                  {/* Render Live link if project.live is available */}
                  {project.live && (
                    <a 
                      href={project.live} 
                      style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.8rem', transition: 'color 0.2s', color: project.accent }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = '0.75'}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = '1'}
                    >
                      <RiExternalLinkLine size={15} /> Live
                    </a>
                  )}
                </div>
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={0.4}>
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link href="/projects" style={{ textDecoration: 'none' }}>
            <button className="font-mono" style={{
              padding: '0.7rem 1.75rem', background: 'transparent',
              border: '1px solid var(--accent-mint)', color: 'var(--accent-mint)',
              borderRadius: '4px', fontSize: '0.875rem', cursor: 'pointer',
              letterSpacing: '0.05em', transition: 'all 0.2s',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(0,255,157,0.08)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
            >
              View all projects →
            </button>
          </Link>
        </div>
      </ScrollReveal>
    </section>
  );
}
