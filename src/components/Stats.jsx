import { useEffect, useRef } from 'react'

const stats = [
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 20V10" /><path d="M12 20V4" /><path d="M6 20v-6" /></svg>,
    number: '50+',
    text: 'Businesses have scaled their operations with Bond Digitally\'s structured digital systems.',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>,
    number: '500K+',
    text: 'Hours of manual work eliminated through intelligent automation and AI-powered workflows.',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>,
    number: '95%',
    text: 'Clients see improved efficiency and measurable growth within the first three months of engagement.',
  },
]

function AnimatedNumber({ value }) {
  const ref = useRef(null)
  const animated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !animated.current) {
        animated.current = true
        const hasK = value.includes('K')
        const hasPercent = value.includes('%')
        const hasPlus = value.includes('+')
        const target = parseInt(value.replace(/[^0-9]/g, ''))
        const suffix = hasK ? 'K+' : hasPercent ? '%' : hasPlus ? '+' : ''
        let current = 0
        const increment = target / 60
        const timer = setInterval(() => {
          current += increment
          if (current >= target) { current = target; clearInterval(timer) }
          el.textContent = Math.floor(current) + suffix
        }, 2000 / 60)
      }
    }, { threshold: 0.5 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [value])

  return <span className="stat-number" ref={ref}>{value}</span>
}

export default function Stats() {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((s, i) => (
            <div className={`stat-card reveal reveal-delay-${i + 1}`} key={i}>
              <div className="stat-header">
                <span className="stat-icon">{s.icon}</span>
                <AnimatedNumber value={s.number} />
              </div>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
