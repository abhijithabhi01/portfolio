import SectionHeader from './SectionHeader'
import useReveal from '../hooks/useReveal'

const STATS = [
  { number: '2+', label: 'Years Experience', icon: '⚡' },
  { number: '4', label: 'Major Projects', icon: '🚀' },
  { number: '2', label: 'Internships', icon: '💼' },
  { number: '2', label: 'Certifications', icon: '🏆' },
]

export default function About() {
  const textRef = useReveal(100)
  const statsRef = useReveal(200)

  return (
    <section 
      id="about" 
      className="relative py-24 lg:py-32"
      style={{
        background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)',
        overflow: 'hidden'
      }}
    >
      {/* Decorative elements */}
      <div 
        className="absolute top-0 right-0 w-96 h-96 opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(232,255,71,0.2) 0%, transparent 70%)',
          filter: 'blur(80px)',
          animation: 'pulse 4s ease-in-out infinite'
        }}
      />

      <div className="max-w-7xl mx-auto px-8">
        <SectionHeader 
          label="About Me" 
          title="Crafting Digital" 
          accentWord="Experiences" 
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Bio Section */}
          <div ref={textRef} className="reveal space-y-6">
            <div 
              className="relative pl-6"
              style={{
                borderLeft: '3px solid #e8ff47'
              }}
            >
              <p 
                style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.8',
                  color: '#d0d0d0',
                  marginBottom: '1.5rem'
                }}
              >
                MCA student with hands-on experience in{' '}
                <span 
                  style={{ 
                    color: '#e8ff47', 
                    fontWeight: 600,
                    background: 'rgba(232,255,71,0.1)',
                    padding: '2px 8px',
                    borderRadius: '4px'
                  }}
                >
                  MERN-based full-stack development
                </span>
                {' '}and{' '}
                <span 
                  style={{ 
                    color: '#47e8ff', 
                    fontWeight: 600,
                    background: 'rgba(71,232,255,0.1)',
                    padding: '2px 8px',
                    borderRadius: '4px'
                  }}
                >
                  AI-driven applications
                </span>
                . Currently deepening expertise in intelligent automation and agentic workflows.
              </p>

              <p 
                style={{
                  fontSize: '1.125rem',
                  lineHeight: '1.8',
                  color: '#d0d0d0'
                }}
              >
                With a background in end-to-end application development and a passion for solving real-world problems through technology, I bridge the gap between cutting-edge AI and practical software engineering.
              </p>
            </div>

            {/* Current Status Card */}
            <div
              className="group relative overflow-hidden"
              style={{
                padding: '2rem',
                background: 'linear-gradient(135deg, rgba(232,255,71,0.05) 0%, rgba(71,232,255,0.05) 100%)',
                border: '1px solid rgba(232,255,71,0.2)',
                borderRadius: '20px',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                backdropFilter: 'blur(10px)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateX(10px)'
                e.currentTarget.style.borderColor = '#e8ff47'
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(232,255,71,0.2)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateX(0)'
                e.currentTarget.style.borderColor = 'rgba(232,255,71,0.2)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div 
                className="absolute top-0 right-0 w-32 h-32 opacity-20"
                style={{
                  background: 'radial-gradient(circle, #e8ff47 0%, transparent 70%)',
                  filter: 'blur(40px)'
                }}
              />
              
              <div className="relative z-10">
                <div 
                  className="inline-flex items-center gap-2 mb-3"
                  style={{
                    padding: '6px 14px',
                    background: 'rgba(232,255,71,0.15)',
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
                      width: '8px',
                      height: '8px',
                      background: '#e8ff47',
                      borderRadius: '50%',
                      animation: 'pulse 2s ease-in-out infinite'
                    }}
                  />
                  Currently
                </div>
                
                <p 
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: '#ffffff',
                    lineHeight: '1.6'
                  }}
                >
                  Interning at{' '}
                  <span 
                    style={{ 
                      color: '#e8ff47',
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 700
                    }}
                  >
                    10xDS
                  </span>
                  {' '}— building AI agents and workflow-based systems
                </p>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div ref={statsRef} className="reveal">
            <div 
              className="grid grid-cols-2 gap-6"
            >
              {STATS.map(({ number, label, icon }, index) => (
                <div
                  key={label}
                  className="group relative overflow-hidden"
                  style={{
                    padding: '2rem',
                    background: 'linear-gradient(135deg, rgba(26,26,26,0.8) 0%, rgba(15,15,15,0.8) 100%)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    borderRadius: '24px',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'default',
                    animation: `fadeInUp 0.6s ease forwards ${index * 0.1}s`,
                    opacity: 0
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)'
                    e.currentTarget.style.borderColor = '#e8ff47'
                    e.currentTarget.style.boxShadow = '0 25px 50px rgba(232,255,71,0.15)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  {/* Icon */}
                  <div 
                    style={{
                      fontSize: '2.5rem',
                      marginBottom: '1rem',
                      opacity: 0.9,
                      transition: 'transform 0.3s ease'
                    }}
                    className="group-hover:scale-110"
                  >
                    {icon}
                  </div>

                  {/* Number */}
                  <div
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: '3.5rem',
                      fontWeight: 800,
                      background: 'linear-gradient(135deg, #e8ff47 0%, #47e8ff 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      lineHeight: 1,
                      marginBottom: '0.75rem'
                    }}
                  >
                    {number}
                  </div>

                  {/* Label */}
                  <div
                    style={{
                      fontSize: '0.875rem',
                      color: '#b0b0b0',
                      letterSpacing: '0.5px',
                      textTransform: 'uppercase',
                      fontWeight: 500
                    }}
                  >
                    {label}
                  </div>

                  {/* Hover gradient effect */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                    style={{
                      background: 'radial-gradient(circle at center, rgba(232,255,71,0.05) 0%, transparent 70%)',
                      transition: 'opacity 0.4s ease'
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
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

        @media (max-width: 1024px) {
          #about .grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
