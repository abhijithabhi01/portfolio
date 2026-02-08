import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  {label: 'Contact', href: '#contact' }
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Detect active section
      const sections = NAV_LINKS.map(link => link.href.substring(1))
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500"
        style={{
          padding: scrolled ? '1rem 0' : '1.5rem 0',
        }}
      >
        <div 
          className="max-w-7xl mx-auto px-8"
          style={{
            background: scrolled ? 'rgba(10, 10, 10, 0.8)' : 'transparent',
            backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
            borderRadius: scrolled ? '100px' : '0',
            border: scrolled ? '1px solid rgba(255,255,255,0.1)' : 'none',
            padding: '1rem 2rem',
            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: scrolled ? '0 8px 32px rgba(0,0,0,0.3)' : 'none'
          }}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              className="relative group hidden lg:block"
              style={{ textDecoration: 'none' }}
            >
              <div 
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: '1.5rem',
                  fontWeight: 800,
                  letterSpacing: '2px',
                  background: 'linear-gradient(135deg, #e8ff47 0%, #47e8ff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  position: 'relative',
                  transition: 'all 0.3s ease'
                }}
              >
                
                <div 
                  style={{
                    position: 'absolute',
                    bottom: '-4px',
                    left: 0,
                    width: '0%',
                    height: '2px',
                    background: '#e8ff47',
                    transition: 'width 0.3s ease'
                  }}
                  className="group-hover:w-full"
                />
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map(({ label, href }) => {
                const isActive = activeSection === href.substring(1)
                return (
                  <a
                    key={label}
                    href={href}
                    className="relative group"
                    style={{
                      fontSize: '0.95rem',
                      fontWeight: 500,
                      color: isActive ? '#e8ff47' : '#b0b0b0',
                      textDecoration: 'none',
                      letterSpacing: '0.5px',
                      transition: 'color 0.3s ease',
                      padding: '0.5rem 0'
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) e.currentTarget.style.color = '#ffffff'
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) e.currentTarget.style.color = '#b0b0b0'
                    }}
                  >
                    {label}
                    <span
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: isActive ? '100%' : '0%',
                        height: '2px',
                        background: 'linear-gradient(90deg, #e8ff47 0%, #47e8ff 100%)',
                        transition: 'width 0.3s ease',
                        borderRadius: '2px'
                      }}
                      className="group-hover:w-full"
                    />
                  </a>
                )
              })}
              
         
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden relative z-50"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              style={{
                width: '40px',
                height: '40px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '5px',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(232,255,71,0.1)'
                e.currentTarget.style.borderColor = '#e8ff47'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
              }}
            >
              <span 
                style={{
                  width: '20px',
                  height: '2px',
                  background: mobileOpen ? '#e8ff47' : '#ffffff',
                  borderRadius: '2px',
                  transform: mobileOpen ? 'rotate(45deg) translateY(7px)' : 'none',
                  transition: 'all 0.3s ease'
                }}
              />
              <span 
                style={{
                  width: '20px',
                  height: '2px',
                  background: mobileOpen ? '#e8ff47' : '#ffffff',
                  borderRadius: '2px',
                  opacity: mobileOpen ? 0 : 1,
                  transition: 'all 0.3s ease'
                }}
              />
              <span 
                style={{
                  width: '20px',
                  height: '2px',
                  background: mobileOpen ? '#e8ff47' : '#ffffff',
                  borderRadius: '2px',
                  transform: mobileOpen ? 'rotate(-45deg) translateY(-7px)' : 'none',
                  transition: 'all 0.3s ease'
                }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[99] md:hidden"
          style={{
            background: 'rgba(10, 10, 10, 0.98)',
            backdropFilter: 'blur(20px)',
            animation: 'fadeIn 0.3s ease'
          }}
        >
          <div 
            className="flex flex-col items-center justify-center h-full gap-8"
            style={{ paddingTop: '80px' }}
          >
            {NAV_LINKS.map(({ label, href }, index) => (
              <a
                key={label}
                href={href}
                onClick={() => setMobileOpen(false)}
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: '2.5rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  textDecoration: 'none',
                  opacity: 0,
                  animation: `slideUp 0.5s ease forwards ${index * 0.1}s`,
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#e8ff47'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#ffffff'
                }}
              >
                {label}
              </a>
            ))}

          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .group:hover .group-hover\\:w-full {
          width: 100%;
        }

        .group:hover .group-hover\\:opacity-100 {
          opacity: 1;
        }
      `}</style>
    </>
  )
}
