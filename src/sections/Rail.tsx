import { metrics } from '../data/content'
import './rail.css'

/**
 * Every number here came off a real deployment. The rail runs because the
 * platforms do — it pauses on hover so you can actually read one.
 */
export default function Rail() {
  const run = [...metrics, ...metrics]
  return (
    <section className="rail" aria-label="Work in numbers">
      <div className="rail__track">
        {[0, 1].map((pass) => (
          <ul className="rail__set" key={pass} aria-hidden={pass === 1}>
            {run.map((m, i) => (
              <li className="rail__item" key={`${pass}-${m.label}-${i}`}>
                <span className="rail__value">{m.value}</span>
                <span className="rail__label">{m.label}</span>
                <span className="rail__sep" aria-hidden="true" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  )
}
