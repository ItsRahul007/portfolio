import { motion, useScroll, useSpring } from 'motion/react'
import { profile } from '../data/content'
import ThemeToggle from './ThemeToggle'
import './nav.css'

const links = [
  { href: '#work', label: 'Work' },
  { href: '#projects', label: 'Projects' },
  { href: '#stack', label: 'Stack' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const { scrollYProgress } = useScroll()
  const x = useSpring(scrollYProgress, { stiffness: 120, damping: 26, restDelta: 0.001 })

  return (
    <header className="nav">
      <a className="nav__skip" href="#work">Skip to work</a>
      <div className="nav__bar shell">
        {/* The name contracts to a monogram on narrow screens so the section
            links and the appearance control keep their room. The accessible
            name stays the same either way. */}
        <a className="nav__mark" href="#top" aria-label={`${profile.name} — back to top`}>
          <span className="nav__mark-glyph" aria-hidden="true" />
          <span className="nav__mark-full" aria-hidden="true">Rahul Ghosh</span>
          <span className="nav__mark-short" aria-hidden="true">RG</span>
          <span className="nav__mark-role meta" aria-hidden="true">{profile.role}</span>
        </a>
        <nav className="nav__links" aria-label="Sections">
          {links.map((l) => (
            <a key={l.href} className="nav__link" href={l.href}>{l.label}</a>
          ))}
        </nav>
        <div className="nav__end">
          <ThemeToggle />
          <a className="nav__cv" href={profile.resume} download>
            Résumé
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
      {/* Scroll position, drawn as the same dimension line used everywhere else. */}
      <motion.div className="nav__progress" style={{ scaleX: x }} aria-hidden="true" />
    </header>
  )
}
