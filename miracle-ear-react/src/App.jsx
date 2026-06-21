import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Header from './components/Header'
import Hero from './components/Hero'
import InteractiveDemo from './components/InteractiveDemo'
import HowItWorks from './components/HowItWorks'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const appRef = useRef(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      const heroTl = gsap.timeline({ defaults: { ease: 'power2.out' } })
      heroTl
        .to('.hero h1', { opacity: 1, y: 0, duration: 0.6 })
        .to('.hero-subtitle', { opacity: 1, y: 0, duration: 0.6 }, '-=0.45')
        .to(
          '.benefit-tags .benefit-tag',
          { opacity: 1, y: 0, stagger: 0.08, duration: 0.4 },
          '-=0.3'
        )
        .to('.hero-cta', { opacity: 1, y: 0, duration: 0.5 }, '-=0.15')
        .to('.trust-row', { opacity: 1, y: 0, duration: 0.4 }, '-=0.2')
        .to('.hero-image-wrap', { opacity: 1, x: 0, duration: 0.8 }, '-=0.6')
        .to('.scroll-hint', { opacity: 1, y: 0, duration: 0.5 }, '-=0.3')

      gsap.utils.toArray('.gsap-fade-up').forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 85%' },
        })
      })

      gsap.utils.toArray('.gsap-scale-in').forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          delay: 0.2,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 85%' },
        })
      })
      gsap.utils.toArray('.step-num').forEach((el, i) => {
        gsap.fromTo(
          el,
          { scale: 0.8 },
          {
            scale: 1,
            duration: 0.5,
            delay: i * 0.15,
            ease: 'back.out(1.7)',
            scrollTrigger: { trigger: el, start: 'top 90%' },
          }
        )
      })
    }, appRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={appRef}>
      <Header />
      <main>
        <Hero />
        <InteractiveDemo />
        <HowItWorks />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

export default App
