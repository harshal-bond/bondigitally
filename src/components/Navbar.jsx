import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
    document.body.style.overflow = !menuOpen ? 'hidden' : ''
  }

  const closeMenu = () => {
    setMenuOpen(false)
    document.body.style.overflow = ''
  }

  const scrollTo = (e, id) => {
    e.preventDefault()
    closeMenu()
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const links = [
    { label: 'Home', id: 'home' },
    { label: 'Process', id: 'process' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Contact', id: 'contact' },
  ]

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="container">
          <a href="#" className="nav-logo" onClick={e => scrollTo(e, 'home')}>
            <img src={`${import.meta.env.BASE_URL}BOND Logo (1).png`} alt="Bond Digitally Logo" />
            <span className="nav-logo-text">BOND DIGITALLY</span>
          </a>

          <div className="nav-links">
            {links.map(l => (
              <a key={l.id} href={`#${l.id}`} onClick={e => scrollTo(e, l.id)}>{l.label}</a>
            ))}
          </div>

          <div className="nav-cta">
            <a href="#contact" className="btn btn-primary" onClick={e => scrollTo(e, 'contact')}>
              Book a call
              <span className="btn-arrow">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
              </span>
            </a>
          </div>

          <button className={`nav-toggle${menuOpen ? ' active' : ''}`} onClick={toggleMenu} aria-label="Toggle navigation">
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' active' : ''}`}>
        {links.map(l => (
          <a key={l.id} href={`#${l.id}`} onClick={e => scrollTo(e, l.id)}>{l.label}</a>
        ))}
        <a href="#contact" className="btn btn-primary" style={{ marginTop: 16 }} onClick={e => scrollTo(e, 'contact')}>Book a call</a>
      </div>
    </>
  )
}
