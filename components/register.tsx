"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

const API_URL = "http://localhost:3000"

export default function Register() {
  const router = useRouter()

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [passwordError, setPasswordError] = useState("")

  // Password validation
  const validatePassword = (pass: string) => {
    if (pass.length < 8) {
      return "Password must be at least 8 characters"
    }
    if (!/[A-Z]/.test(pass)) {
      return "Password must contain at least one uppercase letter"
    }
    if (!/[a-z]/.test(pass)) {
      return "Password must contain at least one lowercase letter"
    }
    if (!/[0-9]/.test(pass)) {
      return "Password must contain at least one number"
    }
    if (!/[!@#$%^&*]/.test(pass)) {
      return "Password must contain at least one special character (!@#$%^&*)"
    }
    return ""
  }

  const handlePasswordChange = (value: string) => {
    setPassword(value)
    const validationError = validatePassword(value)
    setPasswordError(validationError)
    
    // Also check confirm password match if it has a value
    if (confirmPassword && value !== confirmPassword) {
      setError("Passwords do not match")
    } else {
      setError("")
    }
  }

  const handleConfirmPasswordChange = (value: string) => {
    setConfirmPassword(value)
    if (value !== password) {
      setError("Passwords do not match")
    } else {
      setError("")
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Validate all fields
    if (!firstName.trim() || !lastName.trim()) {
      setError("Please enter your full name")
      return
    }

    const passValidation = validatePassword(password)
    if (passValidation) {
      setPasswordError(passValidation)
      return
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match")
      return
    }

    setLoading(true)
    setError("")

    try {
      const response = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Registration failed")
      }

      // Redirect to login on success
      router.push("/login?registered=true")
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



  // Password strength indicator
  const getPasswordStrength = () => {
    if (!password) return { strength: 0, label: "", color: "" }
    
    let strength = 0
    if (password.length >= 8) strength++
    if (/[A-Z]/.test(password)) strength++
    if (/[a-z]/.test(password)) strength++
    if (/[0-9]/.test(password)) strength++
    if (/[!@#$%^&*]/.test(password)) strength++

    if (strength <= 2) return { strength, label: "Weak", color: "#ff6b6b" }
    if (strength <= 3) return { strength, label: "Fair", color: "#ffa502" }
    if (strength <= 4) return { strength, label: "Good", color: "#7bed9f" }
    return { strength, label: "Strong", color: "#00d4ff" }
  }

  const passwordStrength = getPasswordStrength()

  return (
    <div className="login-container">
      <div className="login-card register-card">
        <div className="login-logo">
          <a href="/">NUO<span>.</span></a>
        </div>
        
        <h2 className="login-title">Create Account</h2>
        <p className="login-subtitle">Join us and start building something amazing</p>

        {error && <p className="login-error">{error}</p>}

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                placeholder="John"
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                placeholder="Doe"
              />
            </div>
          </div>

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
              onChange={(e) => handlePasswordChange(e.target.value)}
              required
              placeholder="••••••••"
            />
            {password && (
              <div className="password-strength">
                <div className="strength-bars">
                  {[1, 2, 3, 4, 5].map((level) => (
                    <div
                      key={level}
                      className={`strength-bar ${level <= passwordStrength.strength ? "active" : ""}`}
                      style={{ backgroundColor: level <= passwordStrength.strength ? passwordStrength.color : "" }}
                    />
                  ))}
                </div>
                <span className="strength-label" style={{ color: passwordStrength.color }}>
                  {passwordStrength.label}
                </span>
              </div>
            )}
            {passwordError && <p className="field-error">{passwordError}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => handleConfirmPasswordChange(e.target.value)}
              required
              placeholder="••••••••"
              className={confirmPassword && password !== confirmPassword ? "input-error" : confirmPassword && password === confirmPassword ? "input-success" : ""}
            />
            {confirmPassword && password === confirmPassword && (
              <span className="input-check">✓</span>
            )}
          </div>

          <button type="submit" className="login-btn" disabled={loading || !!passwordError || password !== confirmPassword}>
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>      

        <p className="login-footer">
          Already have an account? <a href="/login">Sign in</a>
        </p>
      </div>
    </div>
  )
}

