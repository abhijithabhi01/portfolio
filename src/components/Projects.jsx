import SectionHeader from './SectionHeader'
import useReveal from '../hooks/useReveal'
import { PROJECTS } from '../data'

function ProjectCard({ number, tag, title, desc, techs, index }) {
  const ref = useReveal()

  return (
    <div
      ref={ref}
      className="reveal group relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(26,26,26,0.6) 0%, rgba(15,15,15,0.6) 100%)',
        border: '1px solid rgba(255,255,255,0.05)',
        borderRadius: '28px',
        padding: '2.5rem',
        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'default',
        backdropFilter: 'blur(10px)',
        animation: `fadeInScale 0.6s ease forwards ${index * 0.1}s`,
        opacity: 0
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-12px)'
        e.currentTarget.style.borderColor = '#e8ff47'
        e.currentTarget.style.boxShadow = '0 30px 60px rgba(232,255,71,0.15)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Animated top bar */}
      <div 
        className="absolute top-0 left-0 right-0 h-1 origin-left"
        style={{
          background: 'linear-gradient(90deg, #e8ff47 0%, #47e8ff 100%)',
          transform: 'scaleX(0)',
          transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
        ref={(el) => {
          if (el) {
            el.parentElement.addEventListener('mouseenter', () => {
              el.style.transform = 'scaleX(1)'
            })
            el.parentElement.addEventListener('mouseleave', () => {
              el.style.transform = 'scaleX(0)'
            })
          }
        }}
      />

      {/* Floating number background */}
      <div 
        className="absolute -right-8 -top-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          fontSize: '10rem',
          fontFamily: "'Syne', sans-serif",
          fontWeight: 900,
          color: 'rgba(232,255,71,0.03)',
          lineHeight: 1,
          userSelect: 'none',
          pointerEvents: 'none'
        }}
      >
        {number}
      </div>

      {/* Tag badge */}
      <div className="flex items-center gap-3 mb-6">
        <span
          style={{
            display: 'inline-block',
            padding: '8px 18px',
            background: 'rgba(232,255,71,0.1)',
            border: '1px solid rgba(232,255,71,0.3)',
            borderRadius: '50px',
            fontSize: '0.75rem',
            color: '#e8ff47',
            fontWeight: 600,
            letterSpacing: '1px',
            textTransform: 'uppercase'
          }}
        >
          {tag}
        </span>
        <span 
          style={{
            fontSize: '1.5rem',
            color: 'rgba(232,255,71,0.3)',
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700
          }}
        >
          {number}
        </span>
      </div>

      {/* Title */}
      <h3
        className="mb-4 group-hover:text-accent transition-colors duration-300"
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: '1.75rem',
          fontWeight: 700,
          color: '#ffffff',
          lineHeight: 1.3
        }}
      >
        {title}
      </h3>

      {/* Description */}
      <p 
        style={{
          fontSize: '1rem',
          lineHeight: '1.7',
          color: '#b0b0b0',
          marginBottom: '2rem'
        }}
      >
        {desc}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2">
        {techs.map((tech, i) => (
          <span
            key={i}
            className="tech-chip"
            style={{
              padding: '8px 16px',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '10px',
              fontSize: '0.813rem',
              color: '#909090',
              transition: 'all 0.3s ease',
              fontWeight: 500
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(232,255,71,0.1)'
              e.currentTarget.style.borderColor = '#e8ff47'
              e.currentTarget.style.color = '#e8ff47'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
              e.currentTarget.style.color = '#909090'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Hover glow effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 0%, rgba(232,255,71,0.08) 0%, transparent 50%)',
          transition: 'opacity 0.5s ease',
          borderRadius: '28px'
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
      style={{
        background: '#0a0a0a',
        overflow: 'hidden'
      }}
    >
      {/* Decorative background elements */}
      <div 
        className="absolute top-1/4 left-0 w-96 h-96 opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(71,232,255,0.15) 0%, transparent 70%)',
          filter: 'blur(100px)'
        }}
      />
      <div 
        className="absolute bottom-1/4 right-0 w-96 h-96 opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(232,255,71,0.15) 0%, transparent 70%)',
          filter: 'blur(100px)'
        }}
      />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <SectionHeader 
          label="Portfolio" 
          title="Featured" 
          accentWord="Projects" 
        />

        <div 
          className="grid gap-8"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))'
          }}
        >
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
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

        @media (max-width: 1024px) {
          #projects .grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
