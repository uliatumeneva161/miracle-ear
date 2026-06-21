function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#00857A"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}

function ArrowRight({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

export default function Hero() {
  const scrollToDemo = () => {
    document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero">
      <div className="hero-grid">
        {/* Left: copy */}
        <div className="hero-content">
          <h1 className="gsap-fade-up">
            Hear the moments that <span>matter most</span>
          </h1>
          <p className="hero-subtitle gsap-fade-up">
            Move the slider below to experience how Miracle-Ear brings back clarity
            - from whispers to laughter, in just seconds.
          </p>

          <div className="benefit-tags">
            <span className="benefit-tag gsap-fade-up">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
              </svg>
              75 years trusted
            </span>

            <span className="benefit-tag gsap-fade-up">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              1,500+ local centers
            </span>

            <span className="benefit-tag gsap-fade-up">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
              Lifetime aftercare
            </span>
          </div>

          <div className="hero-cta gsap-fade-up">
            <a href="#demo" className="btn btn-primary" onClick={scrollToDemo}>
              Try the demo <ArrowRight />
            </a>
            <a
              href="https://www.miracle-ear.com/online-hearing-test/hearing-test-steps"
              className="btn btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Online hearing test
            </a>
          </div>

          <div className="trust-row gsap-fade-up">
            <span className="trust-item">
              <CheckIcon /> No credit card needed
            </span>
            <span className="trust-item">
              <CheckIcon /> 5-minute experience
            </span>
            <span className="trust-item">
              <CheckIcon /> HIPAA-compliant
            </span>
          </div>
        </div>

        {/* Right: image */}
        <div className="hero-image-wrap gsap-fade-right">
          <img
            src="happy-people.png"
            alt="Happy couple enjoying coffee together, hearing clearly"
          />
          <div className="image-badge">Real results, real moments</div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="scroll-hint gsap-fade-up" onClick={scrollToDemo}>
        <div className="scroll-hint-circle">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#00857A"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
        <span className="scroll-hint-text">Scroll to explore</span>
      </div>
    </section>
  )
}
