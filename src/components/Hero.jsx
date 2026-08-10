import { useState, useEffect } from 'react'
// Served from public/ with stable filenames (not hashed by Vite) so these
// URLs exactly match the <link rel="preload"> hints in index.html — that's
// what makes the browser treat the preload and the actual image request as
// the same resource, which is required for the LCP image to be discoverable
// in the initial document instead of only after React renders.
const dphome480 = '/dp_home_480.webp'
const dphome800 = '/dp_home_800.webp'
const dphomeFallback = '/dp_home_fallback.jpeg'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [shareCopied, setShareCopied] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleShare = async () => {
    const shareData = {
      title: 'Abhijith Sreekumar | Full-Stack Developer & AI Engineer',
      text: 'Check out Abhijith Sreekumar\'s portfolio — Full-Stack Developer & AI Engineer.',
      url: window.location.href,
    }
    try {
      if (navigator.share) {
        await navigator.share(shareData)
      } else {
        await navigator.clipboard.writeText(shareData.url)
        setShareCopied(true)
        setTimeout(() => setShareCopied(false), 2000)
      }
    } catch (err) {
      // user cancelled share sheet or clipboard failed — ignore silently
    }
  }

  return (
    <section
      className="relative min-h-screen grid lg:grid-cols-2 overflow-hidden"
      style={{ background: '#0a0a0a' }}
    >
      {/* Animated geometric background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, transparent, transparent 50px, rgba(232,255,71,0.02) 50px, rgba(232,255,71,0.02) 51px),
            repeating-linear-gradient(-45deg, transparent, transparent 50px, rgba(232,255,71,0.015) 50px, rgba(232,255,71,0.015) 51px)
          `,
          animation: 'moveGrid 20s linear infinite'
        }}
      />

      {/* LEFT SIDE - Content */}
      <div className="relative flex items-center justify-center lg:justify-start px-8 lg:px-16 py-20 lg:py-0 z-10 order-2 lg:order-1">
        <div className="max-w-xl w-full text-center lg:text-left">

          {/* Greeting */}
          <p style={{
            fontSize: '1.25rem', color: '#b0b0b0', marginBottom: '1rem',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.1s'
          }}>
            Hi, I am
          </p>

          {/* Name */}
          <h1
            id="hero-name"
            style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
          }}>
            <span style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #d0d0d0 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundClip: 'text', display: 'inline-block',
            }}>
              Abhijith Sreekumar
            </span>
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: '#808080',
            marginBottom: '1.5rem', fontWeight: 400, letterSpacing: '0.3px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.4s'
          }}>
            MCA Graduate • MERN Developer • Agentic AI Systems
          </p>

          <p style={{
            fontSize: 'clamp(1rem, 1.8vw, 1.125rem)', color: '#a0a0a0',
            marginBottom: '3rem', lineHeight: '1.7',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.6s'
          }}>
            Crafting intelligent systems with{' '}
            <span style={{ color: '#e8ff47', fontWeight: 600 }}>Full-Stack</span>
            {' '}expertise &{' '}
            <span style={{ color: '#47e8ff', fontWeight: 600 }}>AI</span>
            {' '}innovation
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4" style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.8s'
          }}>
            <a href="#projects" className="group relative overflow-hidden"
              style={{
                padding: '1rem 2.5rem', fontSize: '1rem', fontWeight: 600,
                color: '#0a0a0a', background: '#e8ff47', border: 'none',
                borderRadius: '50px', textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                transition: 'all 0.3s ease', cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 10px 40px rgba(232,255,71,0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              View Projects <span style={{ fontSize: '1.2rem' }}>→</span>
            </a>

            <a href="#contact"
              style={{
                padding: '1rem 2.5rem', fontSize: '1rem', fontWeight: 600,
                color: '#ffffff', background: 'transparent',
                border: '2px solid rgba(255,255,255,0.2)', borderRadius: '50px',
                textDecoration: 'none', display: 'inline-flex',
                alignItems: 'center', gap: '0.5rem',
                transition: 'all 0.3s ease', cursor: 'pointer',
                backdropFilter: 'blur(10px)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
                e.currentTarget.style.borderColor = '#e8ff47'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              Get in Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-10" style={{
            opacity: isVisible ? 1 : 0,
            transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 1s'
          }}>
            {[
              { icon: '✉', label: 'Email', href: 'mailto:iamabhijithabhi01@gmail.com' },
              { icon: '⌂', label: 'GitHub', href: 'https://github.com/abhijithabhi01' },
              { icon: 'in', label: 'LinkedIn', href: 'https://www.linkedin.com/in/abhijithsreekumar-dev/' },
            ].map(({ icon, label, href }) => (
              <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer"
                style={{
                  width: '50px', height: '50px', display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  borderRadius: '50%', background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)', color: '#ffffff',
                  fontSize: '1.2rem', transition: 'all 0.3s ease',
                  textDecoration: 'none', backdropFilter: 'blur(10px)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(232,255,71,0.2)'
                  e.currentTarget.style.borderColor = '#e8ff47'
                  e.currentTarget.style.transform = 'translateY(-3px) rotate(5deg)'
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(232,255,71,0.2)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                  e.currentTarget.style.transform = 'translateY(0) rotate(0deg)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {icon}
              </a>
            ))}

            {/* Share Button */}
            <button
              onClick={handleShare}
              aria-label="Share this portfolio"
              title={shareCopied ? 'Link copied!' : 'Share'}
              style={{
                width: '50px', height: '50px', display: 'flex',
                alignItems: 'center', justifyContent: 'center',
                borderRadius: '50%', background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)', color: '#ffffff',
                fontSize: '1.2rem', transition: 'all 0.3s ease',
                cursor: 'pointer', backdropFilter: 'blur(10px)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(232,255,71,0.2)'
                e.currentTarget.style.borderColor = '#e8ff47'
                e.currentTarget.style.transform = 'translateY(-3px) rotate(5deg)'
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(232,255,71,0.2)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                e.currentTarget.style.transform = 'translateY(0) rotate(0deg)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {shareCopied ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e8ff47" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="18" cy="5" r="3" />
                  <circle cx="6" cy="12" r="3" />
                  <circle cx="18" cy="19" r="3" />
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE - Photo with picture tag for responsive images */}
      <div className="relative flex items-center justify-center overflow-hidden order-1 lg:order-2"
        style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)' }}
      >
        {/* Gradient glow */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(circle at center, rgba(232,255,71,0.1) 0%, transparent 70%)',
          filter: 'blur(60px)'
        }} />

        {/* Photo Container */}
        <div className="relative z-10" style={{
          width: '100%', maxWidth: '500px', aspectRatio: '3/4',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'scale(1)' : 'scale(0.95)',
          transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.4s'
        }}>
          <div className="relative w-full h-full overflow-hidden" style={{
            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
            background: 'linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)',
            border: '3px solid rgba(232,255,71,0.2)',
            boxShadow: '0 30px 80px rgba(0,0,0,0.5)'
          }}>
            {/* ✅ picture tag — WebP with responsive sizes, JPEG fallback */}
            <picture>
              <source
                type="image/webp"
                srcSet={`${dphome480} 480w, ${dphome800} 800w`}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 500px"
              />
              <img
                src={dphomeFallback}
                alt="Abhijith Sreekumar"
                fetchpriority="high"
                decoding="async"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                width="768"
                height="1067"
              />
            </picture>
          </div>

          {/* Decorative glow */}
          <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full opacity-30"
            style={{
              background: 'linear-gradient(135deg, #e8ff47 0%, #47e8ff 100%)',
              filter: 'blur(30px)', animation: 'pulse 3s ease-in-out infinite'
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes moveGrid {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }
        @media (max-width: 1024px) {
          section { grid-template-columns: 1fr !important; display: flex !important; flex-direction: column !important; }
          section > div:first-child { padding: 3rem 2rem !important; }
          section > div:last-child { min-height: 50vh !important; }
        }
        @media (max-width: 768px) {
          section > div:first-child { padding: 2rem 1.5rem !important; }
        }
      `}</style>
    </section>
  )
}
