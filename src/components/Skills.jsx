import { useState, useEffect, useRef } from 'react'
import SectionHeader from './SectionHeader'
import useReveal from '../hooks/useReveal'
import { SKILLS, COMPETENCIES } from '../data'

function SkillBar({ name, level, animate, delay = 0 }) {
  return (
    <div 
      className="mb-6"
      style={{
        opacity: 0,
        animation: `fadeInUp 0.6s ease forwards ${delay}s`
      }}
    >
      <div className="flex justify-between items-center mb-3">
        <span 
          style={{
            fontSize: '1rem',
            fontWeight: 600,
            color: '#ffffff',
            letterSpacing: '0.3px'
          }}
        >
          {name}
        </span>
        <span 
          style={{
            fontSize: '0.875rem',
            fontWeight: 600,
            color: '#e8ff47',
            fontFamily: "'Syne', sans-serif"
          }}
        >
          {level}%
        </span>
      </div>
      
      <div 
        className="relative overflow-hidden"
        style={{
          height: '8px',
          background: 'rgba(255,255,255,0.05)',
          borderRadius: '10px',
          border: '1px solid rgba(255,255,255,0.08)'
        }}
      >
        <div
          style={{
            height: '100%',
            width: animate ? `${level}%` : '0%',
            background: 'linear-gradient(90deg, #e8ff47 0%, #47e8ff 100%)',
            borderRadius: '10px',
            transition: 'width 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Shimmer effect */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
              animation: 'shimmer 2s infinite'
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default function Skills() {
  const sectionRef = useRef(null)
  const [animate, setAnimate] = useState(false)
  const textRef = useReveal(80)

  useEffect(() => {
    if (!sectionRef.current) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true)
          obs.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section 
      id="skills" 
      ref={sectionRef} 
      className="relative py-24 lg:py-32"
      style={{
        background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)',
        overflow: 'hidden'
      }}
    >
      {/* Background decoration */}
      <div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full opacity-10"
        style={{
          background: 'radial-gradient(circle, rgba(232,255,71,0.15) 0%, transparent 70%)',
          filter: 'blur(100px)'
        }}
      />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <SectionHeader 
          label="Skills" 
          title="Technical" 
          accentWord="Arsenal" 
        />

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Technical Skills */}
          {SKILLS.map((group, groupIndex) => (
            <div 
              key={group.group}
              className="relative p-8 rounded-3xl"
              style={{
                background: 'linear-gradient(135deg, rgba(26,26,26,0.5) 0%, rgba(15,15,15,0.5) 100%)',
                border: '1px solid rgba(255,255,255,0.05)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.4s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(232,255,71,0.3)'
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(232,255,71,0.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Group header */}
              <div className="flex items-center gap-3 mb-8">
                <div 
                  style={{
                    width: '8px',
                    height: '8px',
                    background: 'linear-gradient(135deg, #e8ff47 0%, #47e8ff 100%)',
                    borderRadius: '50%',
                    boxShadow: '0 0 20px rgba(232,255,71,0.5)'
                  }}
                />
                <h3
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    letterSpacing: '0.5px'
                  }}
                >
                  {group.group}
                </h3>
              </div>

              {/* Skills */}
              {group.items.map((skill, skillIndex) => (
                <SkillBar
                  key={skill.name}
                  {...skill}
                  animate={animate}
                  delay={groupIndex * 0.2 + skillIndex * 0.1}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Core Competencies */}
        <div 
          className="relative p-8 rounded-3xl"
          style={{
            background: 'linear-gradient(135deg, rgba(26,26,26,0.5) 0%, rgba(15,15,15,0.5) 100%)',
            border: '1px solid rgba(255,255,255,0.05)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div 
              style={{
                width: '8px',
                height: '8px',
                background: 'linear-gradient(135deg, #47e8ff 0%, #e8ff47 100%)',
                borderRadius: '50%',
                boxShadow: '0 0 20px rgba(71,232,255,0.5)'
              }}
            />
            <h3
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: '1.25rem',
                fontWeight: 700,
                color: '#ffffff',
                letterSpacing: '0.5px'
              }}
            >
              Core Competencies
            </h3>
          </div>

          <div className="flex flex-wrap gap-3">
            {COMPETENCIES.map((comp, index) => (
              <span
                key={comp}
                className="competency-tag"
                style={{
                  padding: '12px 24px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '50px',
                  fontSize: '0.938rem',
                  color: '#b0b0b0',
                  fontWeight: 500,
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'default',
                  opacity: 0,
                  animation: `fadeInUp 0.5s ease forwards ${0.6 + index * 0.05}s`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(232,255,71,0.15) 0%, rgba(71,232,255,0.15) 100%)'
                  e.currentTarget.style.borderColor = '#e8ff47'
                  e.currentTarget.style.color = '#e8ff47'
                  e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)'
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(232,255,71,0.2)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                  e.currentTarget.style.color = '#b0b0b0'
                  e.currentTarget.style.transform = 'translateY(0) scale(1)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {comp}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
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
      `}</style>
    </section>
  )
}
