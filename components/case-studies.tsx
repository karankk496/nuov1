"use client"

import { useEffect } from "react"

export default function CaseStudies() {
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
          }, index * 150)
        }
      })
    }, observerOptions)

    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll("[data-count]")
            counters.forEach((counter) => {
              const target = Number.parseInt(counter.getAttribute("data-count") || "0")
              const duration = 2000
              const start = performance.now()

              function updateCounter(currentTime: number) {
                const elapsed = currentTime - start
                const progress = Math.min(elapsed / duration, 1)
                const easeOut = 1 - Math.pow(1 - progress, 3)
                counter.textContent = Math.floor(target * easeOut).toString()

                if (progress < 1) {
                  requestAnimationFrame(updateCounter)
                } else {
                  counter.textContent = target.toString()
                }
              }

              requestAnimationFrame(updateCounter)
            })
            counterObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 },
    )

    document.querySelectorAll(".case-study-card").forEach((card, index) => {
      const htmlCard = card as HTMLElement
      htmlCard.style.transitionDelay = `${index * 0.15}s`
      observer.observe(card)
      counterObserver.observe(card)
    })

    return () => {
      observer.disconnect()
      counterObserver.disconnect()
    }
  }, [])

  const cases = [
    {
      icon: "⚡",
      title: "Low-Latency Data Processing System",
      description:
        "Architected a high-throughput event processing system capable of handling millions of transactions with sub-15ms latency, derived from high-frequency trading infrastructure.",
      metrics: [
        { count: 12, label: "ms Latency" },
        { count: 10, label: "M Events/sec" },
      ],
    },
    {
      icon: "🔐",
      title: "Secure Digital Asset Platform",
      description:
        "Built a multi-signature custody solution with HSM integration, cold storage protocols, and comprehensive audit trails for institutional-grade digital asset management.",
      metrics: [
        { count: 0, label: "Assets Secured", prefix: "$2B+" },
        { count: 0, label: "Security Breaches" },
      ],
    },
    {
      icon: "🌐",
      title: "Global Payment Orchestration Layer",
      description:
        "Unified payment infrastructure connecting multiple gateways, currencies, and compliance frameworks into a single, resilient orchestration layer with intelligent routing.",
      metrics: [
        { count: 40, label: "Countries" },
        { count: 99, label: "% Uptime" },
      ],
    },
    {
      icon: "📊",
      title: "Regulatory Compliance Dashboard",
      description:
        "Real-time compliance monitoring system with automated reporting, anomaly detection, and audit-ready documentation generation for multi-jurisdictional requirements.",
      metrics: [
        { count: 75, label: "% Time Saved" },
        { count: 100, label: "% Accuracy" },
      ],
    },
  ]

  return (
    <section className="case-studies" id="case-studies">
      <div className="section-header">
        <span className="section-label">Success Stories</span>
        <h2 className="section-title">Proven Results, Measurable Impact</h2>
        <p className="section-subtitle">Industry-agnostic solutions derived from fintech-grade engineering.</p>
      </div>
      <div className="case-studies-grid">
        {cases.map((caseStudy, i) => (
          <div key={i} className="case-study-card">
            <div className="case-header">
              <div>
                <div className="case-icon-bg">
                  <span className="case-icon">{caseStudy.icon}</span>
                </div>
                <h3>{caseStudy.title}</h3>
                <p>{caseStudy.description}</p>
              </div>
              <div className="case-metrics">
                {caseStudy.metrics.map((metric, j) => (
                  <div key={j} className="metric">
                    <span className="metric-value">
                      {metric.prefix || ""}
                      <span data-count={metric.count}>0</span>
                      {metric.label.includes("%") && "%"}
                      {metric.label.includes("M") && "M"}
                    </span>
                    <span className="metric-label">{metric.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
