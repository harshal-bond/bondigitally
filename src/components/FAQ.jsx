import { useState } from 'react'

const faqs = [
  { q: 'What exactly does Bond Digitally do?', a: 'We build structured digital systems for businesses. This includes strategy consulting, AI-powered automation, performance marketing, web/app development, branding, and growth operations — all engineered to work together as a unified ecosystem that drives measurable results.' },
  { q: 'How is Bond Digitally different from a typical agency?', a: 'Unlike traditional agencies that deliver isolated services, we take a systems-first approach. We build interconnected solutions — strategy, automation, marketing, and development — that work as one cohesive engine, so your growth doesn\'t depend on disconnected one-off efforts.' },
  { q: 'What kind of businesses do you work with?', a: 'We work with startups, scaling businesses, e-commerce brands, SaaS companies, and established enterprises across industries. If you\'re looking to systematize and scale your digital operations, we\'re the right fit regardless of your industry.' },
  { q: 'How long does it take to see results?', a: 'Most clients see measurable improvements within the first 4–6 weeks of implementation. Our automation systems start showing efficiency gains immediately, while marketing and growth metrics typically compound over the first 2–3 months.' },
  { q: 'Do you offer ongoing support after launch?', a: 'Absolutely. We offer dedicated support, optimization, and scaling services after launch. Our team monitors performance, suggests improvements, and iterates on your systems to ensure they continue delivering results as your business evolves.' },
  { q: 'How do I get started with Bond Digitally?', a: 'Simply book a free discovery call. We\'ll discuss your goals, audit your current setup, and propose a tailored roadmap. No obligations — just a clear conversation about how we can help your business grow systematically.' },
]

export default function FAQ() {
  const [active, setActive] = useState(null)

  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-badge"><span className="badge-dot" />FAQ</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">Got questions? We've got answers. If you don't find what you're looking for, feel free to reach out.</p>
        </div>
        <div className="faq-grid">
          {faqs.map((f, i) => (
            <div className={`faq-item reveal${active === i ? ' active' : ''}`} key={i}>
              <button className="faq-question" onClick={() => setActive(active === i ? null : i)}>
                <span>{f.q}</span>
                <span className="faq-toggle">+</span>
              </button>
              <div className="faq-answer">
                <div className="faq-answer-inner">{f.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
