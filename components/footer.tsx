"use client"

import type React from "react"

export default function Footer() {
  const navigateToSection = (e: React.MouseEvent<HTMLAnchorElement>, path: string, sectionId: string) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      window.history.pushState(null, "", path)
    }
  }

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: "smooth" })
    window.history.pushState(null, "", "/")
  }

  return (
    <footer>
      <div className="footer-content">
        <div className="footer-brand">
          <a href="/" className="logo" onClick={scrollToTop}>
            NUO<span>.</span>
          </a>
          <p>Empowering enterprises with next-gen digital solutions. Banking-grade engineering for every industry.</p>
        </div>
        <div className="footer-links">
          <h4>Services</h4>
          <ul>
            <li>
              <a href="/services" onClick={(e) => navigateToSection(e, "/services", "services")}>Custom Software</a>
            </li>
            <li>
              <a href="/services" onClick={(e) => navigateToSection(e, "/services", "services")}>Blockchain & Web3</a>
            </li>
            <li>
              <a href="/services" onClick={(e) => navigateToSection(e, "/services", "services")}>Mobile Apps</a>
            </li>
            <li>
              <a href="/services" onClick={(e) => navigateToSection(e, "/services", "services")}>UI/UX Design</a>
            </li>
            <li>
              <a href="/services" onClick={(e) => navigateToSection(e, "/services", "services")}>AI & Analytics</a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Company</h4>
          <ul>
            <li>
              <a href="/about" onClick={(e) => navigateToSection(e, "/about", "about")}>About Us</a>
            </li>
            <li>
              <a href="/case-studies" onClick={(e) => navigateToSection(e, "/case-studies", "case-studies")}>Case Studies</a>
            </li>
            <li>
              <a href="/projects" onClick={(e) => navigateToSection(e, "/projects", "projects")}>Projects</a>
            </li>
            <li>
              <a href="/careers">Careers</a>
            </li>
            <li>
              <a href="/contact" onClick={(e) => navigateToSection(e, "/contact", "contact")}>Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Resources</h4>
          <ul>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/docs">Documentation</a>
            </li>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms">Terms of Service</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 NUO Technologies. All rights reserved.</p>
        <div className="social-links">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
            in
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="social-link">
            𝕏
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
            ◉
          </a>
        </div>
      </div>
    </footer>
  )
}
