import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' }
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [isDesktop, setIsDesktop] = useState(typeof window !== 'undefined' ? window.innerWidth >= 1024 : true)

  useEffect(() => {
    const onResize = () => {
      setIsDesktop(window.innerWidth >= 1024)
      if (window.innerWidth >= 1024) setMobileOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Reveal the name + navbar background exactly when the hero name
  // scrolls up past the navbar's own height (i.e. behind the hamburger/links row)
  useEffect(() => {
    const NAV_HEIGHT = 80 // approx height of the pill row, incl. its padding
    const heroName = document.getElementById('hero-name')
    if (!heroName) return

    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { rootMargin: `-${NAV_HEIGHT}px 0px 0px 0px`, threshold: 0 }
    )
    observer.observe(heroName)
    return () => observer.disconnect()
  }, [])

  // Track which section is active using IntersectionObserver instead of a
  // scroll listener that reads getBoundingClientRect() — the old approach
  // forced a synchronous layout recalculation on every scroll frame, which
  // shows up as "Forced reflow" / long main-thread tasks in Lighthouse.
  useEffect(() => {
    const sections = NAV_LINKS
      .map(link => document.getElementById(link.href.substring(1)))
      .filter(Boolean)
    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry closest to the "100px from top" activation line
        // among those currently intersecting, matching the old behavior.
        const visible = entries.filter(e => e.isIntersecting)
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id)
        }
      },
      { rootMargin: '-100px 0px -70% 0px', threshold: 0 }
    )
    sections.forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500"
        style={{ padding: scrolled ? '1rem 0' : '1.5rem 0' }}
      >
        <div
          style={{
            maxWidth: '80rem',
            margin: '0 auto',
            padding: '1rem 2rem',
            background: scrolled ? 'rgba(10, 10, 10, 0.8)' : 'transparent',
            backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
            borderRadius: scrolled ? '100px' : '0',
            border: scrolled ? '1px solid rgba(255,255,255,0.1)' : 'none',
            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: scrolled ? '0 8px 32px rgba(0,0,0,0.3)' : 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: scrolled ? 'space-between' : (isDesktop ? 'center' : 'flex-end'),
          }}
        >
          {/* Name — reveals with a per-letter blur/slide-in once the hero
              name has scrolled up past the navbar height */}
          <span
            style={{
              display: 'inline-flex',
              fontFamily: "'Syne', sans-serif",
              fontSize: '1.05rem',
              fontWeight: 700,
              color: '#ffffff',
              whiteSpace: 'nowrap',
              letterSpacing: '0.3px',
              maxWidth: scrolled ? '220px' : '0px',
              overflow: 'hidden',
              pointerEvents: 'none',
              transition: 'max-width 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            {/* key remounts the letters so the stagger animation replays each time it appears */}
            <span key={scrolled ? 'in' : 'out'} style={{ display: 'inline-flex' }}>
              {'Abhijith Sreekumar'.split('').map((char, i) => (
                <span
                  key={i}
                  style={{
                    display: 'inline-block',
                    whiteSpace: 'pre',
                    opacity: scrolled ? 1 : 0,
                    filter: scrolled ? 'blur(0px)' : 'blur(6px)',
                    transform: scrolled ? 'translateY(0)' : 'translateY(-10px)',
                    transition: `opacity 0.35s ease ${i * 0.02}s, filter 0.35s ease ${i * 0.02}s, transform 0.35s cubic-bezier(0.4,0,0.2,1) ${i * 0.02}s`,
                  }}
                >
                  {char}
                </span>
              ))}
            </span>
          </span>

          {/* Desktop Navigation — centered */}
          {isDesktop && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
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
                      padding: '0.5rem 0',
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
                        borderRadius: '2px',
                      }}
                      className="group-hover:w-full"
                    />
                  </a>
                )
              })}
            </div>
          )}

          {/* Mobile Hamburger */}
          {!isDesktop && (
            <button
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
                  transition: 'all 0.3s ease',
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
                <span style={{ width: '20px', height: '2px', background: mobileOpen ? '#e8ff47' : '#ffffff', borderRadius: '2px', transform: mobileOpen ? 'rotate(45deg) translateY(7px)' : 'none', transition: 'all 0.3s ease' }} />
                <span style={{ width: '20px', height: '2px', background: mobileOpen ? '#e8ff47' : '#ffffff', borderRadius: '2px', opacity: mobileOpen ? 0 : 1, transition: 'all 0.3s ease' }} />
                <span style={{ width: '20px', height: '2px', background: mobileOpen ? '#e8ff47' : '#ffffff', borderRadius: '2px', transform: mobileOpen ? 'rotate(-45deg) translateY(-7px)' : 'none', transition: 'all 0.3s ease' }} />
              </button>
          )}
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {!isDesktop && mobileOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99,
            background: 'rgba(10, 10, 10, 0.98)',
            backdropFilter: 'blur(20px)',
            animation: 'fadeIn 0.3s ease',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2rem',
            paddingTop: '80px',
          }}
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
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#e8ff47' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#ffffff' }}
            >
              {label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .group:hover .group-hover\\:w-full {
          width: 100%;
        }
      `}</style>
    </>
  )
}