import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useEffect, useState } from 'react'
import { screens } from '../data/content'
import { screenMap } from './screens'
import './phone.css'

const DWELL = 4200

/**
 * The signature: a graphite slab annotated like a hardware drawing, hot-reloading
 * through four screens I actually shipped. Clicking a tab reloads on demand —
 * the same gesture as saving a file with Metro watching.
 */
export default function Phone() {
  const [i, setI] = useState(0)
  const [reloading, setReloading] = useState(false)
  const reduced = useReducedMotion()
  const active = screens[i]
  const Body = screenMap[active.kind]

  useEffect(() => {
    if (reduced) return
    const t = setTimeout(() => go((i + 1) % screens.length), DWELL)
    return () => clearTimeout(t)
  }, [i, reduced])

  function go(next: number) {
    if (next === i) return
    setReloading(true)
    setI(next)
    setTimeout(() => setReloading(false), 620)
  }

  return (
    <figure className="rig">
      {/* Callout leader, pointing in from the left so it never clips the edge. */}
      <div className="rig__callout" aria-hidden="true">
        <span className="rig__callout-text">
          {active.title}
          <em>{active.platform}</em>
        </span>
        <span className="rig__leader" />
      </div>

      <div className="rig__body">
        <div className="phone" data-reloading={reloading}>
          <span className="phone__notch" aria-hidden="true" />
          <div className="phone__glass">
            <div className="phone__status" aria-hidden="true">
              <span>9:41</span>
              <span className="phone__status-icons">
                <i /><i /><i />
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                className="phone__view"
                initial={reduced ? undefined : { opacity: 0, y: 14, scale: 0.985 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={reduced ? undefined : { opacity: 0, y: -8, scale: 0.994 }}
                transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
                /* exit is deliberately quick — the tab and callout have already
                   flipped, so a long fade would read as the wrong label. */
              >
                <Body />
              </motion.div>
            </AnimatePresence>

            <span className="phone__home" aria-hidden="true" />
          </div>

          {/* The reload flash — orange, brief, the only place it moves. */}
          <span className="phone__flash" aria-hidden="true" />
        </div>

        {/* Height dimension, on the outboard side. */}
        <div className="rig__dim rig__dim--y" aria-hidden="true">
          <span className="rig__arrow" />
          <span className="rig__dim-line" />
          <span className="rig__dim-label">844</span>
          <span className="rig__dim-line" />
          <span className="rig__arrow" />
        </div>
      </div>

      {/* Bottom dimension: width. */}
      <div className="rig__dim rig__dim--x" aria-hidden="true">
        <span className="rig__arrow" />
        <span className="rig__dim-line" />
        <span className="rig__dim-label">390</span>
        <span className="rig__dim-line" />
        <span className="rig__arrow" />
      </div>

      <figcaption className="rig__tabs">
        <span className="meta rig__tabs-label">hot reload</span>
        <div className="rig__tabs-list" role="tablist" aria-label="Preview a screen">
          {screens.map((s, n) => (
            <button
              key={s.id}
              role="tab"
              aria-selected={n === i}
              className="rig__tab"
              onClick={() => go(n)}
            >
              {s.title}
              <span className="rig__tab-bar" aria-hidden="true" />
            </button>
          ))}
        </div>
      </figcaption>
    </figure>
  )
}
