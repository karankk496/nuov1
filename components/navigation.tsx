"use client"

import type React from "react"
import { useEffect, useState } from "react"
import Link from "next/link"

interface NavLink {
  path: string
  sectionId: string
  label: string
}

const navLinks: ReadonlyArray<NavLink> = [
  { path: "/services", sectionId: "services", label: "Services" },
  { path: "/technologies", sectionId: "tech", label: "Technologies" },
  { path: "/projects", sectionId: "projects", label: "Projects" },
  { path: "/case-studies", sectionId: "case-studies", label: "Case Studies" },
  { path: "/about", sectionId: "about", label: "About" },
  { path: "/contact", sectionId: "contact", label: "Contact" },
]

const Navigation: React.FC = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector("nav")
      if (!nav) return

      if (window.scrollY > 50) {
        nav.style.padding = "0.75rem 4%"
        nav.style.background = "rgba(10, 14, 26, 0.95)"
      } else {
        nav.style.padding = "1rem 4%"
        nav.style.background = "rgba(10, 14, 26, 0.8)"
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Handle initial load - scroll to section if URL matches a nav path
  useEffect(() => {
    const currentPath = window.location.pathname
    const matchingLink = navLinks.find((link) => link.path === currentPath)
    if (matchingLink) {
      const element = document.getElementById(matchingLink.sectionId)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" })
        }, 100)
      }
    }
  }, [])

  const toggleMobileNav = () => {
    setIsMobileNavOpen((open) => !open)
  }

  const closeMobileNav = () => {
    setIsMobileNavOpen(false)
  }

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: NavLink) => {
    e.preventDefault()
    const element = document.getElementById(link.sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      window.history.pushState(null, "", link.path)
    }
  }

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: "smooth" })
    window.history.pushState(null, "", "/")
  }

  return (
    <>
      <nav>
        <a href="/" className="logo" onClick={handleLogoClick}>
          NUO<span>.</span>
        </a>
        <div className="nav-center">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.path}>
                <a href={link.path} onClick={(e) => handleNavClick(e, link)}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="nav-actions">
          <a href="/login" className="nav-auth">
            Log in / Sign up
          </a>
          <a href="/contact" className="nav-cta" onClick={(e) => handleNavClick(e, navLinks[5])}>
            Get Started
          </a>
          <button
            type="button"
            className="nav-toggle"
            aria-label={isMobileNavOpen ? "Close navigation" : "Open navigation"}
            onClick={toggleMobileNav}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
      <div
        className={`mobile-nav-backdrop${isMobileNavOpen ? " open" : ""}`}
        onClick={closeMobileNav}
      />
      <aside className={`mobile-nav${isMobileNavOpen ? " open" : ""}`}>
        <div className="mobile-nav-header">
          <button
            type="button"
            className="mobile-nav-close"
            aria-label="Close navigation"
            onClick={closeMobileNav}
          >
            <span />
            <span />
          </button>
        </div>
        <ul className="mobile-nav-links">
          {navLinks.map((link) => (
            <li key={link.path}>
              <a href={link.path} onClick={(e) => { handleNavClick(e, link); closeMobileNav(); }}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </>
  )
}

export default Navigation
