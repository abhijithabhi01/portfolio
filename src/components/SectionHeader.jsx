import useReveal from '../hooks/useReveal'

export default function SectionHeader({ label, title, accentWord }) {
  const ref = useReveal()
  
  return (
    <div 
      ref={ref} 
      className="reveal text-center mb-20"
    >
      {/* Label */}
      <div 
        className="inline-flex items-center gap-3 mb-6"
        style={{
          padding: '10px 24px',
          background: 'rgba(232,255,71,0.08)',
          border: '1px solid rgba(232,255,71,0.2)',
          borderRadius: '50px'
        }}
      >
        <div 
          style={{
            width: '8px',
            height: '8px',
            background: 'linear-gradient(135deg, #e8ff47 0%, #47e8ff 100%)',
            borderRadius: '50%',
            boxShadow: '0 0 12px rgba(232,255,71,0.6)'
          }}
        />
        <span 
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: '0.875rem',
            fontWeight: 700,
            color: '#e8ff47',
            letterSpacing: '2px',
            textTransform: 'uppercase'
          }}
        >
          {label}
        </span>
      </div>

      {/* Title */}
      <h2
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: 800,
          lineHeight: 1.2,
          marginBottom: '1rem'
        }}
      >
        <span 
          style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #b0b0b0 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          {title}
        </span>
        {accentWord && (
          <>
            {' '}
            <span 
              style={{
                background: 'linear-gradient(135deg, #e8ff47 0%, #47e8ff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                position: 'relative'
              }}
            >
              {accentWord}
              {/* Underline decoration */}
              <svg
                style={{
                  position: 'absolute',
                  bottom: '-10px',
                  left: '0',
                  width: '100%',
                  height: '12px',
                  opacity: 0.5
                }}
                viewBox="0 0 200 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 9C50 3 150 3 198 9"
                  stroke="url(#gradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#e8ff47" />
                    <stop offset="100%" stopColor="#47e8ff" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </>
        )}
      </h2>
    </div>
  )
}
