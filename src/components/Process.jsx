const steps = [
  { num: '01', title: 'Discovery & Strategy', desc: 'We audit your current setup, define goals, and map out a custom digital strategy tailored to your business.' },
  { num: '02', title: 'Design & Architecture', desc: 'We design the system — from brand visuals and UX flows to automation blueprints and tech architecture.' },
  { num: '03', title: 'Build & Integrate', desc: 'We develop, connect, and launch — websites, automations, campaigns, and tools working as one unified ecosystem.' },
  { num: '04', title: 'Optimize & Scale', desc: 'We monitor performance, refine what\'s working, and scale the systems that drive consistent growth and output.' },
]

export default function Process() {
  return (
    <section className="process" id="process">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-badge"><span className="badge-dot" />Our Process</span>
          <h2 className="section-title">How We Work</h2>
          <p className="section-subtitle">A structured, four-step approach that takes you from strategy to execution — with complete transparency at every stage.</p>
        </div>
        <div className="process-steps">
          {steps.map((s, i) => (
            <div className={`process-step reveal reveal-delay-${i + 1}`} key={i}>
              <div className="step-number">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
