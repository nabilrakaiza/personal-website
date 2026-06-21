export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '2rem',
      textAlign: 'center',
    }}>
      <p className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.06em' }}>
        <span style={{ color: 'var(--accent-mint)' }}>{''}</span>
        © 2026 Nabil Rakaiza Abror.
        <span style={{ color: 'var(--accent-mint)' }}>{''}</span>
      </p>
    </footer>
  );
}
