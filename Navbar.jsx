import React from 'react'
import useTheme from '../hooks/useTheme.js'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="navbar">
      <nav className="container nav-inner" aria-label="Primary">
        <a className="brand" href="#hero" aria-label="Home">BMNVM</a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button className="btn theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </nav>
    </header>
  )
}
