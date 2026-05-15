import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <span className="footer-logo">
            <span style={{ color: 'var(--accent)' }}>[</span>
            dev
            <span style={{ color: 'var(--accent)' }}>]</span>
          </span>
          <p className="footer-copy">
            Designed & built by Alex Morgan · {new Date().getFullYear()}
          </p>
          <p className="footer-tech">
            Built with React + Vite
          </p>
        </div>
      </div>
    </footer>
  )
}
