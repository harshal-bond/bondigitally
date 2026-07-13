const steps = [
  {
    num: '01',
    title: 'Discover',
    desc: 'We learn your business goals, gaps, and what matters most before suggesting anything.',
    cta: 'Schedule a Call · 30 minutes, no agenda, just clarity.',
  },
  {
    num: '02',
    title: 'Define',
    desc: 'We align on scope, outcomes, and success metrics so everyone moves in one direction.',
    cta: 'A full PRD created with your sign‑off through each review round.',
  },
  {
    num: '03',
    title: 'Design',
    desc: 'We map the complete execution path before a single line of work begins.',
    cta: 'Deliverables: PRD · HLD/LLD · Solutioning Doc · Gantt · ARD',
  },
  {
    num: '04',
    title: 'Deliver',
    desc: 'We execute with full transparency — every milestone and decision visible as it happens.',
    cta: 'Final product: built, tested, and fully documented.',
  },
  {
    num: '05',
    title: 'Scale',
    desc: 'We identify the next opportunity before the current engagement closes.',
    cta: 'Get your next milestone roadmap.',
  },
]

export default function Process() {
  return (
    <section className="process" id="process">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-badge"><span className="badge-dot" />Our Process</span>
          <h2 className="section-title">How We Work</h2>
        </div>
        <div className="process-timeline">
          {steps.map((s, i) => (
            <div className={`process-step reveal reveal-delay-${(i % 4) + 1}`} key={i}>
              <div className="step-indicator">
                <div className="step-number">{s.num}</div>
                {i < steps.length - 1 && <div className="step-line" />}
              </div>
              <div className="step-content">
                <h3>{s.title}</h3>
                <p className="step-desc">{s.desc}</p>
                <p className="step-cta">
                  <span className="step-cta-arrow">→</span>
                  {s.cta}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
