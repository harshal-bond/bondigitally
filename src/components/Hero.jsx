export default function Hero() {
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
          <span className="hero-badge-new">New</span>
          <span className="hero-badge-text">Scalable Digital Systems</span>
        </div>
        <h1 className="hero-title">
          Building Systems That<br />
          <span className="gradient-text">Make Businesses Work.</span>
        </h1>
        <p className="hero-subtitle">
          Bond Digitally combines strategy, automation, marketing, and development to create structured, scalable solutions that drive consistent output and real growth.
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="btn btn-primary" onClick={e => scrollTo(e, 'contact')}>
            Get in touch
            <span className="btn-arrow"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg></span>
          </a>
          <a href="#services" className="btn btn-secondary" onClick={e => scrollTo(e, 'services')}>
            View services
            <span className="btn-arrow"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg></span>
          </a>
        </div>
        <div className="hero-social-proof">
          <p>Trusted by businesses across industries</p>
          <div className="trusted-logos">
            <span>Startups</span>
            <span>E-Commerce</span>
            <span>SaaS</span>
            <span>Agencies</span>
            <span>Enterprises</span>
          </div>
        </div>
      </div>
    </section>
  )
}
