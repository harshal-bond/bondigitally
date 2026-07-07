const testimonials = [
  {
    text: 'Bond Digitally transformed our entire digital workflow. Their automation systems cut our operational time by 60% and the results were visible within weeks.',
    name: 'Rajesh Mehta',
    role: 'Founder, ScaleUp Ventures',
    initial: 'R',
  },
  {
    text: "Their systems-first approach is unlike anything we've seen. They didn't just build a website — they built an entire growth engine for our business.",
    name: 'Priya Sharma',
    role: 'CEO, NovaBrand Commerce',
    initial: 'P',
  },
  {
    text: 'From strategy to execution, Bond Digitally delivered a complete marketing and automation stack. Our lead generation doubled in the first quarter.',
    name: 'Amit Kapoor',
    role: 'Director, Fusion Digital Labs',
    initial: 'A',
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-badge"><span className="badge-dot" />Testimonials</span>
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">Real results from real businesses. Here's what our partners have to say about working with Bond Digitally.</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div className={`testimonial-card reveal reveal-delay-${i + 1}`} key={i}>
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-text">"{t.text}"</p>
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
