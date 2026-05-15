import { useState, useEffect } from 'react'
import './Navbar.css'

const links = ['about', 'skills', 'projects', 'contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setActive(id)
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <span className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="logo-bracket">[</span>
          <span className="logo-text">dev</span>
          <span className="logo-bracket">]</span>
        </span>
        <ul className="nav-links">
          {links.map((link, i) => (
            <li key={link}>
              <button
                onClick={() => scrollTo(link)}
                className={active === link ? 'active' : ''}
              >
                <span className="link-num">0{i + 1}.</span>
                {link}
              </button>
            </li>
          ))}
        </ul>
        <a
          href="/resume.pdf"
          className="nav-cta"
          target="_blank"
          rel="noreferrer"
        >
          resume.pdf
        </a>
      </div>
    </nav>
  )
}
