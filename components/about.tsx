export default function About() {
  const stats = [
    { value: "50+", label: "Projects Delivered" },
    { value: "15+", label: "Enterprise Clients" },
    { value: "99.9%", label: "Uptime SLA" },
    { value: "24/7", label: "Support Available" },
  ]

  return (
    <section className="about" id="about">
      <div className="about-content">
        <div className="about-text">
          <span className="section-label">Who We Are</span>
          <h2 className="section-title">Born in Fintech, Built for Every Industry</h2>
          <p>
            NUO Technologies was founded by engineers who cut their teeth in the demanding world of financial
            technology—where security isn't optional, downtime isn't acceptable, and compliance is non-negotiable.
          </p>
          <p>
            We realized that <strong>every industry deserves banking-grade engineering</strong>. Whether you're in
            healthcare, logistics, retail, or enterprise SaaS, your users expect the same reliability, security, and
            performance that fintech has perfected.
          </p>
          <p>
            Today, we bring that fintech-forged discipline to companies across sectors, building secure, scalable,
            compliant systems that power mission-critical operations.
          </p>
        </div>
        <div className="about-stats">
          {stats.map((stat, i) => (
            <div key={i} className="stat-item">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
