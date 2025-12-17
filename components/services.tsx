"use client"

import { useEffect } from "react"

export default function Services() {
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

    document.querySelectorAll(".service-card").forEach((card, index) => {
      const htmlCard = card as HTMLElement
      htmlCard.style.transitionDelay = `${index * 0.1}s`
      observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: "⚡",
      title: "Custom Software Development",
      description:
        "We build bespoke enterprise platforms, internal tools, and complex workflow automation systems optimized for performance and reliability. Our solutions integrate seamlessly with legacy systems and modern APIs while maintaining enterprise-grade security standards.",
    },
    {
      icon: "🔗",
      title: "Blockchain & Web3 Development",
      description:
        "Secure smart contracts, dApps, and decentralized solutions for both public and private chains. We bring a compliance-first mindset and experience with financial-grade cryptography to every blockchain initiative, ensuring trust, transparency, and automation.",
    },
    {
      icon: "📱",
      title: "Mobile App Development",
      description:
        "Cross-platform delivery with Flutter and React Native, plus native Swift and Kotlin when performance demands it. We specialize in real-time data synchronization, offline readiness, and smooth experiences that perform under load.",
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description:
        "We transform complex data into intuitive dashboards, operations consoles, and analytics tools. Through rigorous usability testing, thoughtful information architecture, and visual clarity, we ensure users can make data-driven decisions effortlessly.",
    },
    {
      icon: "🤖",
      title: "AI & Data Analytics",
      description:
        "Turn raw data into automation and predictive insights. From recommendation engines and demand forecasting to anomaly detection and operational analytics, we build ML-powered solutions that drive measurable business outcomes.",
    },
    {
      icon: "🛡️",
      title: "DevOps & Cloud Security",
      description:
        "Secure, automated CI/CD pipelines, cloud infrastructure hardening, comprehensive monitoring, and incident response readiness. Built on AWS, Azure, and Google Cloud with compliance-ready practices derived from regulated financial systems.",
    },
  ]

  return (
    <section className="services" id="services">
      <div className="section-header">
        <span className="section-label">What We Do</span>
        <h2 className="section-title">Engineering Excellence Across Every Domain</h2>
        <p className="section-subtitle">
          From custom platforms to blockchain solutions, we deliver secure, scalable technology built on fintech-grade
          standards.
        </p>
      </div>
      <div className="services-grid">
        {services.map((service, i) => (
          <div key={i} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
