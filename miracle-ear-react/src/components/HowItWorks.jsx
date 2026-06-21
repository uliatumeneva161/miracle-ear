const STEPS = [
  {
    num: 1,
    title: 'Book',
    text: 'Schedule your free hearing evaluation online or by phone. No referral needed.',
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
        <line x1="16" x2="16" y1="2" y2="6" />
        <line x1="8" x2="8" y1="2" y2="6" />
        <line x1="3" x2="21" y1="10" y2="10" />
      </svg>
    ),
  },
  {
    num: 2,
    title: 'Test',
    text: 'Our licensed audiologist performs a comprehensive 5-minute hearing assessment.',
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10" />
        <path d="M12 20v2" />
      </svg>
    ),
  },
  {
    num: 3,
    title: 'Hear',
    text: 'Get personalized recommendations and try the latest hearing aid technology.',
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 14v3a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3" />
        <path d="M12 2v15" />
        <path d="m9 5 3-3 3 3" />
      </svg>
    ),
  },
]

export default function HowItWorks() {
  return (
    <section className="hiw-section">
      <div className="hiw-header gsap-fade-up">
        <p className="section-label">Simple Process</p>
        <h2>Three steps to better hearing</h2>
      </div>

      <div className="hiw-grid">
        <div className="connect-line connect-line-1" />
        <div className="connect-line connect-line-2" />

        {STEPS.map((step) => (
          <div className="step-card gsap-fade-up" key={step.num}>
            <div className="step-num">{step.num}</div>
            <div className="step-icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
