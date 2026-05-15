import './Skills.css'

const categories = [
  {
    title: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'Django', level: 90 },
      { name: 'FastAPI', level: 85 },
      { name: 'Node.js', level: 65 },
    ]
  },
  {
    title: 'Database',
    icon: '🗄️',
    skills: [
      { name: 'PostgreSQL', level: 88 },
      { name: 'Redis', level: 78 },
      { name: 'MongoDB', level: 70 },
      { name: 'SQLite', level: 85 },
    ]
  },
  {
    title: 'DevOps & Cloud',
    icon: '☁️',
    skills: [
      { name: 'Docker', level: 82 },
      { name: 'AWS', level: 72 },
      { name: 'GitHub Actions', level: 80 },
      { name: 'Linux', level: 85 },
    ]
  },
  {
    title: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'React', level: 70 },
      { name: 'JavaScript', level: 75 },
      { name: 'TypeScript', level: 60 },
      { name: 'CSS / Tailwind', level: 72 },
    ]
  },
]

const tools = [
  'Git', 'VS Code', 'Postman', 'Figma', 'Notion',
  'Jira', 'Nginx', 'Celery', 'GraphQL', 'REST',
  'JWT', 'OAuth', 'pytest', 'Swagger', 'CI/CD'
]

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="section-label">
          <span className="label-num">02.</span>
          <span className="label-text">skills & tools</span>
          <div className="label-line" />
        </div>

        <div className="skills-grid">
          {categories.map(cat => (
            <div className="skill-card" key={cat.title}>
              <div className="skill-card-header">
                <span className="skill-icon">{cat.icon}</span>
                <h3>{cat.title}</h3>
              </div>
              <div className="skill-bars">
                {cat.skills.map(s => (
                  <div className="skill-bar-wrap" key={s.name}>
                    <div className="skill-bar-label">
                      <span>{s.name}</span>
                      <span className="skill-pct">{s.level}%</span>
                    </div>
                    <div className="skill-bar-track">
                      <div
                        className="skill-bar-fill"
                        style={{ '--width': `${s.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="tools-section">
          <p className="tools-label">// tools I work with daily</p>
          <div className="tools-list">
            {tools.map(t => (
              <span className="tool-pill" key={t}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
