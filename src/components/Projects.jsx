import './Projects.css'

const projects = [
  {
    num: '001',
    title: 'SwiftAPI',
    desc: 'High-performance REST API framework built on FastAPI with auto-generated docs, JWT auth, rate limiting, and Redis caching. Handles 10k+ req/sec.',
    stack: ['Python', 'FastAPI', 'Redis', 'PostgreSQL', 'Docker'],
    github: '#',
    live: '#',
    featured: true,
  },
  {
    num: '002',
    title: 'DataPipeline Pro',
    desc: 'ETL pipeline that processes 1M+ records daily. Built with Celery workers, PostgreSQL, and custom monitoring dashboard. Reduced processing time by 70%.',
    stack: ['Python', 'Celery', 'PostgreSQL', 'Django', 'AWS'],
    github: '#',
    live: '#',
    featured: true,
  },
  {
    num: '003',
    title: 'AuthVault',
    desc: 'Microservice for authentication and authorization. Supports OAuth2, JWT, API keys, and role-based access control. Used in production by 3 startups.',
    stack: ['Python', 'FastAPI', 'Redis', 'Docker', 'JWT'],
    github: '#',
    live: null,
    featured: false,
  },
  {
    num: '004',
    title: 'LogWatch',
    desc: 'Real-time log aggregation and alerting system. Streams logs via WebSockets, stores in PostgreSQL, and sends alerts via Slack/email.',
    stack: ['Python', 'WebSockets', 'PostgreSQL', 'React', 'Nginx'],
    github: '#',
    live: '#',
    featured: false,
  },
  {
    num: '005',
    title: 'InventoryOS',
    desc: 'Full-stack inventory management system for small businesses. Django backend, React frontend, barcode scanning, and PDF reports.',
    stack: ['Django', 'React', 'PostgreSQL', 'Celery', 'AWS S3'],
    github: '#',
    live: '#',
    featured: false,
  },
  {
    num: '006',
    title: 'CLI Toolkit',
    desc: 'A collection of Python CLI tools for developer productivity: project scaffolding, git hooks manager, env manager, and API testing.',
    stack: ['Python', 'Click', 'Rich', 'Typer'],
    github: '#',
    live: null,
    featured: false,
  },
]

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-label">
          <span className="label-num">03.</span>
          <span className="label-text">projects</span>
          <div className="label-line" />
        </div>

        {/* Featured projects */}
        <div className="featured-projects">
          {projects.filter(p => p.featured).map(p => (
            <div className="project-featured" key={p.num}>
              <div className="project-featured-content">
                <span className="project-num">{p.num}</span>
                <div className="featured-badge">featured project</div>
                <h3 className="project-title">{p.title}</h3>
                <div className="project-desc-box">
                  <p>{p.desc}</p>
                </div>
                <div className="project-stack">
                  {p.stack.map(s => <span key={s}>{s}</span>)}
                </div>
                <div className="project-links">
                  <a href={p.github} className="proj-link">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    code
                  </a>
                  {p.live && (
                    <a href={p.live} className="proj-link proj-link-live">
                      ↗ live demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other projects grid */}
        <p className="other-label">// other things i've built</p>
        <div className="other-projects">
          {projects.filter(p => !p.featured).map(p => (
            <div className="project-card" key={p.num}>
              <div className="project-card-top">
                <span className="project-num small">{p.num}</span>
                <div className="project-card-links">
                  <a href={p.github}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                  </a>
                  {p.live && <a href={p.live}>↗</a>}
                </div>
              </div>
              <h4 className="project-card-title">{p.title}</h4>
              <p className="project-card-desc">{p.desc}</p>
              <div className="project-card-stack">
                {p.stack.map(s => <span key={s}>{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
