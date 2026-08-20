import { useEffect, useState } from 'react'
import './theme.css'

export type Theme = 'light' | 'dark'

const KEY = 'theme'

/** The page colour the browser paints behind the document, per theme. */
const CHROME: Record<Theme, string> = { light: '#F1F3F6', dark: '#181C23' }

function apply(theme: Theme) {
  document.documentElement.dataset.theme = theme
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', CHROME[theme])
}

/**
 * Appearance, as a device would put it. Two slabs — one with a lit screen, one
 * with a dark one — so the current theme is legible rather than inferred from a
 * sun or a moon. The inline script in index.html has already resolved the
 * system preference into data-theme, so this only ever reads and writes it.
 */
export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(
    () => (document.documentElement.dataset.theme as Theme) || 'light',
  )

  /* Follow the OS while the visitor hasn't overridden it. Once they pick a side,
     their choice sticks and the system stops being consulted. */
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = (e: MediaQueryListEvent) => {
      if (localStorage.getItem(KEY)) return
      const next: Theme = e.matches ? 'dark' : 'light'
      apply(next)
      setTheme(next)
    }
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  function choose(next: Theme) {
    if (next === theme) return
    try {
      localStorage.setItem(KEY, next)
    } catch {
      /* private browsing — the choice just won't outlive the tab */
    }
    apply(next)
    setTheme(next)
  }

  return (
    <div className="thm" role="group" aria-label="Appearance">
      {(['light', 'dark'] as const).map((t) => (
        <button
          key={t}
          type="button"
          className="thm__cell"
          aria-pressed={theme === t}
          title={`${t === 'light' ? 'Light' : 'Dark'} theme`}
          onClick={() => choose(t)}
        >
          <span className="thm__slab" data-tone={t} aria-hidden="true" />
          <span className="thm__sr">{t === 'light' ? 'Light' : 'Dark'} theme</span>
          <span className="thm__bar" aria-hidden="true" />
        </button>
      ))}
    </div>
  )
}
