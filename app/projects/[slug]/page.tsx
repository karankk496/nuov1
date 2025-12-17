"use client"

import { use } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { getProjectBySlug, projectsData } from "@/lib/projects-data"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = use(params)
  const router = useRouter()
  const project = getProjectBySlug(slug)

  const handleBackToProjects = () => {
    router.push("/#projects")
    // Smooth scroll to projects section after navigation
    setTimeout(() => {
      const projectsSection = document.getElementById("projects")
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth" })
      }
    }, 100)
  }

  if (!project) {
    return (
      <>
        <Navigation />
        <div className="project-not-found">
          <div className="container">
            <h1>Project Not Found</h1>
            <p>The project you're looking for doesn't exist.</p>
            <Link href="/#projects" className="btn-primary">
              Back to Projects
            </Link>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navigation />
      <div className="project-detail-page">
        <div className="project-detail-header">
          <div className="container">
            <button onClick={handleBackToProjects} className="back-link" type="button">
              ← Back to Projects
            </button>
            <div className="project-detail-hero">
              <div className="project-detail-hero-content">
                <div className="project-status-badge-large" data-status={project.status.toLowerCase()}>
                  <span className="status-dot"></span>
                  {project.status}
                </div>
                <h1 className="project-detail-title">{project.title}</h1>
                {project.subtitle && <p className="project-detail-subtitle">{project.subtitle}</p>}
                <p className="project-detail-outcome">{project.outcome}</p>
                <div className="project-detail-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-detail-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="project-detail-icon-large">
                <div className="project-icon-glow"></div>
                <div className="project-icon-main">{project.icon}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="project-detail-content">
          <div className="container">
            <div className="project-detail-main">
              <div className="project-description-section">
                <h2>About This Project</h2>
                <p className="project-description-text">{project.description}</p>
                {project.fullDescription && <p className="project-description-text">{project.fullDescription}</p>}
              </div>

              {project.benefits && project.benefits.length > 0 && (
                <div className="project-benefits-section">
                  <h2>Benefits</h2>
                  <div className="benefits-grid">
                    {project.benefits.map((benefit, i) => (
                      <div key={i} className="benefit-item">
                        <div className="benefit-icon">✓</div>
                        <p>{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {project.modules && project.modules.length > 0 && (
                <div className="project-modules-section">
                  <h2>Key Modules</h2>
                  <div className="modules-grid">
                    {project.modules.map((module, i) => (
                      <div key={i} className="module-card">
                        <div className="module-icon">{module.icon}</div>
                        <h3>{module.title}</h3>
                        <p>{module.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="project-features-section">
                <h2>Key Features</h2>
                <div className="features-list">
                  {project.features.map((feature, i) => (
                    <div key={i} className="feature-item-detailed">
                      <span className="feature-icon-detailed">→</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="project-detail-cta">
          <div className="container">
            <h2>Ready to Get Started?</h2>
            <p>Contact us to learn more about this solution and how it can benefit your business.</p>
            <div className="cta-buttons">
              <Link href="/#contact" className="btn-primary">
                Get in Touch
              </Link>
              <button onClick={handleBackToProjects} className="btn-secondary" type="button">
                View All Projects
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

