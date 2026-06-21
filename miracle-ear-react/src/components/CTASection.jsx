function ArrowRight() {
  return (
    <svg
      width="18"
      height="18"
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

export default function CTASection() {
  return (
    <section className="cta-section" id="book">
      <div className="cta-card gsap-fade-up">
        <div className="cta-deco-1" />
        <div className="cta-deco-2" />

        <h2 className="gsap-fade-up">Ready to hear life in full color?</h2>
        <p className="gsap-fade-up">
          Book your free, no-obligation hearing evaluation at a Miracle-Ear center
          near you. Takes just 5 minutes to schedule.
        </p>

        <a
          href="https://www.miracle-ear.com/book-an-appointment"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-white gsap-fade-up"
        >
          Book Your Miracle-Ear Appointment
          <ArrowRight />
        </a>

        <p className="cta-disclaimer">
          *Free evaluation is an audiometric test to determine amplification needs
          only. Not a medical exam. Lifetime aftercare not included with some
          insurance purchases. See store for details.
        </p>
      </div>
    </section>
  )
}
