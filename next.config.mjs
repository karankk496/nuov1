/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      { source: "/services", destination: "/" },
      { source: "/technologies", destination: "/" },
      { source: "/projects", destination: "/" },
      { source: "/case-studies", destination: "/" },
      { source: "/about", destination: "/" },
      { source: "/contact", destination: "/" },
    ]
  },
}

export default nextConfig
