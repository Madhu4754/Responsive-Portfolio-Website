import React from 'react'

export default function ProjectCard({ title, description, stack = [], link }) {
  return (
    <article className="project-card">
      <header>
        <h3>{title}</h3>
      </header>
      <p>{description}</p>
      {stack.length > 0 && (
        <ul className="stack">
          {stack.map((t) => <li key={t}>{t}</li>)}
        </ul>
      )}
      <div className="card-actions">
        <a className="btn small" href={link} target="_blank" rel="noreferrer">View Repo</a>
      </div>
    </article>
  )
}
