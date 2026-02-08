import { useState, useEffect } from 'react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section 
      className="relative min-h-screen grid lg:grid-cols-2 overflow-hidden"
      style={{
        background: '#0a0a0a'
      }}
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
          <p 
            style={{
              fontSize: '1.25rem',
              color: '#b0b0b0',
              marginBottom: '1rem',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.1s'
            }}
          >
            Hi, I am
          </p>

          {/* Name */}
          <h1 
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: '1.5rem',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
            }}
          >
            <span style={{ 
              background: 'linear-gradient(135deg, #ffffff 0%, #d0d0d0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              display: 'inline-block',
              
            }}>
              Abhijith
            </span>
          </h1>

          {/* Subtitle */}
          <p 
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: '#808080',
              marginBottom: '1.5rem',
              fontWeight: 400,
              letterSpacing: '0.3px',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.4s'
            }}
          >
            MCA Student • Application Developer
          </p>

          <p 
            style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.125rem)',
              color: '#a0a0a0',
              marginBottom: '3rem',
              lineHeight: '1.7',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.6s'
            }}
          >
            Crafting intelligent systems with{' '}
            <span style={{ color: '#e8ff47', fontWeight: 600 }}>Full-Stack</span>
            {' '}expertise &{' '}
            <span style={{ color: '#47e8ff', fontWeight: 600 }}>AI</span>
            {' '}innovation
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-wrap gap-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.8s'
            }}
          >
            <a
              href="#projects"
              className="group relative overflow-hidden"
              style={{
                padding: '1rem 2.5rem',
                fontSize: '1rem',
                fontWeight: 600,
                color: '#0a0a0a',
                background: '#e8ff47',
                border: 'none',
                borderRadius: '50px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
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
              View Projects
              <span style={{ fontSize: '1.2rem' }}>→</span>
            </a>

            <a
              href="#contact"
              style={{
                padding: '1rem 2.5rem',
                fontSize: '1rem',
                fontWeight: 600,
                color: '#ffffff',
                background: 'transparent',
                border: '2px solid rgba(255,255,255,0.2)',
                borderRadius: '50px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
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
          <div 
            className="flex gap-4 mt-10"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 1s'
            }}
          >
            {[
              { icon: '✉', label: 'Email', href: 'mailto:iamabhijith01@gmail.com?subject=Hello%20Abhijith&body=Hi%20there,' },
              { icon: '⌂', label: 'GitHub', href: 'https://github.com/abhijithabhi01' },
              { icon: 'in', label: 'LinkedIn', href: 'https://www.linkedin.com/in/abhijith-s-5138a724b/', target: 'blank' },
            ].map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                style={{
                  width: '50px',
                  height: '50px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: '#ffffff',
                  fontSize: '1.2rem',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                  backdropFilter: 'blur(10px)'
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
          </div>
        </div>
      </div>

      {/* RIGHT SIDE - Photo */}
      <div 
        className="relative flex items-center justify-center overflow-hidden order-1 lg:order-2"
        style={{
          background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)'
        }}
      >
        {/* Gradient glow effect behind photo */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at center, rgba(232,255,71,0.1) 0%, transparent 70%)',
            filter: 'blur(60px)'
          }}
        />

        {/* Photo Container */}
        <div 
          className="relative z-10"
          style={{
            width: '100%',
            maxWidth: '500px',
            aspectRatio: '3/4',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'scale(1)' : 'scale(0.95)',
            transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.4s'
          }}
        >
          {/* Placeholder - Replace with actual image */}
          <div 
            className="relative w-full h-full overflow-hidden"
            style={{
              borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
              background: 'linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)',
              border: '3px solid rgba(232,255,71,0.2)',
              boxShadow: '0 30px 80px rgba(0,0,0,0.5)'
            }}
          >
                <img 
                  src="./src/Assests/dp_home.jpeg" 
                  alt="Abhijith S" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            

          </div>

          {/* Decorative border element */}
          <div 
            className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full opacity-30"
            style={{
              background: 'linear-gradient(135deg, #e8ff47 0%, #47e8ff 100%)',
              filter: 'blur(30px)',
              animation: 'pulse 3s ease-in-out infinite'
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
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.1);
          }
        }

        @media (max-width: 1024px) {
          section {
            grid-template-columns: 1fr !important;
            display: flex !important;
            flex-direction: column !important;
          }
          
          section > div:first-child {
            padding: 3rem 2rem !important;
          }
          
          section > div:last-child {
            min-height: 50vh !important;
          }
        }

        @media (max-width: 768px) {
          section > div:first-child {
            padding: 2rem 1.5rem !important;
          }
        }
      `}</style>
    </section>
  )
}
