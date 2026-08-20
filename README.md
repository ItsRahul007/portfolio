# Rahul Ghosh — portfolio

React + TypeScript + Vite. Motion for animation, Lenis for smooth scroll. No CSS framework —
hand-written CSS with a token layer, so the spec-sheet details stay under control.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # → dist/
npm run preview  # serve the build
```

## Design

**Spec Sheet.** The work is measured in screens, so the page is drawn like an industrial
hardware spec sheet: dimension lines with arrow ticks, callout leaders, monospace metadata,
and a graphite phone slab as the centrepiece.

Type: **Anybody** (variable-width industrial grotesque) for display, **Instrument Sans** for
body, **JetBrains Mono** for spec annotations.

### Theming

Light and dark, defaulting to the OS and overridable from the control in the header. All
colour lives in [`src/styles/tokens.css`](src/styles/tokens.css) as `--l-*` / `--d-*` hex
pairs declared **once**, with a short assignment list per theme selecting a set — so the two
palettes cannot drift apart.

There are three families of surface, because they behave differently across themes:

| Family | Behaviour | Used by |
| --- | --- | --- |
| **page** | inverts | the sheet you read |
| **band** | stays dark in both | rail, footer, bundler panel |
| **chassis** | stays a metal slab, catches more light on a dark page | the phone |

`.meta` is a *page* token, so anything inside a band must use `--band-dim` instead — that's
the one rule worth remembering when adding to the page.

The accent splits in two, because bright orange on a light page is only 2.98:1:

| Token | Light | Dark | Role |
| --- | --- | --- | --- |
| `--signal` | `#FF4D1F` | `#FF6236` | fills, rules, dots, underlines |
| `--signal-ink` | `#C4340C` | `#FF7A52` | the same accent as **text** |

The phone's screen follows the theme too — the app it's showing has dark mode, which is the
point. Its chassis, notch and video stage do not, because those are physical things.

An inline script in `index.html` resolves the theme into `data-theme` before first paint, so
the page never flashes the wrong one. The system preference is followed until the visitor
picks a side; after that their choice persists in `localStorage`.

**Loader** — a Metro bundler boot sequence. Lines type in, the dimension-line progress bar
fills, the wordmark widens from condensed to expanded as the build completes, then the panel
splits and the page hot-reloads in behind it. Page scroll is locked until it hands over.

**Signature** — the phone hot-reloads through four real screens (Billing, Receiving, Chat Karo,
Video Player) every 4.2s, or on demand from the tabs.

## Where the content lives

Everything editable is in [`src/data/content.ts`](src/data/content.ts) — profile, metrics,
roles, projects, toolkit, and the loader's boot log. No copy is hardcoded in components.

## Swapping in real screenshots

The four phone screens are rendered in markup ([`src/components/screens.tsx`](src/components/screens.tsx))
rather than shipped as images. To use real captures instead, drop them in `public/assets/` and
replace the matching component body with an `<img>` — the chassis, dimension lines and tabs
don't change.

## Quality floor

- Responsive 320 → 1920, no horizontal scroll at any width, in both themes.
- **WCAG AA contrast: zero failures in either theme**, measured against composited
  backgrounds (translucent layers blended, not assumed).
- `prefers-reduced-motion` respected: the loader clears immediately, the marquee stops, the
  phone stops cycling, and reveals become instant.
- Visible keyboard focus throughout; skip link to the work section. The appearance control is
  keyboard reachable and reports state with `aria-pressed`.
- Project rows are a real disclosure pattern (`aria-expanded` / `aria-controls`); the phone
  tabs are a `tablist`.
- No theme flash on load; `color-scheme` and `meta[theme-color]` both track the active theme.
