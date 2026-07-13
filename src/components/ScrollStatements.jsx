import { useEffect, useRef, useState } from 'react'

export default function ScrollStatements() {
  const sectionRef = useRef(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const handleScroll = () => {
      const rect = section.getBoundingClientRect()
      const sectionHeight = section.offsetHeight
      const viewportHeight = window.innerHeight

      // Calculate how far through the section we've scrolled
      // 0 = section just entered viewport, 1 = section about to leave
      const rawProgress = (viewportHeight - rect.top) / (sectionHeight + viewportHeight)
      setProgress(Math.max(0, Math.min(1, rawProgress)))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Statement 1 fades in from 0.15 to 0.3, stays until 0.45, fades out 0.45 to 0.55
  const s1Opacity =
    progress < 0.15 ? 0 :
    progress < 0.3 ? (progress - 0.15) / 0.15 :
    progress < 0.45 ? 1 :
    progress < 0.55 ? 1 - (progress - 0.45) / 0.1 : 0

  const s1Y = progress < 0.3 ? (1 - Math.min(1, (progress - 0.15) / 0.15)) * 40 : 0

  // Statement 2 fades in from 0.5 to 0.65, stays visible
  const s2Opacity =
    progress < 0.5 ? 0 :
    progress < 0.65 ? (progress - 0.5) / 0.15 : 1

  const s2Y = progress < 0.65 ? (1 - Math.min(1, Math.max(0, (progress - 0.5) / 0.15))) * 40 : 0

  return (
    <section className="scroll-statements" ref={sectionRef}>
      <div className="scroll-statements-inner">
        <div
          className="scroll-statement"
          style={{
            opacity: s1Opacity,
            transform: `translateY(${s1Y}px)`,
          }}
        >
          <p>Most businesses don't fail because of bad ideas.</p>
        </div>
        <div
          className="scroll-statement scroll-statement-emphasis"
          style={{
            opacity: s2Opacity,
            transform: `translateY(${s2Y}px)`,
          }}
        >
          <p>They fail because no one owned the execution.</p>
        </div>
      </div>
    </section>
  )
}
