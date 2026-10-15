import { Link, useParams, Navigate } from 'react-router-dom'
import { getProjectBySlug, PROJECTS } from '../data'

export default function ProjectDetailPage() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  if (!project) {
    return <Navigate to="/#projects" replace />
  }

  const others = PROJECTS.filter((p) => p.slug !== project.slug).slice(0, 3)

  return (
    <main style={{ background: '#0a0a0a', minHeight: '100vh', paddingTop: '7rem', paddingBottom: '4rem' }}>
      <div className="max-w-3xl mx-auto px-8">
        <Link
          to="/#projects"
          style={{
            color: '#808080',
            textDecoration: 'none',
            fontSize: '0.9rem',
            marginBottom: '2rem',
            display: 'inline-block',
          }}
        >
          ← All projects
        </Link>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center', marginBottom: '1rem' }}>
          <span style={{ fontFamily: "'Syne', sans-serif", fontSize: '2rem', fontWeight: 800, color: 'rgba(255,255,255,0.25)' }}>
            {project.number}
          </span>
          <span
            style={{
              padding: '6px 14px',
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '50px',
              fontSize: '0.75rem',
              color: '#b0b0b0',
              fontWeight: 600,
            }}
          >
            {project.tag}
          </span>
        </div>

        <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800, color: '#fff', marginBottom: '1.5rem', lineHeight: 1.2 }}>
          {project.title}
        </h1>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
          {project.techs.map((t) => (
            <span
              key={t}
              style={{
                padding: '6px 12px',
                background: 'rgba(232,255,71,0.1)',
                border: '1px solid rgba(232,255,71,0.25)',
                borderRadius: '8px',
                fontSize: '0.8rem',
                color: '#e8ff47',
                fontWeight: 500,
              }}
            >
              {t}
            </span>
          ))}
        </div>

        <div style={{ color: '#c0c0c0', fontSize: '1.1rem', lineHeight: 1.85, whiteSpace: 'pre-line', marginBottom: '2.5rem' }}>
          {project.longDescription}
        </div>

        {project.features?.length > 0 && (
          <>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '1.35rem', fontWeight: 700, color: '#fff', marginBottom: '1rem' }}>
              Highlights
            </h2>
            <ul style={{ margin: '0 0 2.5rem', paddingLeft: '1.25rem', color: '#b0b0b0', lineHeight: 1.8 }}>
              {project.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </>
        )}

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '3rem' }}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '0.85rem 1.5rem',
                background: '#e8ff47',
                color: '#0a0a0a',
                fontWeight: 600,
                borderRadius: '100px',
                textDecoration: 'none',
              }}
            >
              View on GitHub →
            </a>
          )}
          {(project.githubExtra || []).map((extra) => (
            <a
              key={extra.url}
              href={extra.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '0.85rem 1.5rem',
                border: '1px solid rgba(255,255,255,0.2)',
                color: '#fff',
                fontWeight: 600,
                borderRadius: '100px',
                textDecoration: 'none',
              }}
            >
              {extra.label} repo
            </a>
          ))}
        </div>

        {others.length > 0 && (
          <>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '1rem' }}>
              More projects
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {others.map((p) => (
                <Link
                  key={p.slug}
                  to={`/projects/${p.slug}`}
                  style={{
                    padding: '1rem 1.25rem',
                    background: 'rgba(26,26,26,0.8)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    color: '#fff',
                    fontWeight: 500,
                  }}
                >
                  {p.number} · {p.title}
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  )
}
