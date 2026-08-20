import { motion, useReducedMotion } from 'motion/react'
import Phone from '../components/Phone'
import { profile } from '../data/content'
import './hero.css'

/** The thesis: not a tech list — who the screens are for. */
const LINES = ['Screens', 'people use', 'every day']
const TECH = ['React', 'React Native', 'Flutter', 'Next.js', 'TypeScript']

type Props = { booted: boolean }

export default function Hero({ booted }: Props) {
  const reduced = useReducedMotion()
  /** Nothing moves until the bundler hands over, so the reveal reads as one beat. */
  const on = booted || reduced

  const rise = (i: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 26 },
          animate: on ? { opacity: 1, y: 0 } : { opacity: 0, y: 26 },
          transition: { duration: 0.6, delay: 0.05 + i * 0.062, ease: [0.22, 1, 0.36, 1] as const },
        }

  return (
    <section className="hero" id="top">
      <div className="hero__inner shell">
        <div className="hero__lead">
          <motion.p className="hero__eyebrow meta" {...rise(0)}>
            <span className="hero__pulse" aria-hidden="true" />
            Available for work · {profile.location}
          </motion.p>

          <h1 className="hero__title display">
            {LINES.map((w, i) => (
              <motion.span key={w} className="hero__line" {...rise(i + 1)}>
                {w}
              </motion.span>
            ))}
          </h1>

          {/* The keyword list belongs in the metadata row, not the headline. */}
          <motion.p className="hero__tech" {...rise(4)}>
            {TECH.map((t, i) => (
              <span key={t}>
                {t}
                {i < TECH.length - 1 && <i aria-hidden="true" />}
              </span>
            ))}
          </motion.p>

          <motion.p className="hero__blurb" {...rise(5)}>
            {profile.summary}
          </motion.p>

          <motion.div className="hero__acts" {...rise(6)}>
            <a className="btn btn--solid" href="#work">
              See the work
              <span aria-hidden="true">↓</span>
            </a>
            <a className="btn" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </motion.div>

          {/* Spec block — this sheet's own header row. */}
          <motion.dl className="hero__spec" {...rise(7)}>
            {[
              ['drawn by', profile.name],
              ['discipline', 'Frontend · Mobile'],
              ['in service', '2 yrs · since Nov 2024'],
              ['sheet', '01 of 01'],
            ].map(([k, v]) => (
              <div key={k} className="hero__spec-row">
                <dt className="meta">{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          className="hero__rig"
          initial={reduced ? undefined : { opacity: 0, y: 42 }}
          animate={on ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.9, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
        >
          <Phone />
        </motion.div>
      </div>

      <div className="hero__grid" aria-hidden="true" />
    </section>
  )
}
