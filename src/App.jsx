import { useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import { Footer } from './components/Sections'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import FAQPage from './pages/FAQPage'
import ProjectDetailPage from './pages/ProjectDetailPage'

function StarfieldBackground() {
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: -9999, y: -9999 })
  const particlesRef = useRef([])
  const rafRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const COUNT = Math.min(120, Math.floor((window.innerWidth * window.innerHeight) / 12000))
    const colors = [
      'rgba(255,255,255,0.9)',
      'rgba(180,210,255,0.75)',
      'rgba(255,200,150,0.65)',
      'rgba(200,230,255,0.55)',
      'rgba(255,220,180,0.5)',
    ]
    particlesRef.current = Array.from({ length: COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.6 + 0.4,
      baseX: 0,
      baseY: 0,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
      color: colors[Math.floor(Math.random() * colors.length)],
      twinkle: Math.random() * Math.PI * 2,
    }))
    particlesRef.current.forEach((p) => {
      p.baseX = p.x
      p.baseY = p.y
    })

    const onMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', onMove)

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const mx = mouseRef.current.x
      const my = mouseRef.current.y

      for (const p of particlesRef.current) {
        p.baseX += p.vx
        p.baseY += p.vy
        if (p.baseX < 0) p.baseX = canvas.width
        if (p.baseX > canvas.width) p.baseX = 0
        if (p.baseY < 0) p.baseY = canvas.height
        if (p.baseY > canvas.height) p.baseY = 0

        const dx = p.baseX - mx
        const dy = p.baseY - my
        const dist = Math.sqrt(dx * dx + dy * dy) || 1
        const influence = Math.max(0, 1 - dist / 280)
        const push = influence * 28
        p.x = p.baseX + (dx / dist) * push
        p.y = p.baseY + (dy / dist) * push

        p.twinkle += 0.02
        const alphaMul = 0.55 + 0.45 * Math.sin(p.twinkle)

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = p.color.replace(/[\d.]+\)$/, `${parseFloat(p.color.match(/[\d.]+(?=\))/)[0]) * alphaMul})`)
        ctx.fill()
      }
      rafRef.current = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  )
}

/** Scroll to top on route change; honour hash anchors on home */
function RouteScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      // Wait a tick for home sections to mount
      requestAnimationFrame(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
        else window.scrollTo(0, 0)
      })
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          fontFamily: "'Inter', sans-serif",
          background: '#0a0a0a',
          color: '#f0f0f0',
          overflowX: 'hidden',
          position: 'relative',
        }}
      >
        <StarfieldBackground />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <RouteScrollManager />
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          </Routes>
          <Footer />
          <ScrollToTop />
        </div>
      </div>
    </BrowserRouter>
  )
}
