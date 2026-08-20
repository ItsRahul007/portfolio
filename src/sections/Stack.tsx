import Reveal from '../components/Reveal'
import { education, stack } from '../data/content'
import './stack.css'

/** Grouped by the job each tool does, because that's how the choice gets made. */
export default function Stack() {
  return (
    <section className="sec shell" id="stack">
      <Reveal as="header" className="sec-head">
        <div className="sec-head__top">
          <h2 className="sec-head__title display">Toolkit</h2>
          <span className="meta">{stack.length} groups</span>
        </div>
        <p className="sec-head__note">
          Grouped by the job the tool does rather than by tier — that's the order I
          actually reach for them in.
        </p>
      </Reveal>

      <div className="stack">
        {stack.map((g, i) => (
          <Reveal key={g.group} i={i} className="grp">
            <div className="grp__head">
              <h3 className="grp__title">{g.group}</h3>
              <span className="grp__note meta">{g.note}</span>
            </div>
            {/* A parts list, not a tag cloud — same idiom as the project specs. */}
            <ul className="grp__items">
              {g.items.map((it) => (
                <li className="grp__item" key={it}>{it}</li>
              ))}
            </ul>
          </Reveal>
        ))}

        <Reveal i={stack.length} className="grp grp--edu">
          <div className="grp__head">
            <h3 className="grp__title">Education</h3>
            <span className="grp__note meta">{education.year}</span>
          </div>
          <p className="grp__edu">
            {education.degree}
            <span>{education.school}</span>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
