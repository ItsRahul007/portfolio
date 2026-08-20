import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import Reveal from '../components/Reveal'
import { projects } from '../data/content'
import './projects.css'

/** Rows that open, not cards in a grid — a spec sheet lists, it doesn't tile. */
export default function Projects() {
  const [open, setOpen] = useState<string | null>(projects[0].id)
  const reduced = useReducedMotion()

  return (
    <section className="sec shell" id="projects">
      <Reveal as="header" className="sec-head">
        <div className="sec-head__top">
          <h2 className="sec-head__title display">Built on my own</h2>
          <span className="meta">3 projects · source open</span>
        </div>
        <p className="sec-head__note">
          Side projects where I owned every layer — the socket server, the file scanner,
          the payment callback. Open a row for the spec.
        </p>
      </Reveal>

      <ul className="projs">
        {projects.map((p, i) => {
          const isOpen = open === p.id
          return (
            <Reveal as="li" i={i} key={p.id} className="proj">
              <h3 className="proj__h">
                <button
                  className="proj__trigger"
                  aria-expanded={isOpen}
                  aria-controls={`panel-${p.id}`}
                  onClick={() => setOpen(isOpen ? null : p.id)}
                >
                  <span className="proj__name display">{p.name}</span>
                  <span className="proj__tag meta">{p.tag}</span>
                  <span className="proj__stack">
                    {p.stack.map((s) => (
                      <span key={s}>{s}</span>
                    ))}
                  </span>
                  <span className="proj__toggle" data-open={isOpen} aria-hidden="true">
                    <i /><i />
                  </span>
                </button>
              </h3>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`panel-${p.id}`}
                    className="proj__panel"
                    initial={reduced ? undefined : { height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={reduced ? undefined : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="proj__body">
                      <div className="proj__col">
                        <p className="proj__lede">{p.lede}</p>
                        <div className="proj__links">
                          {p.links.map((l) => (
                            <a
                              key={l.href}
                              className="proj__link"
                              href={l.href}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {l.label} on GitHub
                              <span aria-hidden="true">↗</span>
                            </a>
                          ))}
                        </div>
                      </div>

                      <dl className="proj__specs">
                        {p.specs.map((s) => (
                          <div className="proj__spec" key={s.k}>
                            <dt className="meta">{s.k}</dt>
                            <dd>{s.v}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Reveal>
          )
        })}
      </ul>
    </section>
  )
}
