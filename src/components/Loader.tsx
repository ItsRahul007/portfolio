import { useEffect, useRef, useState } from 'react'
import { bootLog } from '../data/content'
import './loader.css'

const LINE_MS = 200
const HOLD_MS = 260
const SPLIT_MS = 800

type Props = {
  /** The build is done: hand the page over so it reveals behind the opening panel. */
  onReveal: () => void
  /** The split has finished: the panel can be unmounted. */
  onDone: () => void
}

/**
 * The bundler boot. Lines type in at Metro's cadence, the dimension line fills,
 * and the wordmark widens from condensed to expanded as the build completes —
 * then the panel splits and the page hot-reloads in behind it. The page starts
 * animating the moment the split begins, so nothing waits on an empty screen.
 */
export default function Loader({ onReveal, onDone }: Props) {
  const [line, setLine] = useState(0)
  const [lifting, setLifting] = useState(false)
  const reduced = useRef(
    typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    if (reduced.current) {
      onReveal()
      const t = setTimeout(onDone, 200)
      return () => clearTimeout(t)
    }
    const timers: number[] = []
    bootLog.forEach((_, i) => {
      timers.push(window.setTimeout(() => setLine(i + 1), LINE_MS * (i + 1)))
    })
    const total = LINE_MS * bootLog.length + HOLD_MS
    timers.push(
      window.setTimeout(() => {
        setLifting(true)
        onReveal()
      }, total),
    )
    timers.push(window.setTimeout(onDone, total + SPLIT_MS))
    return () => timers.forEach(clearTimeout)
  }, [onReveal, onDone])

  const progress = Math.round((line / bootLog.length) * 100)

  return (
    <div
      className="boot"
      data-lifting={lifting}
      role="status"
      aria-live="polite"
      aria-label={`Loading, ${progress} percent`}
    >
      <div className="boot__grid" aria-hidden="true" />

      <div className="boot__inner">
        {/* Wordmark — font-stretch tracks build progress. */}
        <div className="boot__mark" style={{ fontStretch: `${62 + progress * 0.68}%` }}>
          <span>Rahul</span>
          <span>Ghosh</span>
        </div>

        <ol className="boot__log">
          {bootLog.map((l, i) => (
            <li key={l.text} className="boot__line" data-shown={i < line} data-kind={l.kind}>
              <span className="boot__glyph" aria-hidden="true">
                {l.kind === 'cmd' ? '$' : l.kind === 'ok' ? '✓' : '▸'}
              </span>
              <span className="boot__text">{l.text}</span>
              {'tail' in l && l.tail ? (
                <>
                  <span className="boot__leader" aria-hidden="true" />
                  <span className="boot__tail">{l.tail}</span>
                </>
              ) : null}
            </li>
          ))}
        </ol>

        {/* Progress drawn as a dimension line, ticks and all. */}
        <div className="boot__dim">
          <span className="boot__tick" aria-hidden="true" />
          <span className="boot__track">
            <span className="boot__fill" style={{ transform: `scaleX(${progress / 100})` }} />
          </span>
          <span className="boot__tick" aria-hidden="true" />
          <span className="boot__pct">{String(progress).padStart(3, '0')}%</span>
        </div>
      </div>

      <div className="boot__foot">
        <span>metro · bundling</span>
        <span>react native 0.7x · flutter 3.x</span>
      </div>
    </div>
  )
}
