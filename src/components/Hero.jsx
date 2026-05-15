import { useEffect, useState } from 'react'
import './Hero.css'

const roles = ['Software Engineer', 'Backend Developer', 'API Architect', 'Python Specialist', 'Problem Solver']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)

  // Typewriter effect
  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1))
        setCharIndex(c => c + 1)
      }, 80)
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1))
        setCharIndex(c => c - 1)
      }, 40)
    } else if (deleting && charIndex === 0) {
      setDeleting(false)
      setRoleIndex(i => (i + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, deleting, roleIndex])

  return (
    <section className="hero" id="hero">
      {/* Grid background */}
      <div className="hero-grid" />

      {/* Glow orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />

      <div className="container">
        <div className="hero-content">
          <p className="hero-greeting fade-up" style={{ animationDelay: '0.1s' }}>
            <span className="accent">~/</span> hello world
          </p>

          <h1 className="hero-name fade-up" style={{ animationDelay: '0.3s' }}>
            Alex<br />
            <span className="name-outline">Morgan</span>
          </h1>

          <div className="hero-role fade-up" style={{ animationDelay: '0.5s' }}>
            <span className="role-prefix">$ whoami →</span>
            <span className="role-text">{displayed}</span>
            <span className="cursor-blink">_</span>
          </div>

          <p className="hero-desc fade-up" style={{ animationDelay: '0.7s' }}>
            I build scalable systems and clean APIs. Currently crafting<br />
            backend architecture that powers products people love.
          </p>

          <div className="hero-actions fade-up" style={{ animationDelay: '0.9s' }}>
            <button
              className="btn-primary"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              view my work
            </button>
            <button
              className="btn-ghost"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              get in touch →
            </button>
          </div>

          <div className="hero-stats fade-up" style={{ animationDelay: '1.1s' }}>
            {[
              { num: '3+', label: 'years experience' },
              { num: '20+', label: 'projects shipped' },
              { num: '99%', label: 'uptime obsession' },
            ].map(s => (
              <div className="stat" key={s.label}>
                <span className="stat-num">{s.num}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Side code decoration */}
        <div className="hero-code fade-up" style={{ animationDelay: '0.6s' }}>
          <div className="code-window">
            <div className="code-header">
              <span className="dot red" /><span className="dot yellow" /><span className="dot green" />
              <span className="code-filename">profile.py</span>
            </div>
            <pre className="code-body">{`class Engineer:
  name = "Alex Morgan"
  location = "Remote 🌍"
  
  skills = [
    "Python", "Django",
    "FastAPI", "PostgreSQL",
    "Docker", "AWS",
    "React", "TypeScript"
  ]
  
  passion = "Clean code &
             fast systems"
  
  def available(self):
    return True  # hire me!`}
            </pre>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-hint">
        <div className="scroll-line" />
        <span>scroll</span>
      </div>
    </section>
  )
}
