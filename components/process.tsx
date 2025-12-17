"use client"

import { useEffect } from "react"

export default function Process() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("visible")
          }, index * 100)
        }
      })
    }, observerOptions)

    document.querySelectorAll(".process-card").forEach((card, index) => {
      const htmlCard = card as HTMLElement
      htmlCard.style.transitionDelay = `${index * 0.1}s`
      observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  const steps = [
    {
      number: "1",
      title: "Discover",
      description: "Deep dive into your challenges, goals, and technical landscape",
    },
    {
      number: "2",
      title: "Architect",
      description: "Design scalable, secure solutions tailored to your needs",
    },
    {
      number: "3",
      title: "Build",
      description: "Agile development with continuous integration and testing",
    },
    {
      number: "4",
      title: "Secure",
      description: "Penetration testing and compliance validation before launch",
    },
    {
      number: "5",
      title: "Deploy",
      description: "Blue-green deployment with rollback readiness and monitoring",
    },
    {
      number: "6",
      title: "Support",
      description: "24/7 support and continuous optimization for your systems",
    },
  ]

  return (
    <section className="process" id="process">
      <div className="section-header">
        <span className="section-label">How We Work</span>
        <h2 className="section-title">Our Battle-Tested Engineering Process</h2>
        <p className="section-subtitle">
          From discovery to deployment, every step optimized for reliability and speed.
        </p>
      </div>
      <div className="process-cards-grid">
        {steps.map((step, i) => (
          <div key={i} className="process-card" data-step-index={i}>
            <div className="process-card-glow"></div>
            <div className="process-card-number-wrapper">
              <div className="process-card-number-bg"></div>
              <div className="process-card-number">{step.number}</div>
            </div>
            <div className="process-card-content">
              <h3 className="process-card-title">{step.title}</h3>
              <p className="process-card-description">{step.description}</p>
            </div>
            <div className="process-card-border"></div>
          </div>
        ))}
      </div>
    </section>
  )
}
