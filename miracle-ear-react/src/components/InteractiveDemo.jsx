import { useState, useRef, useEffect, useCallback } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const CIRCUMFERENCE = 691

const STATES = {
  1: {
    label: 'Off',
    text: 'Hearing aid off — sounds are distant and muffled',
    progress: 0,
    grayscale: 100,
    brightness: 0.9,
    glow: '0 0 0 rgba(0,133,122,0)',
    fbBg: 'var(--muted-bg)',
    fbText: 'var(--slate)',
    iconBg: 'white',
    iconColor: '#8B95A5',
    pillBg: 'var(--muted-bg)',
    pillText: 'var(--slate)',
    audioSrc: 'speech_high_noise.mp3',
    isGlowPulse: false,
    showWave: false,
    showParticles: false,
    waveAnimated: false,
  },
  2: {
    label: 'Low',
    text: 'Some clarity - you catch fragments of conversation',
    progress: 33,
    grayscale: 40,
    brightness: 1,
    glow: '0 0 30px rgba(0,133,122,0.1)',
    fbBg: 'var(--teal-light)',
    fbText: 'var(--teal-dark)',
    iconBg: 'white',
    iconColor: 'var(--teal)',
    pillBg: 'var(--teal-light)',
    pillText: 'var(--teal)',
    audioSrc: 'speech_medium_noise.mp3',
    isGlowPulse: false,
    showWave: false,
    showParticles: false,
    waveAnimated: false,
  },
  3: {
    label: 'Medium',
    text: 'Much clearer — voices stand out from background noise',
    progress: 66,
    grayscale: 0,
    brightness: 1.05,
    glow: '0 0 50px rgba(0,133,122,0.2)',
    fbBg: 'var(--teal-light)',
    fbText: 'var(--teal-dark)',
    iconBg: 'white',
    iconColor: 'var(--teal)',
    pillBg: 'var(--teal-light)',
    pillText: 'var(--teal)',
    audioSrc: 'speech_low_noise.mp3',
    isGlowPulse: false,
    showWave: true,
    showParticles: false,
    waveAnimated: false,
  },
  4: {
    label: 'Full Clarity',
    text: 'Crystal clear - every word, every moment, perfectly heard',
    progress: 100,
    grayscale: 0,
    brightness: 1.1,
    glow: '',
    fbBg: 'var(--teal)',
    fbText: 'white',
    iconBg: 'rgba(255,255,255,0.2)',
    iconColor: 'white',
    pillBg: 'var(--teal)',
    pillText: 'white',
    audioSrc: 'speech_clean.mp3',
    isGlowPulse: true,
    showWave: true,
    showParticles: true,
    waveAnimated: true,
  },
}

const MARKS = [
  { val: 1, label: 'Off' },
  { val: 2, label: 'Low' },
  { val: 3, label: 'Medium' },
  { val: 4, label: 'Full' },
]

function AudioIcon({ val }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: '0 0 24 24',
    fill: val === 4 ? 'currentColor' : 'none',
    stroke: val === 4 ? 'none' : 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  }

  if (val === 1) {
    return (
      <svg {...common}>
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
        <line x1="23" y1="9" x2="17" y2="15" />
        <line x1="17" y1="9" x2="23" y2="15" />
      </svg>
    )
  }
  if (val === 2) {
    return (
      <svg {...common}>
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      </svg>
    )
  }
  if (val === 3) {
    return (
      <svg {...common}>
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
      </svg>
    )
  }
  return (
    <svg {...common}>
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    </svg>
  )
}

