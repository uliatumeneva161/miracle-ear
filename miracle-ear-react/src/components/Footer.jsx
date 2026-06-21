export default function Footer() {
  return (
    <footer className="footer gsap-fade-up">
      <div className="footer-inner">
        <div className="footer-links">
          <a
            href="https://www.miracle-ear.com/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
          <a
            href="https://www.miracle-ear.com/terms"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms of Use
          </a>
          <a
            href="https://www.miracle-ear.com/accessibility"
            target="_blank"
            rel="noopener noreferrer"
          >
            Accessibility
          </a>
        </div>

        <div className="footer-divider" />

        <p className="footer-text">
          The interactive demo and online hearing test are for informational and
          educational purposes only. They do not constitute a medical exam or
          diagnosis. A full audiometric evaluation by a licensed professional is
          required to determine hearing amplification needs. Free evaluation offer
          subject to terms. See store for details.
        </p>

        <p className="footer-text">
          Miracle-Ear has over 70 years of experience and more than 1,500 centers
          across the United States.
        </p>

        <p className="footer-copy">&copy; 2026 Miracle-Ear®. All rights reserved.</p>
      </div>
    </footer>
  )
}
