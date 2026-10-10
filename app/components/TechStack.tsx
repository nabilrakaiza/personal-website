'use client';

import ScrollReveal from './ScrollReveal';
import {
  SiPython, SiR, SiPostgresql, SiTypescript, SiJavascript, SiCplusplus,
  SiPytorch, SiTensorflow, SiScikitlearn, SiLangchain, SiGoogle, SiOpenai,
  SiReact, SiNextdotjs, SiNodedotjs, SiFlask,
  SiGit, SiSupabase, SiQlik,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const groups = [
  {
    title: 'languages',
    items: [
      { icon: <SiPython size={15} />, label: 'Python', color: '#3776AB' },
      { icon: <FaJava size={15} />, label: 'Java', color: '#E76F00' },
      { icon: <SiPostgresql size={15} />, label: 'PostgreSQL', color: '#5B9BD5' },
      { icon: <SiTypescript size={15} />, label: 'TypeScript', color: '#3178C6' },
      { icon: <SiJavascript size={15} />, label: 'JavaScript', color: '#F7DF1E' },
      { icon: <SiR size={15} />, label: 'R', color: '#276BBE' },
      { icon: <SiCplusplus size={15} />, label: 'C++', color: '#659AD2' },
    ],
  },
  {
    title: 'ml_ai',
    items: [
      { icon: <SiPytorch size={15} />, label: 'PyTorch', color: '#EE4C2C' },
      { icon: <SiTensorflow size={15} />, label: 'TensorFlow', color: '#FF6F00' },
      { icon: <SiScikitlearn size={15} />, label: 'Scikit-learn', color: '#F7931E' },
      { icon: <SiLangchain size={15} />, label: 'LangChain', color: '#7FC8A9' },
      { icon: <SiLangchain size={15} />, label: 'LangGraph', color: '#7FC8A9' }, // Uses LangChain branding
      { icon: <SiGoogle size={15} />, label: 'Gemini', color: '#4C8DF6' },
      { icon: <SiOpenai size={15} />, label: 'OpenAI', color: '#E2E8F0' },
    ],
  },
  {
    title: 'web_app',
    items: [
      { icon: <SiReact size={15} />, label: 'React', color: '#61DAFB' },
      { icon: <SiReact size={15} />, label: 'React Native', color: '#61DAFB' },
      { icon: <SiNextdotjs size={15} />, label: 'Next.js', color: '#E2E8F0' },
      { icon: <SiNodedotjs size={15} />, label: 'Node.js', color: '#68A063' },
      { icon: <SiFlask size={15} />, label: 'Flask', color: '#E2E8F0' },
    ],
  },
  {
    title: 'tools',
    items: [
      { icon: <SiGit size={15} />, label: 'Git', color: '#F05032' },
      { icon: <SiSupabase size={15} />, label: 'Supabase', color: '#3ECF8E' },
      { icon: <SiQlik size={15} />, label: 'Qlik', color: '#009845' },
    ],
  },
];

export default function TechStack() {
  return (
    <section className="gutter" style={{ padding: '2rem 2rem 6rem', maxWidth: '1100px', margin: '0 auto' }}>
      <ScrollReveal>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
          <span className="font-mono" style={{ color: 'var(--accent-mint)', fontSize: '0.8rem', letterSpacing: '0.12em' }}>02</span>
          <span style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
          <h2 className="font-mono" style={{ fontSize: 'clamp(1.2rem, 3vw, 1.6rem)', fontWeight: 700, color: 'var(--text-primary)' }}>
            tech_stack
          </h2>
        </div>
      </ScrollReveal>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {groups.map((group, i) => (
          <ScrollReveal key={group.title} delay={i * 0.08}>
            <div className="tech-row">
              <span className="font-mono tech-row-title" style={{ fontSize: '0.75rem', color: 'var(--accent-violet)', letterSpacing: '0.08em' }}>
                {group.title}
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {group.items.map(tech => (
                  <span
                    key={tech.label}
                    className="font-mono tech-chip"
                    style={{ '--chip-color': tech.color } as React.CSSProperties}
                  >
                    {tech.icon}
                    {tech.label}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <style>{`
        .tech-row { display: grid; grid-template-columns: 7rem 1fr; gap: 1rem; align-items: baseline; }
        .tech-chip {
          display: inline-flex; align-items: center; gap: 0.45rem;
          padding: 0.4rem 0.7rem;
          font-size: 0.75rem; letter-spacing: 0.04em; color: var(--text-muted);
          background: var(--bg-card); border: 1px solid var(--border); border-radius: 6px;
          cursor: default; transition: color 0.2s, border-color 0.2s;
        }
        @media (hover: hover) {
          .tech-chip:hover { color: var(--chip-color); border-color: var(--chip-color); }
        }
        @media (max-width: 768px) {
          .tech-row { grid-template-columns: 1fr; gap: 0.6rem; }
        }
      `}</style>
    </section>
  );
}
