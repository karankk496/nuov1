"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

type Industry = "all" | "fintech"

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<Industry>("all")

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const card = entry.target as HTMLElement
          const index = parseInt(card.dataset.index || "0")
          setTimeout(() => {
            card.classList.add("visible")
          }, index * 80)
        }
      })
    }, observerOptions)

    document.querySelectorAll(".project-card").forEach((card) => {
      observer.observe(card)
    })

    return () => observer.disconnect()
  }, [activeFilter])

  const filters = [
    { id: "all" as Industry, label: "All Projects" },
    { id: "fintech" as Industry, label: "Fintech" },
  ]

  const projects = [
    {
      slug: "applite-xgen-banking-solution",
      industry: "fintech" as Industry,
      status: "Live",
      title: "Applite - XGen Banking Solution",
      outcome: "Modular microfinance platform enabling rapid product launches and seamless operations",
      tags: ["Microservices", "API-First", "Cloud & On-Premise"],
      features: [
        "Client & Group Management with unique customer identification",
        "Centralized Product Configuration for rapid market launches",
        "Integrated Accounting Engine meeting regulatory requirements",
        "Credit Risk Management with scoring tools",
        "NPA Management with built-in collection module",
        "Digitalization tools with SMS & Mobile App integration",
        "Anytime anywhere banking through multiple channels",
        "Real-time customer information & insightful reports",
        "Open API ecosystem for seamless integration",
      ],
    },
    {
      slug: "predixarena-knowledge-meets-opportunity",
      industry: "fintech" as Industry,
      status: "In Development",
      title: "PredixArena \u2013 Where Knowledge Meets Opportunity",
      outcome: "Prediction and insights platform where community intelligence powers better decisions.",
      tags: ["Prediction Markets", "Analytics", "Community"],
      features: [
        "Make informed predictions on politics, sports, and global events",
        "Advanced analytics and tools tailored for analysts and power users",
        "Real-time updates on event outcomes and market movements",
        "Community-driven insights that surface the wisdom of the crowd",
        "Transparent environment where knowledge meets opportunity",
      ],
    },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.industry === activeFilter)

  return (
    <section className="projects" id="projects">
      <div className="section-header">
        <span className="section-label">Our Work</span>
        <h2 className="section-title">Projects Powering Real-World Impact</h2>
        <p className="section-subtitle">Live and in-progress solutions built on fintech-grade engineering standards.</p>
      </div>
      <div className="project-filters">
        {filters.map((filter) => (
          <button
            key={filter.id}
            className={`project-filter ${activeFilter === filter.id ? "active" : ""}`}
            onClick={() => setActiveFilter(filter.id)}
            suppressHydrationWarning
          >
            {filter.label}
          </button>
        ))}
      </div>
      <div className="projects-grid">
        {filteredProjects.map((project, i) => (
          <Link key={i} href={`/projects/${project.slug}`} className="project-card-link">
            <div className="project-card" data-industry={project.industry} data-index={i}>
              <div className="project-card-glow"></div>
              <div className="project-header">
                <div className="project-icon-wrapper">
                  <div className="project-icon-bg"></div>
                  <div className="project-icon">💰</div>
                </div>
                <div className="project-status-badge" data-status={project.status.toLowerCase()}>
                  <span className="status-dot"></span>
                  {project.status}
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-outcome">{project.outcome}</p>
                <div className="project-tags">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="project-tag" data-tag-index={j}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="project-features">
                  {project.features.slice(0, 4).map((feature, j) => (
                    <div key={j} className="feature-item" data-feature-index={j}>
                      <span className="feature-icon">→</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                  {project.features.length > 4 && (
                    <div className="feature-more">+{project.features.length - 4} more features</div>
                  )}
                </div>
              </div>
              <div className="project-border-animation"></div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
