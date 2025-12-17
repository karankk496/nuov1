"use client"

import { useEffect, useState } from "react"
import LaunchScreen from "@/components/launch-screen"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import TrustedBy from "@/components/trusted-by"
import Services from "@/components/services"
import TechStack from "@/components/tech-stack"
import Projects from "@/components/projects"
import CaseStudies from "@/components/case-studies"
import Process from "@/components/process"
import Testimonials from "@/components/testimonials"
import About from "@/components/about"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  const [showLaunch, setShowLaunch] = useState(true)

  useEffect(() => {
    // Check if launch screen has already been shown in this session
    const launchShown = sessionStorage.getItem("launchScreenShown")

    if (launchShown === "true") {
      // Skip launch screen if already shown
      setShowLaunch(false)
      document.body.style.overflow = "auto"
      return
    }

    // Mark launch screen as shown
    sessionStorage.setItem("launchScreenShown", "true")

    const launchStartTime = Date.now()
    const MINIMUM_LAUNCH_DURATION = 3000

    function hideLaunchScreen() {
      const elapsed = Date.now() - launchStartTime
      const remaining = Math.max(0, MINIMUM_LAUNCH_DURATION - elapsed)

      setTimeout(() => {
        setShowLaunch(false)
        document.body.style.overflow = "auto"
      }, remaining)
    }

    if (document.readyState === "complete") {
      hideLaunchScreen()
    } else {
      window.addEventListener("load", hideLaunchScreen)
    }

    document.body.style.overflow = "hidden"

    return () => {
      window.removeEventListener("load", hideLaunchScreen)
    }
  }, [])

  return (
    <>
      {showLaunch && <LaunchScreen />}
      <Navigation />
      <Hero />
      <TrustedBy />
      <Services />
      <TechStack />
      <Projects />
      <CaseStudies />
      <Process />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </>
  )
}
