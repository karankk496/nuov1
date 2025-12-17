"use client"

import type React from "react"

export default function LaunchScreen() {
  const logoLetters = ["N", "U", "O"]
  const taglineWords = [
    { text: "Banking-Grade", delay: "0.8s", highlight: false },
    { text: "Engineering", delay: "1s", highlight: true },
    { text: "for Every Industry", delay: "1.2s", highlight: false },
  ]

  return (
    <div className="launch-screen">
      <div className="launch-bg">
        <div className="grid-lines"></div>
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-2"></div>
        <div className="glow-orb orb-3"></div>
      </div>
      <div className="launch-content">
        <div className="logo-container">
          {logoLetters.map((letter, i) => (
            <div key={letter} className="logo-letter" style={{ "--delay": `${0.1 * (i + 1)}s` } as React.CSSProperties}>
              <span className="letter-main">{letter}</span>
              <span className="letter-shadow">{letter}</span>
            </div>
          ))}
          <div className="logo-dot" style={{ "--delay": "0.4s" } as React.CSSProperties}>
            <span className="dot-main">.</span>
            <div className="dot-ring"></div>
            <div className="dot-ring ring-2"></div>
          </div>
        </div>
        <div className="launch-subtitle">
          <div className="subtitle-line"></div>
          <span className="subtitle-text">TECHNOLOGIES</span>
          <div className="subtitle-line"></div>
        </div>
        <div className="launch-tagline-new">
          {taglineWords.map((word, i) => (
            <span
              key={i}
              className={`tag-word ${word.highlight ? "highlight" : ""}`}
              style={{ "--delay": word.delay } as React.CSSProperties}
            >
              {word.text}
            </span>
          ))}
        </div>
        <div className="launch-progress">
          <div className="progress-track">
            <div className="progress-fill"></div>
            <div className="progress-glow"></div>
          </div>
          <div className="progress-text">
            <span className="loading-text">Initializing</span>
            <span className="loading-dots">
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </span>
          </div>
        </div>
      </div>
      <div className="launch-corners">
        <div className="corner corner-tl"></div>
        <div className="corner corner-tr"></div>
        <div className="corner corner-bl"></div>
        <div className="corner corner-br"></div>
      </div>
    </div>
  )
}
