import Reveal from '../components/Reveal'
import { profile } from '../data/content'
import './contact.css'

const channels = [
  { k: 'email', label: profile.email, href: `mailto:${profile.email}` },
  { k: 'phone', label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
  { k: 'github', label: 'itsrahul007', href: profile.github },
  { k: 'linkedin', label: 'rahul-ghosh', href: profile.linkedin },
]

export default function Contact() {
  return (
    <footer className="foot" id="contact">
      <div className="shell foot__inner">
        <Reveal>
          <p className="foot__eyebrow meta">Open to frontend & mobile roles</p>
          {/* Two phrases, each held on its own line — never split "the next screen". */}
          <h2 className="foot__h display">
            <span>Let's build</span>
            <span>the next screen</span>
          </h2>
        </Reveal>

        <Reveal i={1} className="foot__right">
          <dl className="foot__list">
            {channels.map((c) => (
              <div className="foot__row" key={c.k}>
                <dt className="meta">{c.k}</dt>
                <dd>
                  <a
                    className="foot__link"
                    href={c.href}
                    {...(c.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
                  >
                    {c.label}
                    <span className="foot__link-rule" aria-hidden="true" />
                  </a>
                </dd>
              </div>
            ))}
          </dl>

          <a className="foot__cv" href={profile.resume} download>
            Download résumé
            <span aria-hidden="true">↓</span>
          </a>
        </Reveal>
      </div>

      <div className="shell foot__base">
        <span className="meta">{profile.name} · {profile.location}</span>
        <span className="meta">Built with React, TypeScript & Motion · 2026</span>
      </div>
    </footer>
  )
}
