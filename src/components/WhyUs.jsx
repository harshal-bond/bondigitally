const manual = [
  'Prone to Human Errors',
  'Limited by Work Hours',
  'High Labor Costs & Overhead',
  'Slow & Time-Consuming Tasks',
  'Disconnected & Repetitive Work',
  'Inconsistent & Dependent on Workforce',
]

const ai = [
  'Smart, AI-Driven Decisions',
  '24/7 Automated Workflows',
  'Scalable & Cost-Effective',
  'Instant Data Processing',
  'Seamless System Integration',
  'Consistent & Reliable Output',
]

export default function WhyUs() {
  return (
    <section className="why-us">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-badge"><span className="badge-dot" />Why Us</span>
          <h2 className="section-title">What Makes Us Stand Out<br />In the Industry</h2>
          <p className="section-subtitle">Discover how our structured approach, data-driven systems, and commitment to results set us apart from the competition.</p>
        </div>
        <div className="comparison-grid reveal">
          <div className="comparison-card manual">
            <h3>Traditional Approach</h3>
            <div className="comparison-list">
              {manual.map((item, i) => (
                <div className="comparison-item" key={i}>
                  <span className="icon-x">✕</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="comparison-card ai">
            <h3>Bond Digitally Systems</h3>
            <div className="comparison-list">
              {ai.map((item, i) => (
                <div className="comparison-item" key={i}>
                  <span className="icon-check">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
