export default function CTA() {
  const scrollTo = (e, id) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="cta" id="contact">
      <div className="container">
        <div className="cta-card reveal">
          <h2 className="section-title">Ready to Build Systems<br />That Actually Work?</h2>
          <p className="section-subtitle">Let's talk about your business, identify bottlenecks, and design a digital system that drives real, sustainable growth.</p>
          <div className="cta-buttons">
            <a href="https://bondigitally.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Book a discovery call
              <span className="btn-arrow"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg></span>
            </a>
            <a href="#services" className="btn btn-secondary" onClick={e => scrollTo(e, 'services')}>
              Explore our services
              <span className="btn-arrow"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
