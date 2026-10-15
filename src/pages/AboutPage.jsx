import { Link } from 'react-router-dom'
import { EDUCATION, EXPERIENCE } from '../data'

export default function AboutPage() {
  return (
    <main style={{ background: '#0a0a0a', minHeight: '100vh', paddingTop: '7rem', paddingBottom: '4rem' }}>
      <div className="max-w-3xl mx-auto px-8">
        <Link
          to="/#about"
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
          About
        </p>
        <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, color: '#fff', marginBottom: '2rem', lineHeight: 1.15 }}>
          The full story
        </h1>

        <div style={{ color: '#d0d0d0', fontSize: '1.125rem', lineHeight: 1.85, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <p>
            I am <strong style={{ color: '#fff' }}>Abhijith Sreekumar</strong>, a Full-Stack Developer and agentic AI engineer based in{' '}
            <strong style={{ color: '#fff' }}>Bengaluru, Karnataka</strong>. I build MERN-stack applications and intelligent automation systems that solve real operational problems — from IoT-connected dashboards to multi-step AI agents.
          </p>
          <p>
            My formal path runs through a <strong style={{ color: '#fff' }}>BCA</strong> at the University of Kerala and an{' '}
            <strong style={{ color: '#fff' }}>MCA</strong> from APJ Abdul Kalam Technological University. Along the way I focused on end-to-end product thinking: not only shipping features, but designing workflows that humans and models can share.
          </p>
          <p>
            At <strong style={{ color: '#e8ff47' }}>Luminar Technohub</strong> (R&amp;D Intern), I worked on MERN applications across the SDLC — UI, APIs, and deployment — with cross-functional teams. That grounded me in structured delivery and collaborative engineering.
          </p>
          <p>
            As an <strong style={{ color: '#e8ff47' }}>AI Intern at 10xDS</strong>, I designed and integrated agentic workflows: prompt architecture, LLM calls, and backend services on Google Cloud Vertex AI. The work was about reliable automation inside enterprise processes, not demos that only work once.
          </p>
          <p>
            Today, as a <strong style={{ color: '#e8ff47' }}>Full-Stack Developer at Susima Smaart Solutions</strong>, I build scalable MERN applications that talk to embedded and IoT systems — REST APIs, real-time monitoring, and control dashboards for hardware-backed products.
          </p>
          <p>
            Outside formal roles I ship agentic and full-stack projects: account research agents, health insight assistants, HR onboarding automation, blockchain credential verification, career guidance platforms, and marketplace-style service apps. I care about clear architecture, measurable outcomes, and code that other engineers can extend.
          </p>
          <p>
            I am open to collaborations, product-minded engineering roles, and conversations about agentic systems, MERN products, and applied AI in production.
          </p>
        </div>

        <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '1.5rem', fontWeight: 700, color: '#fff', marginTop: '3rem', marginBottom: '1.25rem' }}>
          Experience
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {EXPERIENCE.map((job) => (
            <div
              key={job.company + job.role}
              style={{
                padding: '1.25rem 1.5rem',
                background: 'rgba(26,26,26,0.8)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '16px',
              }}
            >
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <span style={{ color: '#fff', fontWeight: 600 }}>{job.role}</span>
                <span style={{ color: '#808080', fontSize: '0.9rem' }}>{job.date}</span>
              </div>
              <p style={{ color: '#e8ff47', fontSize: '0.95rem', marginBottom: '0.75rem' }}>{job.company}</p>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#b0b0b0', fontSize: '0.95rem', lineHeight: 1.6 }}>
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '1.5rem', fontWeight: 700, color: '#fff', marginTop: '3rem', marginBottom: '1.25rem' }}>
          Education
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {EDUCATION.map((edu) => (
            <div
              key={edu.degree}
              style={{
                padding: '1.25rem 1.5rem',
                background: 'rgba(26,26,26,0.8)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '16px',
                display: 'flex',
                gap: '1rem',
                alignItems: 'flex-start',
              }}
            >
              <span style={{ fontSize: '1.5rem' }}>{edu.icon}</span>
              <div>
                <p style={{ color: '#fff', fontWeight: 600, marginBottom: '0.25rem' }}>{edu.degree}</p>
                <p style={{ color: '#808080', fontSize: '0.95rem' }}>{edu.uni} · {edu.status}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '3rem', display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          <Link
            to="/faq"
            style={{
              padding: '0.85rem 1.75rem',
              background: '#e8ff47',
              color: '#0a0a0a',
              fontWeight: 600,
              borderRadius: '100px',
              textDecoration: 'none',
            }}
          >
            Read FAQ
          </Link>
          <Link
            to="/#contact"
            style={{
              padding: '0.85rem 1.75rem',
              border: '1px solid rgba(255,255,255,0.2)',
              color: '#fff',
              fontWeight: 600,
              borderRadius: '100px',
              textDecoration: 'none',
            }}
          >
            Get in touch
          </Link>
        </div>
      </div>
    </main>
  )
}
