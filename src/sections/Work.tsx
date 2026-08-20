import Reveal from '../components/Reveal'
import { roles } from '../data/content'
import './work.css'

/**
 * Dates carry real information here, so the timeline is a timeline. The
 * deliverables aren't a sequence though — they're quantities, so the count
 * does the structural work instead of an invented 01 / 02 / 03.
 */
export default function Work() {
  return (
    <section className="sec shell" id="work">
      <Reveal as="header" className="sec-head">
        <div className="sec-head__top">
          <h2 className="sec-head__title display">Experience</h2>
          <span className="meta">Mile9 · Nov 2024 → now</span>
        </div>
        <p className="sec-head__note">
          One company, two seats. I joined as an intern on a healthcare platform and stayed
          to own modules on it — then picked up Flutter when the retail app needed screens.
        </p>
      </Reveal>

      <div className="work">
        {roles.map((r, ri) => (
          <Reveal key={r.title} i={ri} className="role" fadeOnly>
            <div className="role__spine" aria-hidden="true">
              <span className="role__node" data-current={!!r.current} />
              <span className="role__line" />
            </div>

            <div className="role__meta">
              <span className="meta role__dates">
                {r.from} — {r.to}
              </span>
              {r.current && <span className="role__now">Current</span>}
            </div>

            <div className="role__main">
              <h3 className="role__title">
                {r.title}
                <span className="role__co">{r.company}</span>
              </h3>
              <p className="role__blurb">{r.blurb}</p>

              <ul className="deliv">
                {r.deliverables.map((d) => (
                  <li className="deliv__row" key={d.unit}>
                    <span className="deliv__count" data-empty={d.count === '—'}>{d.count}</span>
                    <span className="deliv__unit">{d.unit}</span>
                    <span className="deliv__detail">{d.detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
