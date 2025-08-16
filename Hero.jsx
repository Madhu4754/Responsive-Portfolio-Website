import React from 'react'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <h1>Frontend UI Developer</h1>
          <p>
            I craft accessible, responsive, and high‑performing web interfaces with
            <strong> HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, and <strong>React</strong>.
          </p>
          <div className="cta">
            <a className="btn primary" href="https://github.com/Madhu4754" target="_blank" rel="noreferrer">GitHub</a>
            <a className="btn" href="#projects">View Projects</a>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <svg viewBox="0 0 200 200" width="240" height="240">
            <defs>
              <linearGradient id="g" x1="0" x2="1">
                <stop offset="0%" stopColor="var(--accent)" />
                <stop offset="100%" stopColor="var(--accent-2)" />
              </linearGradient>
            </defs>
            <circle cx="100" cy="100" r="90" fill="url(#g)" opacity="0.15"/>
            <rect x="40" y="40" width="120" height="120" rx="16" fill="url(#g)" opacity="0.35"/>
          </svg>
        </div>
      </div>
    </section>
  )
}
