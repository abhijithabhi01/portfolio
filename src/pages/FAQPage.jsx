import { Link } from 'react-router-dom'
import { FAQ_ITEMS } from '../data'

export default function FAQPage() {
  return (
    <main style={{ background: '#0a0a0a', minHeight: '100vh', paddingTop: '7rem', paddingBottom: '4rem' }}>
      <div className="max-w-3xl mx-auto px-8">
        <Link
          to="/"
          style={{
            color: '#808080',
            textDecoration: 'none',
            fontSize: '0.9rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '2rem',
          }}
        >
          ← Back to home
        </Link>

        <p style={{ color: '#e8ff47', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
          FAQ
        </p>
        <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, color: '#fff', marginBottom: '1rem', lineHeight: 1.15 }}>
          Frequently asked questions
        </h1>
        <p style={{ color: '#808080', fontSize: '1.05rem', marginBottom: '2.5rem', lineHeight: 1.6 }}>
          Clear answers about Abhijith Sreekumar — role, skills, projects, and how to connect. Written for humans and answer engines.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {FAQ_ITEMS.map((item, i) => (
            <details
              key={item.q}
              open={i === 0}
              style={{
                background: 'rgba(26,26,26,0.85)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '16px',
                padding: '1.25rem 1.5rem',
              }}
            >
              <summary
                style={{
                  cursor: 'pointer',
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: '1.05rem',
                  listStyle: 'none',
                  outline: 'none',
                }}
              >
                {item.q}
              </summary>
              <p style={{ color: '#b0b0b0', marginTop: '1rem', lineHeight: 1.75, fontSize: '1rem' }}>
                {item.a}
              </p>
            </details>
          ))}
        </div>

        <div style={{ marginTop: '3rem' }}>
          <Link
            to="/#contact"
            style={{
              padding: '0.85rem 1.75rem',
              background: '#e8ff47',
              color: '#0a0a0a',
              fontWeight: 600,
              borderRadius: '100px',
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            Still have a question? Contact me
          </Link>
        </div>
      </div>
    </main>
  )
}
