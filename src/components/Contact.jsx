import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const email = 'alex.morgan@email.com'

  const copyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-label">
          <span className="label-num">04.</span>
          <span className="label-text">get in touch</span>
          <div className="label-line" />
        </div>

        <div className="contact-grid">
          <div className="contact-left">
            <h2 className="contact-heading">
              Let's build<br />
              something<br />
              <span className="contact-accent">great together.</span>
            </h2>
            <p className="contact-sub">
              I'm currently open to new opportunities — full-time roles,
              freelance projects, or just a good technical conversation.
              My inbox is always open.
            </p>

            <div className="contact-email-wrap">
              <span className="contact-email">{email}</span>
              <button className="copy-btn" onClick={copyEmail}>
                {copied ? '✓ copied!' : 'copy'}
              </button>
            </div>

            <div className="contact-socials">
              {[
                { label: 'GitHub', href: 'https://github.com', handle: '@alexmorgan' },
                { label: 'LinkedIn', href: 'https://linkedin.com', handle: 'alex-morgan-dev' },
                { label: 'Twitter', href: 'https://twitter.com', handle: '@alexmorgandev' },
              ].map(s => (
                <a href={s.href} key={s.label} className="social-link" target="_blank" rel="noreferrer">
                  <span className="social-label">{s.label}</span>
                  <span className="social-handle">{s.handle} ↗</span>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-right">
            <div className="contact-form-wrap">
              <p className="form-label">// send a message</p>
              <div className="contact-form">
                <div className="form-field">
                  <label>name</label>
                  <input type="text" placeholder="John Doe" />
                </div>
                <div className="form-field">
                  <label>email</label>
                  <input type="email" placeholder="john@company.com" />
                </div>
                <div className="form-field">
                  <label>message</label>
                  <textarea rows={5} placeholder="I'd love to work with you on..." />
                </div>
                <button className="send-btn">
                  send message →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
