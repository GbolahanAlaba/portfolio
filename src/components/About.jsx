import './About.css'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-label">
          <span className="label-num">01.</span>
          <span className="label-text">About me</span>
          <div className="label-line" />
        </div>

        <div className="about-grid">
          <div className="about-text">
            <h2 className="about-heading">
              I turn complex problems<br />
              into <span className="highlight">elegant code</span>
            </h2>
            <p>
              I'm a software engineer with a deep focus on backend systems — building APIs,
              designing databases, and architecting services that scale. I started with Python
              and never looked back.
            </p>
            <p>
              When I'm not writing code, I'm reading about distributed systems, contributing
              to open source, or trying to beat my terminal setup from last month.
            </p>
            <p>
              I care about code that reads like prose: clear, intentional, and maintainable
              by someone else at 2am.
            </p>

            <div className="about-tags">
              {['Python', 'Django', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'AWS', 'React'].map(tag => (
                <span className="tag" key={tag}>#{tag}</span>
              ))}
            </div>
          </div>

          <div className="about-side">
            {/* Avatar placeholder */}
            <div className="avatar-wrap">
              <div className="avatar">
                <div className="avatar-inner">
                  <span className="avatar-initials">AM</span>
                </div>
                <div className="avatar-ring" />
                <div className="avatar-badge">
                  <span className="badge-dot" />
                  Available for work
                </div>
              </div>
            </div>

            <div className="about-facts">
              {[
                { icon: '📍', text: 'Remote — based anywhere' },
                { icon: '🎓', text: 'CS Degree + self-taught' },
                { icon: '☕', text: 'Fueled by coffee & curiosity' },
                { icon: '🌐', text: 'Open to global opportunities' },
              ].map(f => (
                <div className="fact" key={f.text}>
                  <span>{f.icon}</span>
                  <span>{f.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
