import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import { Certifications, Education, Contact, Footer } from './components/Sections'

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div style={{ 
      fontFamily: "'Inter', sans-serif", 
      background: '#0a0a0a', 
      color: '#f0f0f0', 
      overflowX: 'hidden',
      position: 'relative'
    }}>
      {/* Animated cursor spotlight effect */}
      <div 
        style={{
          position: 'fixed',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(232,255,71,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
          transform: `translate(${mousePosition.x - 300}px, ${mousePosition.y - 300}px)`,
          transition: 'transform 0.15s ease-out',
          zIndex: 1,
          mixBlendMode: 'screen'
        }}
      />

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Education />
      <Contact />
      <Footer />
    </div>
  )
}
