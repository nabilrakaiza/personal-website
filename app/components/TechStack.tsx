'use client';

import ScrollReveal from './ScrollReveal';
import { 
  SiPython, SiR, SiPostgresql, SiJavascript, SiTypescript, SiCplusplus,
  SiScikitlearn, SiPytorch, SiTensorflow, SiPandas, SiNumpy, SiLangchain, SiGoogle, SiOpenai,
  SiReact, SiNodedotjs, SiExpress, SiNextdotjs, SiFlask, SiTailwindcss, SiGit,
  SiFigma, SiGithub, SiSupabase, SiQlik
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const stack = [
  // --- Programming ---
  { icon: <SiPython size={28} />, label: 'Python', color: '#3776AB' },
  { icon: <SiR size={28} />, label: 'R', color: '#276BBE' },
  { icon: <SiPostgresql size={28} />, label: 'PostgreSQL', color: '#336791' },
  { icon: <FaJava size={28} />, label: 'Java', color: '#007396' },
  { icon: <SiJavascript size={28} />, label: 'JavaScript', color: '#F7DF1E' },
  { icon: <SiTypescript size={28} />, label: 'TypeScript', color: '#3178C6' },
  { icon: <SiCplusplus size={28} />, label: 'C++', color: '#00599C' },

  // --- ML & Data ---
  { icon: <SiScikitlearn size={28} />, label: 'Scikit-learn', color: '#F7931E' },
  { icon: <SiPytorch size={28} />, label: 'PyTorch', color: '#EE4C2C' },
  { icon: <SiTensorflow size={28} />, label: 'TensorFlow', color: '#FF6F00' },
  { icon: <SiPandas size={28} />, label: 'Pandas', color: '#150458' },
  { icon: <SiNumpy size={28} />, label: 'NumPy', color: '#013243' },
  { icon: <SiLangchain size={28} />, label: 'LangChain', color: '#1C3C3A' },
  { icon: <SiLangchain size={28} />, label: 'LangGraph', color: '#1C3C3A' }, // Uses LangChain branding
  { icon: <SiGoogle size={28} />, label: 'Gemini', color: '#1A73E8' },
  { icon: <SiOpenai size={28} />, label: 'OpenAI', color: '#412991' },

  // --- Frameworks ---
  { icon: <SiReact size={28} />, label: 'React Native', color: '#61DAFB' },
  { icon: <SiReact size={28} />, label: 'React', color: '#61DAFB' },
  { icon: <SiNodedotjs size={28} />, label: 'Node.js', color: '#68A063' },
  { icon: <SiExpress size={28} />, label: 'Express', color: '#000000' },
  { icon: <SiNextdotjs size={28} />, label: 'Next.js', color: '#E2E8F0' },
  { icon: <SiFlask size={28} />, label: 'Flask', color: '#000000' },

  // --- Other Tools & Infrastructure ---
  { icon: <SiTailwindcss size={28} />, label: 'Tailwind', color: '#38BDF8' },
  { icon: <SiGit size={28} />, label: 'Git', color: '#F05032' },
  { icon: <SiFigma size={28} />, label: 'Figma', color: '#F24E1E' },
  { icon: <SiGithub size={28} />, label: 'GitHub', color: '#181717' },
  { icon: <SiSupabase size={28} />, label: 'Supabase', color: '#3ECF8E' },
  { icon: <SiQlik size={28} />, label: 'Qlik', color: '#009845' }
];

export default function TechStack() {
  return (
    <section style={{ padding: '2rem 2rem 6rem', maxWidth: '1100px', margin: '0 auto' }}>
      <ScrollReveal>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
          <span className="font-mono" style={{ color: 'var(--accent-mint)', fontSize: '0.8rem', letterSpacing: '0.12em' }}>02</span>
          <span style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
          <h2 className="font-mono" style={{ fontSize: 'clamp(1.2rem, 3vw, 1.6rem)', fontWeight: 700, color: 'var(--text-primary)' }}>
            tech_stack
          </h2>
        </div>
      </ScrollReveal>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
        gap: '1rem',
      }}>
        {stack.map((tech, i) => (
          <ScrollReveal key={tech.label} delay={i * 0.04}>
            <div
              style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.6rem',
                padding: '1.25rem 1rem',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                cursor: 'default',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = tech.color;
                el.style.transform = 'translateY(-4px)';
                el.style.boxShadow = `0 8px 24px ${tech.color}22`;
                const icon = el.querySelector('.tech-icon') as HTMLElement;
                if (icon) icon.style.color = tech.color;
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'var(--border)';
                el.style.transform = 'translateY(0)';
                el.style.boxShadow = 'none';
                const icon = el.querySelector('.tech-icon') as HTMLElement;
                if (icon) icon.style.color = 'var(--text-muted)';
              }}
            >
              <span className="tech-icon" style={{ color: 'var(--text-muted)', transition: 'color 0.25s' }}>
                {tech.icon}
              </span>
              <span className="font-mono" style={{ fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.05em', textAlign: 'center' }}>
                {tech.label}
              </span>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
