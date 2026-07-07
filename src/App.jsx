import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Stats from './components/Stats'
import About from './components/About'
import Values from './components/Values'
import WhyUs from './components/WhyUs'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Particles from './components/Particles'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'

export default function App() {
  // Intersection Observer for scroll reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // Mouse glow effect on cards
  useEffect(() => {
    const handleMouseMove = (e) => {
      const card = e.currentTarget
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      card.style.background = `radial-gradient(circle 200px at ${x}px ${y}px, rgba(124, 58, 237, 0.06), var(--color-surface))`
    }

    const handleMouseLeave = (e) => {
      e.currentTarget.style.background = 'var(--color-surface)'
    }

    // Use MutationObserver to catch dynamically rendered cards
    const applyGlow = () => {
      document
        .querySelectorAll('.service-card, .stat-card, .value-card, .testimonial-card')
        .forEach((card) => {
          card.removeEventListener('mousemove', handleMouseMove)
          card.removeEventListener('mouseleave', handleMouseLeave)
          card.addEventListener('mousemove', handleMouseMove)
          card.addEventListener('mouseleave', handleMouseLeave)
        })
    }

    // Small delay to ensure DOM is ready after React render
    const timer = setTimeout(applyGlow, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <ScrollProgress />
      <Particles />
      <Navbar />
      <Hero />
      <Services />
      <Stats />
      <About />
      <Values />
      <WhyUs />
      <Process />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
      <BackToTop />
    </>
  )
}
