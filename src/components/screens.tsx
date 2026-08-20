/**
 * Four screens rendered in markup rather than shipped as images — the same
 * layouts I build for real, at phone scale. Swap in real screenshots by
 * dropping files into public/assets and pointing <Phone> at them.
 */

export function ScreenBilling() {
  const rows = [
    ['Consultation · Dr. Nandi', '₹ 600.00'],
    ['CBC panel', '₹ 340.00'],
    ['Lipid profile', '₹ 780.00'],
    ['Vitamin D, 25-OH', '₹ 1,100.00'],
    ['Dressing · post-op', '₹ 150.00'],
    ['Registration', '₹ 50.00'],
    ['HbA1c', '₹ 620.00'],
    ['Thyroid profile', '₹ 480.00'],
    ['ECG', '₹ 300.00'],
    ['Urine routine', '₹ 180.00'],
    ['Nursing charge', '₹ 240.00'],
    ['Consumables', '₹ 95.00'],
  ]
  return (
    <div className="scr scr--billing">
      <div className="scr__top">
        <span className="scr__back" aria-hidden="true">←</span>
        <span className="scr__crumb">Billing / New invoice</span>
        <span className="scr__chip">Draft</span>
      </div>

      <div className="scr__hd">Invoice #10428</div>
      <div className="scr__sub">Sahana Centre · Meera Das · 34F · UHID 88214</div>

      <div className="scr__seg" role="presentation">
        <span data-on="true">Charges</span>
        <span>Payments</span>
        <span>History</span>
      </div>

      <ul className="scr__rows">
        {rows.map(([a, b]) => (
          <li key={a}>
            <span className="scr__name">{a}</span>
            <span className="scr__num">{b}</span>
          </li>
        ))}
        <li className="scr__add">
          <span aria-hidden="true">+</span> Add charge
        </li>
      </ul>

      <div className="scr__pay">
        <span className="scr__pay-label">Method</span>
        <span className="scr__pill" data-on="true">Cash</span>
        <span className="scr__pill">UPI</span>
        <span className="scr__pill">Card</span>
      </div>

      <dl className="scr__sums">
        <div><dt>Subtotal</dt><dd className="scr__num">₹ 3,020.00</dd></div>
        <div><dt>Centre discount · 8%</dt><dd className="scr__num">− ₹ 241.60</dd></div>
        <div><dt>GST · 18%</dt><dd className="scr__num">₹ 500.11</dd></div>
      </dl>

      <div className="scr__total">
        <span>Payable</span>
        <span className="scr__num scr__num--big">₹ 3,278.51</span>
      </div>
      <div className="scr__cta">Collect payment</div>
    </div>
  )
}

export function ScreenReceiving() {
  const items = [
    ['Amul Taaza 500ml', '24 / 24', true],
    ['Tata Salt 1kg', '18 / 20', false],
    ['Maggi 70g ×12', '12 / 12', true],
    ['Surf Excel 1kg', '0 / 6', false],
    ['Parle-G 250g', '30 / 30', true],
    ['Fortune Oil 1L', '9 / 12', false],
    ['Colgate 100g', '48 / 48', true],
    ['Dettol 200ml', '0 / 10', false],
    ['Britannia Marie', '24 / 24', true],
    ['Red Label 500g', '6 / 6', true],
    ['Nescafé 50g', '0 / 8', false],
    ['Harpic 500ml', '12 / 12', true],
    ['Good Day 200g', '18 / 18', true],
    ['Bru Instant 100g', '4 / 10', false],
    ['Sunfeast Dark', '36 / 36', true],
    ['Lifebuoy 125g ×4', '16 / 16', true],
    ['Aashirvaad Atta 5kg', '3 / 10', false],
    ['Amul Butter 500g', '12 / 12', true],
  ] as const
  return (
    <div className="scr scr--recv">
      <div className="scr__top">
        <span className="scr__back" aria-hidden="true">←</span>
        <span className="scr__crumb">Receiving</span>
        <span className="scr__chip scr__chip--ok">GRN open</span>
      </div>

      <div className="scr__hd">PO-3391</div>
      <div className="scr__sub">Sharma Kirana · Metro Cash &amp; Carry</div>

      <div className="scr__bar">
        <span className="scr__bar-fill" style={{ width: '61%' }} />
      </div>
      <div className="scr__barnote">
        <span>11 of 18 lines counted</span>
        <span className="scr__num">4 short</span>
      </div>

      <ul className="scr__checks">
        {items.map(([name, qty, done]) => (
          <li key={name} data-done={done}>
            <span className="scr__box" aria-hidden="true" />
            <span className="scr__name">{name}</span>
            <span className="scr__num">{qty}</span>
          </li>
        ))}
      </ul>

      <div className="scr__pad">
        {['7', '8', '9', '4', '5', '6', '1', '2', '3', '.', '0', '⌫'].map((k) => (
          <span key={k}>{k}</span>
        ))}
      </div>
      <div className="scr__cta">Confirm receipt</div>
    </div>
  )
}

