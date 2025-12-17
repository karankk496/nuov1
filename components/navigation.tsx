"use client"

import type React from "react"
import { useEffect, useState } from "react"
import Link from "next/link"

interface NavLink {
  href: string
  label: string
}

const navLinks: ReadonlyArray<NavLink> = [
  { href: "#services", label: "Services" },
  { href: "#tech", label: "Technologies" },
  { href: "#projects", label: "Projects" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
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

  const toggleMobileNav = () => {
    setIsMobileNavOpen((open) => !open)
  }

  const closeMobileNav = () => {
    setIsMobileNavOpen(false)
  }

  return (
    <>
      <nav>
        <Link href="#" className="logo">
          NUO<span>.</span>
        </Link>
        <div className="nav-center">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="nav-actions">
          <a href="/login" className="nav-auth">
            Log in / Sign up
          </a>
          <a href="#contact" className="nav-cta">
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
            <li key={link.href}>
              <a href={link.href} onClick={closeMobileNav}>
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
