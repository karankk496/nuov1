"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

const API_URL = "http://localhost:3000"

export default function Login() {
  const router = useRouter()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Login failed")
      }

      // Store user data (you can use localStorage, cookies, or state management)
      localStorage.setItem("user", JSON.stringify(data.user))
      router.push("/dashboard")
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError("An error occurred")
      }
    } finally {
      setLoading(false)
    }
  }

  // Google login
  const handleGoogleLogin = () => {
    window.location.href = `${API_URL}/auth/google`
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-logo">
          <a href="/">NUO<span>.</span></a>
        </div>
        
        <h2 className="login-title">Welcome Back</h2>
        <p className="login-subtitle">Sign in to continue to your account</p>

        {error && <p className="login-error">{error}</p>}

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@company.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••"
            />
          </div>

          <div className="forgot-password">
            <a href="/forgot-password">Forgot password?</a>
          </div>

          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <div className="divider">or continue with</div>

        <button className="google-btn" onClick={handleGoogleLogin} type="button">
          <img
            src="https://developers.google.com/identity/images/g-logo.png"
            alt="Google"
          />
          Google
        </button>

        <p className="login-footer">
          Don&apos;t have an account? <a href="/register">Create one</a>
        </p>
      </div>
    </div>
  )
}
