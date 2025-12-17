"use client"

import type React from "react"

import { useState } from "react"

export default function Contact() {
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setSubmitting(false)
    setSubmitted(true)

    setTimeout(() => {
      setSubmitted(false)
      ;(e.target as HTMLFormElement).reset()
    }, 3000)
  }

  return (
    <section className="contact" id="contact">
      <div className="section-header">
        <span className="section-label">Get In Touch</span>
        <h2 className="section-title">{"Let's Build Something Exceptional"}</h2>
        <p className="section-subtitle">Tell us about your challenge. {"We'll"} respond within 24 hours.</p>
      </div>
      <div className="contact-grid">
        <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" required placeholder="John Doe" suppressHydrationWarning />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" required placeholder="john@company.com" suppressHydrationWarning />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="company">Company</label>
              <input type="text" id="company" name="company" placeholder="Your Company Inc." suppressHydrationWarning />
            </div>
            <div className="form-group">
              <label htmlFor="budget">Project Budget (Optional)</label>
              <select id="budget" name="budget" suppressHydrationWarning>
                <option value="">Select Range</option>
                <option value="under-50k">Under $50K</option>
                <option value="50k-100k">$50K - $100K</option>
                <option value="100k-250k">$100K - $250K</option>
                <option value="250k-plus">$250K+</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="project">Project Description</label>
            <textarea
              id="project"
              name="project"
              rows={5}
              required
              placeholder="Tell us about your project, technical challenges, and goals..."
              suppressHydrationWarning
            ></textarea>
          </div>
          <button type="submit" className="submit-btn" disabled={submitting || submitted} suppressHydrationWarning>
            {submitted ? "✓ Message Sent!" : submitting ? "Sending..." : "Send Message"}
          </button>
        </form>
        <div className="contact-info">
          <h3>Ready to Start Your Project?</h3>
          <p>
            Whether {"you're"} building from scratch or modernizing existing systems, our team brings fintech-grade
            engineering to every project.
          </p>
          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-item-icon">📧</div>
              <div>
                <h4>Email Us</h4>
                <p>contact@nuotech.com</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-item-icon">📞</div>
              <div>
                <h4>Call Us</h4>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-item-icon">📍</div>
              <div>
                <h4>Visit Us</h4>
                <p>123 Tech Street, San Francisco, CA 94105</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
