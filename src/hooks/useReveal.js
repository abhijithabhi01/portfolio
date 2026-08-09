import { useEffect, useRef } from 'react'

/**
 * Returns a ref.  Attach it to any element that has className="reveal".
 * When the element scrolls into view it gets className="reveal visible".
 */
export default function useReveal(delay = 0) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('visible'), delay)
          observer.unobserve(el)
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return ref
}
