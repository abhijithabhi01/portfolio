import SectionHeader from './SectionHeader'
import useReveal from '../hooks/useReveal'
import { PROJECTS } from '../data'

// Gradient backgrounds per card — matches reference dark purple/blue vibe but in your black theme
const CARD_GRADIENTS = [
  'linear-gradient(135deg, #0f0f1a 0%, #1a0f2e 100%)',
  'linear-gradient(135deg, #0a1a0f 0%, #0f2e1a 100%)',
  'linear-gradient(135deg, #1a0a0f 0%, #2e0f1a 100%)',
  'linear-gradient(135deg, #0a0f1a 0%, #0f1a2e 100%)',
  'linear-gradient(135deg, #1a1a0a 0%, #2e2e0f 100%)',
  'linear-gradient(135deg, #0f1a1a 0%, #0f2e2e 100%)',
]

function ProjectCard({ number, tag, title, desc, techs, index }) {
  const ref = useReveal()

  return (
    <div
      ref={ref}
      className="reveal group"
      style={{
        background: CARD_GRADIENTS[index % CARD_GRADIENTS.length],
        border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: '24px',
        padding: '2rem',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'default',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '320px',
        animation: `fadeInScale 0.6s ease forwards ${index * 0.1}s`,
        opacity: 0,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px)'
        e.currentTarget.style.borderColor = 'rgba(232,255,71,0.3)'
        e.currentTarget.style.boxShadow = '0 24px 48px rgba(0,0,0,0.4)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Top row: number left, tag right */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '1.25rem',
      }}>
        {/* Large number */}
        <span style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: '3.5rem',
          fontWeight: 900,
          color: '#ffffff',
          lineHeight: 1,
          letterSpacing: '-2px',
        }}>
          {number}
        </span>

        {/* Tag badge */}
        <span style={{
          padding: '6px 14px',
          background: 'rgba(255,255,255,0.08)',
          border: '1px solid rgba(255,255,255,0.12)',
          borderRadius: '50px',
          fontSize: '0.75rem',
          color: '#b0b0b0',
          fontWeight: 600,
          letterSpacing: '0.5px',
          whiteSpace: 'nowrap',
        }}>
          {tag}
        </span>
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: 'clamp(1.4rem, 2.5vw, 1.75rem)',
        fontWeight: 700,
        color: '#ffffff',
        lineHeight: 1.2,
        marginBottom: '1.25rem',
      }}>
        {title}
      </h3>

      {/* Tech stack label + chips */}
      <div style={{ marginBottom: '1.5rem' }}>
        <p style={{
          fontSize: '0.8rem',
          color: '#808080',
          fontWeight: 600,
          letterSpacing: '0.5px',
          textTransform: 'uppercase',
          marginBottom: '0.6rem',
        }}>
          Techstack used
        </p>
        <p style={{
          fontSize: '0.95rem',
          color: '#c0c0c0',
          lineHeight: 1.6,
        }}>
          {techs.join(', ')}
        </p>
      </div>

      {/* Description — pushed to bottom */}
      <p style={{
        fontSize: '0.9rem',
        lineHeight: '1.65',
        color: '#808080',
        marginTop: 'auto',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        paddingTop: '1rem',
      }}>
        {desc.length > 120 ? desc.slice(0, 120) + '…' : desc}
      </p>

      {/* Subtle glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 20% 20%, rgba(232,255,71,0.04) 0%, transparent 60%)',
          transition: 'opacity 0.4s ease',
          borderRadius: '24px',
        }}
      />
    </div>
  )
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 lg:py-32"
      style={{ background: '#0a0a0a', overflow: 'hidden' }}
    >
      {/* Background glows */}
      <div style={{
        position: 'absolute', top: '25%', left: 0,
        width: '384px', height: '384px', opacity: 0.15,
        background: 'radial-gradient(circle, rgba(71,232,255,0.15) 0%, transparent 70%)',
        filter: 'blur(100px)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '25%', right: 0,
        width: '384px', height: '384px', opacity: 0.15,
        background: 'radial-gradient(circle, rgba(232,255,71,0.15) 0%, transparent 70%)',
        filter: 'blur(100px)', pointerEvents: 'none',
      }} />

      <div className="max-w-7xl mx-auto px-8 relative" style={{ zIndex: 10 }}>
        <SectionHeader
          label="Portfolio"
          title="Featured"
          accentWord="Projects"
        />

        {/* Responsive grid — 3 cols desktop, 2 tablet, 1 mobile */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem',
        }}
          className="projects-grid"
        >
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.97) translateY(16px); }
          to   { opacity: 1; transform: scale(1)    translateY(0); }
        }

        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1),
                      transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Tablet: 2 columns */
        @media (max-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        /* Mobile: 1 column */
        @media (max-width: 640px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }

        .group:hover .group-hover\\:opacity-100 {
          opacity: 1;
        }
      `}</style>
    </section>
  )
}
