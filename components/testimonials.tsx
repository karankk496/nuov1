"use client"

import type React from "react"
import { useEffect } from "react"

interface Testimonial {
  quote: string
  author: string
  role: string
  avatar: string
}

const testimonials: ReadonlyArray<Testimonial> = [
  {
    quote:
      "NUO's team brought fintech-level rigor to our healthcare platform. Their understanding of security and compliance was exceptional, and the system has been flawless in production.",
    author: "Sarah K.",
    role: "CTO, Healthcare Tech Company",
    avatar: "SK",
  },
  {
    quote:
      "The payment infrastructure they built handles our peak loads without breaking a sweat. True banking-grade performance at a fraction of what we expected to pay.",
    author: "Michael R.",
    role: "VP Engineering, E-commerce Platform",
    avatar: "MR",
  },
  {
    quote:
      "From discovery to deployment, NUO operated like an extension of our team. Their blockchain expertise and security-first approach gave us confidence in launching our digital asset platform.",
    author: "Amanda L.",
    role: "Founder, Web3 Startup",
    avatar: "AL",
  },
]

const Testimonials: React.FC = () => {
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

    document.querySelectorAll(".testimonial-card").forEach((card, index) => {
      const htmlCard = card as HTMLElement
      htmlCard.style.transitionDelay = `${index * 0.1}s`
      observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="testimonials">
      <div className="section-header">
        <span className="section-label">Client Voices</span>
        <h2 className="section-title">What Our Partners Say</h2>
        <p className="section-subtitle">Building lasting relationships through exceptional delivery.</p>
      </div>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, i) => (
          <div key={i} className="testimonial-card">
            <div className="testimonial-stars">
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
            </div>
            <p className="testimonial-quote">{testimonial.quote}</p>
            <div className="testimonial-author">
              <div className="author-avatar">{testimonial.avatar}</div>
              <div className="author-info">
                <h4>{testimonial.author}</h4>
                <p>{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
