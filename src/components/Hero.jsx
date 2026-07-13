import { useState, useEffect } from 'react'

const cycleWords = ['product.', 'marketing.', 'operations.']

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0)
  const [animating, setAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true)
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % cycleWords.length)
        setAnimating(false)
      }, 400)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  const scrollTo = (e, id) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="hero" id="home">
      <div className="hero-glow" />
      <div className="hero-glow-secondary" />
      <div className="container">
        <div className="hero-badge">
          <span className="hero-badge-text">Execution Partner</span>
        </div>
        <h1 className="hero-title">
          One team. Your{' '}
          <span className="hero-cycle-wrapper">
            <span className={`hero-cycle-word gradient-text${animating ? ' exit' : ''}`}>
              {cycleWords[wordIndex]}
            </span>
          </span>
        </h1>
        <p className="hero-subtitle">
          We work with founders and growing businesses as their dedicated execution team — taking full ownership from the first sprint to the next scale milestone.
        </p>
        <div className="hero-descriptors">
          <div className="hero-descriptor">
            <span className="descriptor-arrow">→</span>
            <span>Every stage. Every function.</span>
          </div>
          <div className="hero-descriptor">
            <span className="descriptor-arrow">→</span>
            <span>One team. Three roles.</span>
          </div>
          <div className="hero-descriptor">
            <span className="descriptor-arrow">→</span>
            <span>Idea to ship product.</span>
          </div>
        </div>
        <div className="hero-buttons">
          <a href="#process" className="btn btn-primary" onClick={e => scrollTo(e, 'process')}>
            See how it works
            <span className="btn-arrow"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></span>
          </a>
        </div>
      </div>
    </section>
  )
}
