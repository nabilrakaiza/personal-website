'use client';

import ScrollReveal from './ScrollReveal';

const experiences = [
  {
    role: 'Data Analyst and Automation Intern',
    company: 'Singlife',
    period: 'May - Aug 2026',
    location: 'Singapore',
    description: 'Built 10+ Qlik dashboards and Python automation scripts that eliminated 50+ hours of monthly manual effort, while leveraging Power Automate to further streamline reporting workflows.',
    tags: ['Qlik', 'Python', 'Power Automate'],
  },
  {
    role: 'Teaching Assistant (CS2030 - Object Oriented Programming)',
    company: 'NUS Computing',
    period: 'Jan 2026 - Present',
    location: 'Singapore',
    description: 'Mentored 20+ students weekly in Java OOP and functional programming while debugging codebases and guiding project milestones, achieving over 75% positive feedback for emphasizing clean architecture and modularity.',
    tags: ['Java', 'OOP', 'Teaching'],
  },
  {
    role: 'Senior Developer',
    company: 'PINUS (Perhimpunan Indonesia NUS)',
    period: 'Sep 2025 - May 2026',
    location: 'Singapore',
    description: 'Led a team of 2 junior developers in building the PINUS Forms website, utilizing Next.js and Tailwind CSS to deliver a responsive and efficient user experience.',
    tags: ['Javascript', 'TypeScript', 'MongoDB', 'Tailwind CSS'],
  },
  {
    role: 'Data Science Intern',
    company: 'Quantum Teknologi Nusantara',
    period: 'May - July 2025',
    location: 'Indonesia',
    description: 'Built and deployed three Python and LLM-driven AI systems—including a route optimizer and an ontology relationship engine—improving output consistency by ~20% through structured prompts and evaluation loops in collaboration with product stakeholders.',
    tags: ['Python', 'LangGraph', 'LangChain', 'GitHub Actions'],
  },
];

export default function Experience() {
  return (
    <section style={{ padding: '2rem 2rem 6rem', maxWidth: '1100px', margin: '0 auto' }}>
      <ScrollReveal>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
          <span className="font-mono" style={{ color: 'var(--accent-mint)', fontSize: '0.8rem', letterSpacing: '0.12em' }}>04</span>
          <span style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
          <h2 className="font-mono" style={{ fontSize: 'clamp(1.2rem, 3vw, 1.6rem)', fontWeight: 700, color: 'var(--text-primary)' }}>
            experience
          </h2>
        </div>
      </ScrollReveal>

      <div style={{ position: 'relative', paddingLeft: '2rem' }}>
        {/* Vertical timeline line */}
        <div style={{
          position: 'absolute', left: 0, top: '8px', bottom: '8px',
          width: '1px', background: 'linear-gradient(to bottom, var(--accent-mint), var(--accent-violet), transparent)',
        }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {experiences.map((exp, i) => (
            <ScrollReveal key={exp.company} delay={i * 0.1} direction="left">
              <div style={{ position: 'relative' }}>
                {/* Timeline dot */}
                <div style={{
                  position: 'absolute', left: '-2.45rem', top: '6px',
                  width: '10px', height: '10px', borderRadius: '50%',
                  background: i === 0 ? 'var(--accent-mint)' : 'var(--bg-primary)',
                  border: `2px solid ${i === 0 ? 'var(--accent-mint)' : 'var(--accent-violet)'}`,
                  boxShadow: i === 0 ? '0 0 10px var(--accent-mint)' : 'none',
                }} />

                <div
                  style={{
                    background: 'var(--bg-card)', border: '1px solid var(--border)',
                    borderRadius: '10px', padding: '1.5rem',
                    transition: 'border-color 0.2s',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(123,97,255,0.4)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <div>
                      <h3 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                        {exp.role}
                      </h3>
                      <span style={{ fontSize: '0.875rem', color: 'var(--accent-violet)', fontWeight: 500 }}>
                        {exp.company}
                      </span>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginLeft: '0.5rem' }}>
                        · {exp.location}
                      </span>
                    </div>
                    <span className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)', padding: '0.2rem 0.6rem', border: '1px solid var(--border)', borderRadius: '4px', alignSelf: 'flex-start', whiteSpace: 'nowrap' }}>
                      {exp.period}
                    </span>
                  </div>

                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1rem' }}>
                    {exp.description}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {exp.tags.map(tag => (
                      <span key={tag} className="font-mono" style={{
                        fontSize: '0.68rem', color: 'var(--accent-violet)',
                        border: '1px solid rgba(123,97,255,0.3)', borderRadius: '3px',
                        padding: '0.2rem 0.5rem', background: 'rgba(123,97,255,0.08)',
                        letterSpacing: '0.04em',
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
