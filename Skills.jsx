import React from 'react'

const skills = [
  { name: 'HTML5', level: 95 },
  { name: 'CSS3', level: 90 },
  { name: 'JavaScript (ES6+)', level: 90 },
  { name: 'React', level: 85 },
  { name: 'Responsive Design', level: 90 },
  { name: 'Accessibility (WCAG)', level: 80 },
  { name: 'Git / GitHub', level: 85 },
  { name: 'Performance Optimization', level: 80 },
]

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2>Skills</h2>
        <ul className="skills-grid">
          {skills.map(s => (
            <li key={s.name} className="skill">
              <div className="skill-top">
                <span>{s.name}</span>
                <span>{s.level}%</span>
              </div>
              <div className="bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow={s.level}>
                <div className="fill" style={{ width: `${s.level}%` }} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
