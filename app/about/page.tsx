/* eslint-disable react/jsx-no-comment-textnodes */
'use client';

import ScrollReveal from '../components/ScrollReveal';
import { SiTypescript, SiJavascript, SiCplusplus, SiPostgresql, SiPython, SiPytorch, SiTensorflow, SiLangchain, SiGit } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { RiDownloadLine } from 'react-icons/ri';
import Image from 'next/image';

const skills = [
  { label: 'Python', icon: <SiPython size={16} />, level: 97 },
  { label: 'Java', icon: <FaJava size={16} />, level: 90 },
  { label: 'JavaScript', icon: <SiJavascript size={16} />, level: 80 },
  { label: 'TypeScript', icon: <SiTypescript size={16} />, level: 85 },
  { label: 'C++', icon: <SiCplusplus size={16} />, level: 75 },
  { label: 'SQL / PostgreSQL', icon: <SiPostgresql size={16} />, level: 92 },
  { label: 'PyTorch', icon: <SiPytorch size={16} />, level: 90 },
  { label: 'TensorFlow', icon: <SiTensorflow size={16} />, level: 85 },
  { label: 'LangChain', icon: <SiLangchain size={16} />, level: 85 },
  { label: 'Git / GitHub', icon: <SiGit size={16} />, level: 90 },
];

export default function AboutPage() {
  return (
    <div style={{ paddingTop: '64px', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '4rem 2rem' }}>
        <ScrollReveal>
          <span className="font-mono" style={{ fontSize: '0.8rem', color: 'var(--accent-mint)', letterSpacing: '0.12em', display: 'block', marginBottom: '0.75rem' }}>
            // about
          </span>
          <h1 className="font-mono" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '3rem' }}>
            Who I Am
          </h1>
        </ScrollReveal>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem' }}>
          <div>
            <ScrollReveal direction="left">
              {/* Avatar placeholder */}
              <div style={{
                width: '180px', height: '180px', borderRadius: '12px',
                background: 'var(--bg-card)', border: '1px solid var(--border)',
                marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
                position: 'relative', overflow: 'hidden',
              }}>
                <Image width={1000} height={1000} alt="My photo" src="/my-photo.png" />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(to right, var(--accent-mint), var(--accent-violet))' }} />
              </div>

              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Nabil Rakaiza Abror</h2>
              <p className="font-mono" style={{ fontSize: '0.875rem', color: 'var(--accent-mint)', marginBottom: '1.5rem' }}>NLP Enthusiast · Singapore</p>

              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.85, marginBottom: '1.25rem' }}>
                I am an undergraduate pursuing a B.Sc. (Hons.) in Data Science and Analytics with a Second Major in Computer Science in NUS. My technical focus is heavily centered on Artificial Intelligence, specifically Natural Language Processing (NLP) and Large Language Models (LLMs). I am actively planning to take advanced academic modules in these areas to continuously deepen my expertise. 
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.85, marginBottom: '1.25rem' }}>
                I enjoy bridging the gap between theoretical data science and robust software engineering by deploying applied AI systems and building scalable, cross-platform applications.
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.85, marginBottom: '2rem' }}>
                Aside from these, I also enjoy playing some games, watching YouTube/anime, listening to music, playing Rubiks cube, or just sleeping.
              </p>

              <a href="/Resume - Nabil Rakaiza Abror - General Role.pdf" download="Resume - Nabil Rakaiza Abror - General Role.pdf" style={{ textDecoration: 'none', display: 'inline-block' }}>
                <button className="font-mono" style={{
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.75rem 1.5rem', background: 'transparent',
                  border: '1px solid var(--accent-violet)', color: 'var(--accent-violet)',
                  borderRadius: '4px', fontSize: '0.875rem', cursor: 'pointer',
                  letterSpacing: '0.05em', transition: 'all 0.2s',
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(123,97,255,0.1)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
                >
                  <RiDownloadLine size={16} />
                  Download Resume
                </button>
              </a>
            </ScrollReveal>
          </div>

          <div>
            <ScrollReveal direction="right">
              <h3 className="font-mono" style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '2rem', letterSpacing: '0.05em' }}>
                skills &amp; proficiency
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {skills.map((skill, i) => (
                  <ScrollReveal key={skill.label} delay={i * 0.05} direction="right">
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)' }}>
                          {skill.icon}
                          <span className="font-mono" style={{ fontSize: '0.8rem', letterSpacing: '0.04em' }}>{skill.label}</span>
                        </div>
                        <span className="font-mono" style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{skill.level}%</span>
                      </div>
                      <div style={{ background: 'var(--bg-surface)', borderRadius: '2px', height: '4px', overflow: 'hidden' }}>
                        <div style={{
                          height: '100%', borderRadius: '2px',
                          background: `linear-gradient(to right, var(--accent-mint), var(--accent-violet))`,
                          width: `${skill.level}%`,
                          transition: 'width 1s ease',
                        }} />
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </ScrollReveal>

            {/* Quick facts */}
            <ScrollReveal delay={0.4} direction="right">
              <div style={{ marginTop: '3rem', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '10px', padding: '1.5rem' }}>
                <h3 className="font-mono" style={{ fontSize: '0.8rem', color: 'var(--text-muted)', letterSpacing: '0.1em', marginBottom: '1.25rem', textTransform: 'uppercase' }}>Quick Facts</h3>
                {[
                  ['📍', 'Based in', 'Singapore'],
                  ['💼', 'Experience', '3+ years'],
                  ['🌐', 'Languages', 'English, Indonesian'],
                  ['🎮', 'Games', 'Valorant, CR, COC, ML'],
                  ['💡', 'Hobby', 'YT/anime, football, games'],
                ].map(([emoji, key, val]) => (
                  <div key={key} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid var(--border)' }}>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{emoji} {key}</span>
                    <span className="font-mono" style={{ fontSize: '0.8rem', color: 'var(--text-primary)' }}>{val}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          div > div[style*="grid-template-columns"] { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </div>
  );
}