export function ScreenChat() {
  return (
    <div className="scr scr--chat">
      <div className="scr__top">
        <span className="scr__back" aria-hidden="true">←</span>
        <span className="scr__avatar" aria-hidden="true" />
        <div className="scr__who">
          <span className="scr__hd scr__hd--sm">Dev Squad</span>
          <span className="scr__live">
            <i aria-hidden="true" /> 3 online
          </span>
        </div>
        <span className="scr__call" aria-hidden="true" />
      </div>

      <div className="scr__thread">
        <span className="scr__day">Yesterday</span>
        <div className="bub bub--in">Storage bucket is set up on Supabase</div>
        <div className="bub bub--out">
          Nice. Wiring the uploader tonight
          <span className="bub__ticks" aria-hidden="true">✓✓</span>
        </div>
        <div className="bub bub--in">Stories need a 24h expiry job</div>
        <div className="bub bub--out">
          Added it as a scheduled function
          <span className="bub__ticks" aria-hidden="true">✓✓</span>
        </div>
        <span className="scr__day">Today</span>
        <div className="bub bub--in">Build passed. Pushing the APK now.</div>
        <div className="bub bub--in bub--media" aria-label="shared screenshot" />
        <div className="bub bub--out">
          Got it — testing on the Pixel
          <span className="bub__ticks" aria-hidden="true">✓✓</span>
        </div>
        <div className="bub bub--in">Presence and read receipts are live</div>
        <div className="bub bub--out">
          Calls next. Socket.io signalling is wired
          <span className="bub__ticks" aria-hidden="true">✓✓</span>
        </div>
        <div className="bub bub--in">Group video worked first try</div>
        <div className="bub bub--out">
          Recording a story to show the team
          <span className="bub__ticks" aria-hidden="true">✓✓</span>
        </div>
        <div className="bub bub--typing" aria-hidden="true">
          <i /><i /><i />
        </div>
      </div>

      <div className="scr__input">
        <span className="scr__clip" aria-hidden="true" />
        <span className="scr__ph">Message</span>
        <span className="scr__send" aria-hidden="true" />
      </div>
    </div>
  )
}

export function ScreenPlayer() {
  return (
    <div className="scr scr--play">
      <div className="scr__stage">
        <span className="scr__play" aria-hidden="true" />
        <span className="scr__cc">CC · EN</span>
        <span className="scr__speed">1.25×</span>
      </div>
      <div className="scr__scrub">
        <span className="scr__scrub-fill" />
      </div>
      <div className="scr__times">
        <span>18:42</span>
        <span>−22:25</span>
      </div>

      <div className="scr__meta-row">
        <span className="scr__hd scr__hd--sm">Ep 03 — Native modules</span>
        <span className="scr__folder">/sdcard/Movies/rn-course</span>
      </div>

      <div className="scr__tools">
        {['Subtitles', 'Playlist', 'Extract ZIP', 'Share'].map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>

      <div className="scr__hd scr__hd--sm scr__listhd">Up next</div>
      <ul className="scr__list">
        {[
          ['Ep 04 — Reanimated', '38:12'],
          ['Ep 05 — Gestures', '41:07'],
          ['Ep 06 — Hermes', '29:55'],
          ['Ep 07 — Release builds', '52:30'],
          ['Ep 08 — Profiling', '33:41'],
          ['Ep 09 — OTA updates', '26:18'],
          ['Ep 10 — Deep links', '31:04'],
          ['Ep 11 — Push setup', '24:47'],
          ['Ep 12 — App signing', '19:22'],
          ['Ep 13 — Fastlane', '28:36'],
          ['Ep 14 — Crash reporting', '35:12'],
          ['Ep 15 — Bundle size', '22:09'],
          ['Ep 16 — E2E with Detox', '44:51'],
        ].map(([t, len], i) => (
          <li key={t}>
            <span className="scr__thumb" aria-hidden="true" />
            <span className="scr__name">{t}</span>
            {i === 0 ? <span className="scr__resume">resume</span> : <span className="scr__num">{len}</span>}
          </li>
        ))}
      </ul>
      <div className="scr__count">2,041 videos indexed · 14 folders</div>
    </div>
  )
}

export const screenMap = {
  billing: ScreenBilling,
  receiving: ScreenReceiving,
  chat: ScreenChat,
  player: ScreenPlayer,
} as const
