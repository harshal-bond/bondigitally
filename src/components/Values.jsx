const values = [
  { icon: '🎯', title: 'Systems-First Thinking', desc: "We don't do one-off fixes. Every solution is designed as a system — repeatable, scalable, and built for long-term output." },
  { icon: '🤝', title: 'Partnership Over Transactions', desc: 'We work alongside your team, not above it. Your growth is our metric, and we build relationships that last beyond projects.' },
  { icon: '⚡', title: 'Speed With Structure', desc: 'We move fast without cutting corners. Our approach combines agile execution with strategic rigor to deliver results quickly.' },
  { icon: '🔬', title: 'Data-Driven Decisions', desc: 'Every recommendation is backed by data. We measure, test, and optimize — so your decisions are grounded in real performance.' },
  { icon: '🔒', title: 'Transparency & Integrity', desc: "No hidden agendas, no vanity metrics. We share what's working, what's not, and what we're doing about it — always." },
  { icon: '🚀', title: 'Relentless Innovation', desc: 'We stay ahead of the curve, constantly exploring new tools, frameworks, and strategies to give your business a competitive edge.' },
]

export default function Values() {
  return (
    <section className="values">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-badge"><span className="badge-dot" />Our Values</span>
          <h2 className="section-title">The Values Behind Bond Digitally</h2>
          <p className="section-subtitle">Our values shape everything we do at Bond Digitally. From innovation to integrity, these principles guide how we build, serve, and grow.</p>
        </div>
        <div className="values-grid">
          {values.map((v, i) => (
            <div className={`value-card reveal reveal-delay-${(i % 3) + 1}`} key={i}>
              <div className="value-icon">{v.icon}</div>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
