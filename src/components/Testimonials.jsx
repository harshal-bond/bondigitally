const testimonials = [
  {
    text: "I came in with a product idea and left with a working system. They took the chaos of what was in my head and turned it into something real — structured, functional, and actually scalable. No hand-holding needed from my end, which was the whole point.",
    name: 'EasyButton Investor',
    role: 'Founder',
    initial: 'E',
  },
  {
    text: "We needed our internal operations to stop depending on manual effort. They mapped the whole workflow, identified exactly what could be automated, and built it. Our team went from spending hours on repetitive tasks to not thinking about them at all. That kind of shift is hard to put a number on, but it's been significant.",
    name: 'SonaMation',
    role: 'Founder',
    initial: 'S',
  },
  {
    text: "We run a manufacturing and distribution business, not a startup. But they understood our world immediately. Dealer tracking, order follow-ups, team communication — all of it now runs through one system my team actually uses. They didn't oversell. They just solved the problem.",
    name: 'New Star Steel Furniture',
    role: 'Owner',
    initial: 'N',
  },
  {
    text: "I had the brand vision but no idea how to set up the backend tools, automations, client flow. They came in, asked the right questions, and built exactly what I needed. My onboarding now runs itself. I spend time on the work, not chasing admin.",
    name: 'Muse',
    role: 'Founder',
    initial: 'M',
  },
  {
    text: "I didn't need another consultant. I needed someone to actually fix things. Sales process, content workflow, and client data — all disconnected. One sprint in and the difference was visible. Fewer things falling through, a pipeline I could finally read.",
    name: 'RAMPD',
    role: 'Founder',
    initial: 'R',
  },
  {
    text: "We're a tech company, so we know when someone understands what they're building. They did. Clean work, well documented, proper handover. The difference was accountability — a defined scope, and no surprises.",
    name: 'TechStack',
    role: 'Co-founder',
    initial: 'T',
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-badge"><span className="badge-dot" />Testimonials</span>
          <h2 className="section-title">What Our Clients Say</h2>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div className={`testimonial-card reveal reveal-delay-${(i % 4) + 1}`} key={i}>
              <div className="testimonial-quote-mark">"</div>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{t.initial}</div>
                <div className="testimonial-info">
                  <h4>{t.name}</h4>
                  <p>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
