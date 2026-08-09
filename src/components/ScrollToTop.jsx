import { useState, useEffect } from 'react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={scrollToTop}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="Scroll to top"
      style={{
        position: 'fixed',
        right: '1.75rem',
        bottom: '3rem',
        zIndex: 90,
        width: '52px',
        height: '52px',
        borderRadius: '50%',
        border: '1px solid rgba(232,255,71,0.25)',
        background: hovered
          ? 'linear-gradient(135deg, #e8ff47 0%, #47e8ff 100%)'
          : 'rgba(15,15,15,0.85)',
        backdropFilter: 'blur(14px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        boxShadow: hovered
          ? '0 12px 32px rgba(232,255,71,0.35)'
          : '0 8px 24px rgba(0,0,0,0.35)',
        opacity: visible ? 1 : 0,
        transform: visible
          ? `translateY(0) scale(${hovered ? 1.08 : 1})`
          : 'translateY(24px) scale(0.6)',
        pointerEvents: visible ? 'auto' : 'none',
        transition: 'opacity 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.3s ease, box-shadow 0.3s ease',
      }}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        style={{
          transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
          transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
        }}
      >
        <path
          d="M12 19V5M12 5L5 12M12 5L19 12"
          stroke={hovered ? '#0a0a0a' : '#e8ff47'}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* subtle pulse ring, only while idle-visible */}
      <span
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          border: '1px solid rgba(232,255,71,0.4)',
          opacity: visible && !hovered ? 1 : 0,
          animation: visible && !hovered ? 'stt-pulse 2.2s ease-out infinite' : 'none',
        }}
      />

      <style>{`
        @keyframes stt-pulse {
          0%   { transform: scale(1);   opacity: 0.5; }
          100% { transform: scale(1.6); opacity: 0; }
        }
      `}</style>
    </button>
  )
}