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

| Token | Value | Role |
| --- | --- | --- |
| `--glass` | `#F1F3F6` | page — cool screen white |
| `--graphite` | `#1C1F24` | body copy, phone chassis, dark sections |
| `--anodize` | `#7C8593` | labels, secondary copy |
| `--signal` | `#FF4D1F` | hot reload — state changes only, nowhere else |
| `--dart` | `#2F6BFF` | links, focus ring |

Type: **Anybody** (variable-width industrial grotesque) for display, **Instrument Sans** for
body, **JetBrains Mono** for spec annotations.

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

- Responsive 320 → 1920, no horizontal scroll at any width.
- `prefers-reduced-motion` respected: the loader clears immediately, the marquee stops, the
  phone stops cycling, and reveals become instant.
- Visible keyboard focus throughout; skip link to the work section.
- Project rows are a real disclosure pattern (`aria-expanded` / `aria-controls`); the phone
  tabs are a `tablist`.
