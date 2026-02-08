import SectionHeader from './SectionHeader'
import useReveal from '../hooks/useReveal'
import { CERTIFICATIONS, EDUCATION } from '../data'

/* ─── Certifications ─── */
export function Certifications() {
  const listRef = useReveal(100)

  return (
    <section 
      id="certifications" 
      className="relative py-24 lg:py-32"
      style={{
        background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%)',
        overflow: 'hidden'
      }}
    >
      <div className="max-w-5xl mx-auto px-8">
        <SectionHeader 
          label="Credentials" 
          title="Certifications" 
        />

        <div ref={listRef} className="reveal space-y-6">
          {CERTIFICATIONS.map((cert, index) => (
            <div
              key={index}
              className="group relative overflow-hidden"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '2rem',
                padding: '2rem',
                background: 'linear-gradient(135deg, rgba(26,26,26,0.6) 0%, rgba(15,15,15,0.6) 100%)',
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: '24px',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                backdropFilter: 'blur(10px)',
                opacity: 0,
                animation: `fadeInUp 0.6s ease forwards ${index * 0.15}s`
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
              {/* Icon */}
              <div 
                style={{
                  width: '80px',
                  height: '80px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'linear-gradient(135deg, rgba(232,255,71,0.15) 0%, rgba(71,232,255,0.15) 100%)',
                  border: '2px solid rgba(232,255,71,0.3)',
                  borderRadius: '20px',
                  fontSize: '2.5rem',
                  flexShrink: 0,
                  transition: 'transform 0.3s ease'
                }}
                className="group-hover:scale-110"
              >
                {cert.icon}
              </div>

              <div className="flex-1">
                <h3 
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '0.5rem',
                    fontFamily: "'Syne', sans-serif"
                  }}
                >
                  {cert.name}
                </h3>
                <p 
                  style={{
                    fontSize: '1rem',
                    color: '#b0b0b0'
                  }}
                >
                  {cert.org}
                </p>
              </div>

              {/* Hover effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at center, rgba(232,255,71,0.05) 0%, transparent 70%)',
                  transition: 'opacity 0.4s ease',
                  borderRadius: '24px'
                }}
              />
            </div>
          ))}
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
      `}</style>
    </section>
  )
}

/* ─── Education ─── */
export function Education() {
  const cardsRef = useReveal(100)

  return (
    <section 
      id="education" 
      className="relative py-24"
      style={{
        background: '#0a0a0a',
        overflow: 'hidden'
      }}
    >
      {/* Background decoration */}
      <div 
        className="absolute bottom-0 left-0 w-96 h-96 opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(71,232,255,0.15) 0%, transparent 70%)',
          filter: 'blur(100px)'
        }}
      />

      <div className="max-w-5xl mx-auto px-8">
        <SectionHeader 
          label="Education" 
          title="Academic" 
          accentWord="Journey" 
        />

        <div ref={cardsRef} className="reveal space-y-6">
          {EDUCATION.map((edu, index) => (
            <div
              key={index}
              className="group relative overflow-hidden"
              style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '2rem',
                padding: '2rem',
                background: 'linear-gradient(135deg, rgba(26,26,26,0.6) 0%, rgba(15,15,15,0.6) 100%)',
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: '24px',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                backdropFilter: 'blur(10px)',
                opacity: 0,
                animation: `fadeInUp 0.6s ease forwards ${index * 0.2}s`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateX(10px)'
                e.currentTarget.style.borderColor = '#47e8ff'
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(71,232,255,0.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateX(0)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Icon */}
              <div 
                style={{
                  width: '80px',
                  height: '80px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'linear-gradient(135deg, rgba(71,232,255,0.15) 0%, rgba(232,255,71,0.15) 100%)',
                  border: '2px solid rgba(71,232,255,0.3)',
                  borderRadius: '20px',
                  fontSize: '2.5rem',
                  flexShrink: 0,
                  transition: 'transform 0.3s ease'
                }}
                className="group-hover:scale-110"
              >
                {edu.icon}
              </div>

              <div style={{ flex: '1 1 250px', minWidth: '200px' }}>
                <h3 
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '0.5rem',
                    fontFamily: "'Syne', sans-serif"
                  }}
                >
                  {edu.degree}
                </h3>
                <p 
                  style={{
                    fontSize: '1rem',
                    color: '#b0b0b0'
                  }}
                >
                  {edu.uni}
                </p>
              </div>

              {/* Status badge */}
              <div
                style={{
                  padding: '10px 20px',
                  background: edu.status === 'Pursuing' 
                    ? 'rgba(232,255,71,0.15)' 
                    : 'rgba(76,175,80,0.15)',
                  border: `1px solid ${edu.status === 'Pursuing' ? 'rgba(232,255,71,0.3)' : 'rgba(76,175,80,0.3)'}`,
                  borderRadius: '50px',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: edu.status === 'Pursuing' ? '#e8ff47' : '#66bb6a',
                  letterSpacing: '0.5px',
                  textTransform: 'uppercase',
                  flexShrink: 0,
                  whiteSpace: 'nowrap'
                }}
              >
                {edu.status}
              </div>

              {/* Hover effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at center, rgba(71,232,255,0.05) 0%, transparent 70%)',
                  transition: 'opacity 0.4s ease',
                  borderRadius: '24px'
                }}
              />
            </div>
          ))}
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

        @media (max-width: 768px) {
          #education > div > div > div {
            flex-direction: column;
            align-items: flex-start !important;
            gap: 1.5rem !important;
          }
          
          #education {
            padding-top: 4rem !important;
            padding-bottom: 4rem !important;
          }
        }
      `}</style>
    </section>
  )
}

/* ─── Contact ─── */
export function Contact() {
  const ref = useReveal()
  const subRef = useReveal(80)
  const linksRef = useReveal(160)

  return (
    <section 
      id="contact" 
      className="relative py-24 lg:py-32"
      style={{
        background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%)',
        overflow: 'hidden'
      }}
    >
      {/* Decorative elements */}
      <div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(232,255,71,0.2) 0%, transparent 70%)',
          filter: 'blur(100px)'
        }}
      />

      <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
        <SectionHeader 
          label="Get in Touch" 
          title="Let's" 
          accentWord="Connect" 
        />

        <p 
          ref={subRef} 
          className="reveal mx-auto mb-12"
          style={{
            fontSize: '1.25rem',
            lineHeight: '1.8',
            color: '#b0b0b0',
            maxWidth: '600px'
          }}
        >
          Open to exciting opportunities, collaborations, and conversations. 
          <br />
          <span style={{ color: '#e8ff47', fontWeight: 600 }}>
            Let's build something amazing together!
          </span>
        </p>

        <div 
          ref={linksRef} 
          className="reveal flex flex-wrap justify-center gap-6"
        >
          {[
            { icon: '✉', label: 'Email', href: 'mailto:iamabhijith01@gmail.com?subject=Hello%20Abhijith&body=Hi%20there,', gradient: 'linear-gradient(135deg, #e8ff47 0%, #47e8ff 100%)' },
            { icon: '⌂', label: 'GitHub', href: 'https://github.com/abhijithabhi01', gradient: 'linear-gradient(135deg, #47e8ff 0%, #e8ff47 100%)' },
            { icon: 'in', label: 'LinkedIn', href: 'https://www.linkedin.com/in/abhijith-s-5138a724b/', gradient: 'linear-gradient(135deg, #e8ff47 0%, #47e8ff 100%)' },
          ].map(({ icon, label, href, gradient }, index) => (
            <a
              key={label}
              href={href}
              className="group relative overflow-hidden"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1.25rem 2.5rem',
                background: 'rgba(26,26,26,0.6)',
                border: '2px solid rgba(255,255,255,0.1)',
                borderRadius: '100px',
                fontSize: '1.125rem',
                fontWeight: 600,
                color: '#ffffff',
                textDecoration: 'none',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                backdropFilter: 'blur(10px)',
                opacity: 0,
                animation: `fadeInUp 0.6s ease forwards ${index * 0.15}s`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)'
                e.currentTarget.style.borderColor = '#e8ff47'
                e.currentTarget.style.background = 'rgba(232,255,71,0.1)'
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(232,255,71,0.2)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                e.currentTarget.style.background = 'rgba(26,26,26,0.6)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <span style={{ fontSize: '1.5rem' }}>{icon}</span>
              {label}
            </a>
          ))}
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
      `}</style>
    </section>
  )
}

/* ─── Footer ─── */
export function Footer() {
  return (
    <footer 
      className="relative py-12"
      style={{
        background: '#0a0a0a',
        borderTop: '1px solid rgba(255,255,255,0.05)'
      }}
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo/Brand */}
          <div>
            <a 
              href="#"
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: '1.5rem',
                fontWeight: 800,
                letterSpacing: '2px',
                background: 'linear-gradient(135deg, #e8ff47 0%, #47e8ff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textDecoration: 'none'
              }}
            >
              AS
            </a>
          </div>

          {/* Copyright */}
          <div 
            style={{
              fontSize: '0.938rem',
              color: '#808080',
              letterSpacing: '0.3px'
            }}
          >
            © 2026 Abhijith S — Built with{' '}
            <span 
              style={{
                background: 'linear-gradient(135deg, #e8ff47 0%, #47e8ff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: 600
              }}
            >
              passion & precision
            </span>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {['✉', '⌂', 'in'].map((icon, index) => (
              <a
                key={index}
                href="#"
                style={{
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: '#b0b0b0',
                  fontSize: '1.125rem',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(232,255,71,0.1)'
                  e.currentTarget.style.borderColor = '#e8ff47'
                  e.currentTarget.style.color = '#e8ff47'
                  e.currentTarget.style.transform = 'translateY(-3px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                  e.currentTarget.style.color = '#b0b0b0'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