export default function InteractiveDemo() {
  const [val, setVal] = useState(1)
  const [showNowPlaying, setShowNowPlaying] = useState(false)
  const [nowPlayingLabel, setNowPlayingLabel] = useState('Playing simulated audio…')
  const [showHint, setShowHint] = useState(false)

  const hasInteractedRef = useRef(false)
  const currentAudioRef = useRef(null)
  const sectionRef = useRef(null)

  const s = STATES[val]
  const ringOffset = CIRCUMFERENCE - (s.progress / 100) * CIRCUMFERENCE
  const sliderPct = ((val - 1) / 3) * 100
  const sliderBackground = `linear-gradient(to right, #00857A 0%, #00857A ${sliderPct}%, #E2E8F0 ${sliderPct}%, #E2E8F0 100%)`

  const stopAudio = useCallback(() => {
    if (currentAudioRef.current) {
      currentAudioRef.current.pause()
      currentAudioRef.current.currentTime = 0
      currentAudioRef.current = null
    }
    setShowNowPlaying(false)
  }, [])

  const playAudio = useCallback(
    (level) => {
      stopAudio()
      const src = STATES[level].audioSrc
      if (!src) return

      const audio = new Audio(src)
      currentAudioRef.current = audio
      audio.onended = () => setShowNowPlaying(false)
      audio.onerror = () => console.warn(`Audio not found: ${src}`)
      audio.play().catch((e) => console.log('Playback blocked:', e))

      setNowPlayingLabel(
        level === 4 ? 'Crystal clear - Miracle‑Ear active' : 'Playing simulated audio…'
      )
      setShowNowPlaying(true)
    },
    [stopAudio]
  )
  function handleChange(newVal) {
    newVal = parseInt(newVal, 10)
    if (!hasInteractedRef.current) {
      hasInteractedRef.current = true
      setShowHint(false)
    }
    setVal(newVal)
    playAudio(newVal)
  }

  function markInteracted() {
    if (!hasInteractedRef.current) {
      hasInteractedRef.current = true
      setShowHint(false)
    }
  }
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const st = ScrollTrigger.create({
      trigger: section,
      start: 'top 60%',
      once: true,
      onEnter: () => {
        setTimeout(() => {
          if (!hasInteractedRef.current) {
            setShowHint(true)
            setTimeout(() => setShowHint(false), 3500)
          }
        }, 1200)
      },
    })

    return () => st.kill()
  }, [])
  useEffect(() => {
    return () => {
      currentAudioRef.current?.pause()
    }
  }, [])

  return (
    <section className="demo-section" id="demo" ref={sectionRef}>
      <div className="demo-card gsap-fade-up">
        <div className="demo-header">
          <p className="section-label">Interactive Experience</p>
          <h2>Feel the difference in 30 seconds</h2>
          <p>
            Drag the slider from 'Muted' to 'Clear' — see how Miracle-Ear transforms
            everyday moments.
          </p>
        </div>

        <div className="demo-visual">
          <div className="device-stage gsap-scale-in">
            <div
              className={`device-circle${s.isGlowPulse ? ' glow-pulse' : ''}`}
              style={{ boxShadow: s.isGlowPulse ? undefined : s.glow }}
            >
              <svg width="240" height="240" viewBox="0 0 240 240">
                <circle className="ring-track" cx="120" cy="120" r="110" />
                <circle
                  className="ring-fill"
                  cx="120"
                  cy="120"
                  r="110"
                  style={{ strokeDashoffset: ringOffset }}
                />
              </svg>
              {s.showWave && (
                <div
                  className={`sound-wave${s.waveAnimated ? ' sound-wave-animated' : ''}`}
                  style={{ width: '260px', height: '260px' }}
                />
              )}
              {s.showParticles && (
                <>
                  <div
                    className="particle particle-float"
                    style={{ width: '280px', height: '280px' }}
                  />
                  <div
                    className="particle particle-float-d1"
                    style={{ width: '300px', height: '300px' }}
                  />
                </>
              )}

              <div
                className="device-img-wrap"
                style={{
                  filter: `grayscale(${s.grayscale}%) brightness(${s.brightness})`,
                }}
              >
                <img src="hearing-aid.png" alt="Miracle-Ear hearing aid" />
              </div>
            </div>

         
            <div
              className="state-pill"
              style={{ background: s.pillBg, color: s.pillText }}
            >
              {s.label}
            </div>
          </div>
          <div className="controls gsap-fade-up">
            <div className="slider-labels">
              <span>Muted</span>
              <span>Crystal clear</span>
            </div>

            <div className="slider-wrap">
              <input
                type="range"
                id="claritySlider"
                min="1"
                max="4"
                step="1"
                value={val}
                onChange={(e) => handleChange(e.target.value)}
                onClick={markInteracted}
                aria-label="Hearing clarity level"
                style={{ background: sliderBackground }}
              />
              {showHint && (
                <div className="hint-tooltip show">Drag me →</div>
              )}
            </div>
            <div className="slider-marks">
              {MARKS.map((mark) => (
                <button
                  key={mark.val}
                  className={`slider-mark${val === mark.val ? ' active' : ''}`}
                  onClick={() => handleChange(mark.val)}
                >
                  <span>{mark.label}</span>
                  <span className="dot" />
                </button>
              ))}
            </div>
            <div
              className="feedback-box"
              style={{ background: s.fbBg, color: s.fbText }}
            >
              <div
                className="feedback-icon"
                style={{ background: s.iconBg, color: s.iconColor }}
              >
                <AudioIcon val={val} />
              </div>
              <div className="feedback-text">{s.text}</div>
            </div>
            {showNowPlaying && (
              <div className="now-playing">
                <div className="now-playing-dot" />
                <span>{nowPlayingLabel}</span>
              </div>
            )}
          </div>
        </div>

        <div className="demo-note">
          <strong>Tip:</strong> Try listening with headphones for the full experience.
          <br />
          <small>
            Audio samples simulate common hearing scenarios. Individual results vary.
          </small>
        </div>
      </div>
    </section>
  )
}
