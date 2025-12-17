export default function TrustedBy() {
  const clients = [
    "TechCorp",
    "FinanceHub",
    "DataFlow",
    "SecureNet",
    "CloudPeak",
    "InnovateLab",
    "ScaleUp",
    "GlobalTrade",
  ]

  return (
    <section className="trusted-by">
      <p className="trusted-label">Trusted by Industry Leaders</p>
      <div className="logo-marquee">
        {[...clients, ...clients].map((client, i) => (
          <div key={i} className="client-logo">
            {client}
          </div>
        ))}
      </div>
    </section>
  )
}
