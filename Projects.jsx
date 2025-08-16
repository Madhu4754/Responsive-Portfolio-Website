import React from 'react'
import ProjectCard from './ProjectCard.jsx'

const data = [
  {
    title: 'Responsive Portfolio Website',
    description: 'Fully responsive UI with dynamic React components, GitHub workflows, and optimized assets.',
    stack: ['HTML', 'CSS', 'JavaScript', 'React', 'GitHub Actions'],
    link: 'https://github.com/Madhu4754/your-portfolio-repo'
  },
  {
    title: 'E‑Commerce Dashboard',
    description: 'Admin dashboard with charts, filters, and accessible components built with Angular.',
    stack: ['Angular', 'TypeScript', 'Responsive UI'],
    link: 'https://github.com/Madhu4754'
  },
  {
    title: 'UI Accessibility Enhancements',
    description: 'Improved WCAG compliance and reduced layout shift for a Vue.js web app.',
    stack: ['Vue.js', 'Accessibility', 'Performance'],
    link: 'https://github.com/Madhu4754'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {data.map(p => <ProjectCard key={p.title} {...p} />)}
        </div>
      </div>
    </section>
  )
}
