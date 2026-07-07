import { useEffect, useRef } from 'react'

export default function Particles() {
  const ref = useRef(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return
    const count = 30
    for (let i = 0; i < count; i++) {
      const p = document.createElement('div')
      p.classList.add('particle')
      const size = Math.random() * 3 + 1
      p.style.width = size + 'px'
      p.style.height = size + 'px'
      p.style.left = Math.random() * 100 + '%'
      p.style.animationDuration = (Math.random() * 20 + 15) + 's'
      p.style.animationDelay = (Math.random() * 15) + 's'
      p.style.opacity = Math.random() * 0.5 + 0.1
      container.appendChild(p)
    }
    return () => { container.innerHTML = '' }
  }, [])

  return <div className="particles" ref={ref} />
}
