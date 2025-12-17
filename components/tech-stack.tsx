"use client"

import { useState } from "react"

type Category = "all" | "frontend" | "backend" | "database" | "cloud"

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState<Category>("all")

  const categories = [
    { id: "all" as Category, label: "All" },
    { id: "frontend" as Category, label: "Frontend" },
    { id: "backend" as Category, label: "Backend" },
    { id: "database" as Category, label: "Database" },
    { id: "cloud" as Category, label: "Cloud" },
  ]

  const technologies = [
    { icon: "R", name: "React.js", category: "frontend" as Category },
    { icon: "A", name: "Angular", category: "frontend" as Category },
    { icon: "V", name: "Vue.js", category: "frontend" as Category },
    { icon: "N", name: "Node.js", category: "backend" as Category },
    { icon: "Py", name: "Python", category: "backend" as Category },
    { icon: "J", name: "Java", category: "backend" as Category },
    { icon: "Go", name: "GoLang", category: "backend" as Category },
    { icon: "O", name: "Oracle", category: "database" as Category },
    { icon: "M", name: "MongoDB", category: "database" as Category },
    { icon: "P", name: "PostgreSQL", category: "database" as Category },
    { icon: "R", name: "Redis", category: "database" as Category },
    { icon: "☁️", name: "AWS", category: "cloud" as Category },
    { icon: "☁️", name: "Azure", category: "cloud" as Category },
    { icon: "☁️", name: "Google Cloud", category: "cloud" as Category },
  ]

  const filteredTech =
    activeCategory === "all" ? technologies : technologies.filter((tech) => tech.category === activeCategory)

  return (
    <section className="tech-stack" id="tech">
      <div className="section-header">
        <span className="section-label">Our Arsenal</span>
        <h2 className="section-title">Battle-Tested Technology Stack</h2>
        <p className="section-subtitle">We leverage proven technologies to build robust, scalable solutions.</p>
      </div>
      <div className="tech-filters">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`tech-filter ${activeCategory === cat.id ? "active" : ""}`}
            onClick={() => setActiveCategory(cat.id)}
            suppressHydrationWarning
          >
            {cat.label}
          </button>
        ))}
      </div>
      <div className="tech-grid">
        {filteredTech.map((tech, i) => (
          <div key={i} className="tech-pill">
            <span className="icon">{tech.icon}</span>
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
