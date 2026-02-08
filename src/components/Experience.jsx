import SectionHeader from './SectionHeader'
import useReveal from '../hooks/useReveal'
import { EXPERIENCE } from '../data'

export default function Experience() {
  const timelineRef = useReveal(120)

  return (
    <section 
      id="experience" 
      className="relative py-24 lg:py-32"
      style={{
        background: '#0a0a0a',
        overflow: 'hidden'
      }}
    >
      {/* Background decoration */}
      <div 
        className="absolute top-1/3 right-0 w-96 h-96 opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(232,255,71,0.15) 0%, transparent 70%)',
          filter: 'blur(100px)'
        }}
      />

      <div className="max-w-5xl mx-auto px-8">
        <SectionHeader 
          label="Career" 
          title="Work" 
          accentWord="Experience" 
        />

        <div ref={timelineRef} className="reveal relative">
          {/* Timeline line */}
          <div 
            className="absolute left-8 top-0 bottom-0 w-0.5"
            style={{
              background: 'linear-gradient(180deg, #e8ff47 0%, #47e8ff 100%)',
              opacity: 0.3
            }}
          />

          {EXPERIENCE.map((exp, index) => (
            <div 
              key={index}
              className="relative pl-20 pb-16 last:pb-0"
              style={{
                opacity: 0,
                animation: `fadeInLeft 0.6s ease forwards ${index * 0.2}s`
              }}
            >
              {/* Timeline dot */}
              <div 
                className="absolute left-0 top-2 flex items-center justify-center"
                style={{
                  width: '64px',
                  height: '64px'
                }}
              >
                <div 
                  className="relative"
                  style={{
                    width: '20px',
                    height: '20px'
                  }}
                >
                  {/* Outer pulsing ring */}
                  <div 
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: 'rgba(232,255,71,0.2)',
                      animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite'
                    }}
                  />
                  
                  {/* Middle ring */}
                  <div 
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: 'rgba(232,255,71,0.3)',
                      border: '2px solid #e8ff47'
                    }}
                  />
                  
                  {/* Inner dot */}
                  <div 
                    className="absolute inset-0 m-1.5 rounded-full"
                    style={{
                      background: index === 0 
                        ? 'linear-gradient(135deg, #e8ff47 0%, #47e8ff 100%)'
                        : '#e8ff47',
                      boxShadow: '0 0 20px rgba(232,255,71,0.6)'
                    }}
                  />
                </div>
              </div>

              {/* Content card */}
              <div 
                className="group relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(26,26,26,0.6) 0%, rgba(15,15,15,0.6) 100%)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  borderRadius: '24px',
                  padding: '2rem',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  backdropFilter: 'blur(10px)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(10px)'
                  e.currentTarget.style.borderColor = '#e8ff47'
                  e.currentTarget.style.boxShadow = '0 20px 50px rgba(232,255,71,0.15)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(0)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {/* Status badge for current role */}
                {index === 0 && (
                  <div 
                    className="inline-flex items-center gap-2 mb-4"
                    style={{
                      padding: '6px 14px',
                      background: 'rgba(232,255,71,0.15)',
                      border: '1px solid rgba(232,255,71,0.3)',
                      borderRadius: '50px',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: '#e8ff47',
                      letterSpacing: '1px',
                      textTransform: 'uppercase'
                    }}
                  >
                    <span 
                      style={{
                        width: '6px',
                        height: '6px',
                        background: '#e8ff47',
                        borderRadius: '50%',
                        animation: 'pulse 2s ease-in-out infinite'
                      }}
                    />
                    Current
                  </div>
                )}

                {/* Header */}
                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                  <div>
                    <h3
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        fontSize: '1.5rem',
                        fontWeight: 700,
                        color: '#ffffff',
                        marginBottom: '0.5rem'
                      }}
                    >
                      {exp.role}
                    </h3>
                    <p 
                      style={{
                        fontSize: '1.125rem',
                        color: '#b0b0b0',
                        fontWeight: 500
                      }}
                    >
                      {exp.company}
                    </p>
                  </div>
                  
                  <div 
                    style={{
                      padding: '8px 16px',
                      background: 'rgba(71,232,255,0.1)',
                      border: '1px solid rgba(71,232,255,0.3)',
                      borderRadius: '50px',
                      fontSize: '0.875rem',
                      color: '#47e8ff',
                      fontWeight: 600,
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {exp.date}
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="space-y-3">
                  {exp.bullets.map((bullet, i) => (
                    <div 
                      key={i}
                      className="flex items-start gap-3"
                      style={{
                        opacity: 0,
                        animation: `fadeInUp 0.5s ease forwards ${0.3 + i * 0.1}s`
                      }}
                    >
                      <div 
                        style={{
                          marginTop: '8px',
                          width: '6px',
                          height: '6px',
                          background: 'linear-gradient(135deg, #e8ff47 0%, #47e8ff 100%)',
                          borderRadius: '50%',
                          flexShrink: 0
                        }}
                      />
                      <p 
                        style={{
                          fontSize: '1rem',
                          lineHeight: '1.7',
                          color: '#d0d0d0'
                        }}
                      >
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Hover gradient overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at top right, rgba(232,255,71,0.05) 0%, transparent 70%)',
                    transition: 'opacity 0.4s ease',
                    borderRadius: '24px'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.1);
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

        @media (max-width: 768px) {
          #experience .relative.pl-20 {
            padding-left: 4rem;
          }
        }
      `}</style>
    </section>
  )
}
