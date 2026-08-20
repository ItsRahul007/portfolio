export const profile = {
  name: 'Rahul Ghosh',
  first: 'Rahul',
  last: 'Ghosh',
  role: 'React · React Native · Flutter',
  location: 'India',
  email: 'rahulghosh.dev@gmail.com',
  phone: '+91 7478386405',
  github: 'https://github.com/itsrahul007',
  linkedin: 'https://www.linkedin.com/in/rahul-ghosh-123624273/',
  resume: '/rahul-ghosh-resume.pdf',
  summary:
    'I build the screens people actually use — healthcare billing, retail stock intake, real-time chat. Two years shipping React, React Native and Flutter into production, with a bias toward reusable components and forms that never lose your data.',
} as const

/** The numbers on the rail — every one of these is from real shipped work. */
export const metrics = [
  { value: '10,000+', label: 'patients served' },
  { value: '500+', label: 'healthcare centers' },
  { value: '600+', label: 'retail users' },
  { value: '200+', label: 'shops onboarded' },
  { value: '50+', label: 'GraphQL operations' },
  { value: '20+', label: 'reusable components' },
  { value: '15+', label: 'CRUD workflows' },
  { value: '2,000+', label: 'videos indexed' },
] as const

export type Screen = {
  id: string
  /** what renders inside the phone */
  kind: 'billing' | 'chat' | 'receiving' | 'player'
  title: string
  platform: string
}

export const screens: Screen[] = [
  { id: 'billing', kind: 'billing', title: 'Billing', platform: 'React · MUI · GraphQL' },
  { id: 'receiving', kind: 'receiving', title: 'Receiving', platform: 'Flutter · Dart' },
  { id: 'chat', kind: 'chat', title: 'Chat Karo', platform: 'React Native · Socket.io' },
  { id: 'player', kind: 'player', title: 'Video Player', platform: 'React Native' },
]

export type Role = {
  company: string
  title: string
  from: string
  to: string
  current?: boolean
  blurb: string
  deliverables: { count: string; unit: string; detail: string }[]
}

export const roles: Role[] = [
  {
    company: 'Mile9',
    title: 'React Developer',
    from: 'Jan 2026',
    to: 'Present',
    current: true,
    blurb:
      'Maintain and extend a healthcare platform running across 500+ centers, plus a retail mobile app used on shop floors by 600+ staff.',
    deliverables: [
      { count: '5+', unit: 'healthcare modules', detail: 'Billing, Admin Panel, User Management, Reports — React, TypeScript, Material UI, GraphQL' },
      { count: '5+', unit: 'Flutter screens', detail: 'Receiving, Cart, Product Editing, Unit Measurement, Invoice Management' },
      { count: '15+', unit: 'CRUD workflows', detail: 'Form-driven, built on React Hook Form against GraphQL mutations' },
      { count: '50+', unit: 'GraphQL operations', detail: 'Queries and mutations wired alongside REST authentication APIs' },
      { count: '20+', unit: 'reusable components', detail: 'Shared across 10+ application screens to cut duplicate work' },
    ],
  },
  {
    company: 'Mile9',
    title: 'React Developer, Intern',
    from: 'Nov 2024',
    to: 'Jan 2026',
    blurb:
      'Learned the codebase by shipping into it — responsive interfaces for healthcare workflows and the reusable UI layer underneath them.',
    deliverables: [
      { count: '—', unit: 'responsive interfaces', detail: 'React views and reusable UI components for clinical workflows' },
      { count: '—', unit: 'API integration', detail: 'REST and GraphQL wired across multiple CRUD modules' },
      { count: '—', unit: 'production fixes', detail: 'Debugged live issues with senior developers and closed them out' },
    ],
  },
]

export type Project = {
  id: string
  name: string
  tag: string
  stack: string[]
  lede: string
  specs: { k: string; v: string }[]
  links: { label: string; href: string }[]
}

export const projects: Project[] = [
  {
    id: 'chat-karo',
    name: 'Chat Karo',
    tag: 'Real-time messaging',
    stack: ['React Native', 'Supabase', 'Socket.io'],
    lede:
      'A messaging app with the parts people expect and most side projects skip: group threads, audio and video calls, stories, read receipts and live presence.',
    specs: [
      { k: 'screens', v: '10+' },
      { k: 'realtime events', v: '20+' },
      { k: 'calling', v: 'audio + video over Socket.io' },
      { k: 'media', v: 'image, video, stories' },
      { k: 'backend', v: 'Supabase auth, database, storage' },
    ],
    links: [
      { label: 'Frontend', href: 'https://github.com/ItsRahul007/chat_karo_react_native' },
      { label: 'Backend', href: 'https://github.com/ItsRahul007/chat_karo_backend' },
    ],
  },
  {
    id: 'video-player',
    name: 'Modern Video Player',
    tag: 'Local media, on device',
    stack: ['React Native'],
    lede:
      'A local video player built for real libraries — it resumes where you stopped, handles subtitles and ZIP extraction, and stays fast past two thousand files.',
    specs: [
      { k: 'library size', v: '2,000+ videos' },
      { k: 'playback', v: 'subtitles, gestures, playlists' },
      { k: 'files', v: 'folder browsing, multi-select, ZIP extract' },
      { k: 'memory', v: 'resumes from last watched position' },
      { k: 'testers', v: '10+ on distributed APK builds' },
    ],
    links: [{ label: 'Source', href: 'https://github.com/ItsRahul007/mordern-video-player' }],
  },
  {
    id: 'e-card',
    name: 'E-Card',
    tag: 'Full-stack commerce',
    stack: ['Next.js', 'Node.js', 'MongoDB'],
    lede:
      'A storefront and the admin behind it: catalog, cart, orders and payments, with Razorpay taking real money at the end of the flow.',
    specs: [
      { k: 'pages', v: '15+' },
      { k: 'storefront', v: 'catalog, cart, order workflow' },
      { k: 'admin', v: 'product and order management' },
      { k: 'payments', v: 'Razorpay gateway' },
      { k: 'deploy', v: 'Vercel' },
    ],
    links: [{ label: 'Source', href: 'https://github.com/ItsRahul007/E-Card' }],
  },
]

export const stack: { group: string; note: string; items: string[] }[] = [
  {
    group: 'Frontend',
    note: 'what I reach for first',
    items: ['React.js', 'React Native', 'Next.js', 'TypeScript', 'Flutter', 'Tailwind CSS', 'Material UI', 'HTML5', 'CSS3'],
  },
  {
    group: 'State & data',
    note: 'keeping the screen honest',
    items: ['TanStack Query', 'React Hook Form', 'GraphQL', 'Form validation', 'CRUD operations'],
  },
  {
    group: 'Backend',
    note: 'enough to ship end to end',
    items: ['Node.js', 'Express.js', 'REST APIs', 'JWT auth', 'OAuth', 'Socket.io'],
  },
  {
    group: 'Databases',
    note: 'where it all lands',
    items: ['MongoDB', 'PostgreSQL', 'Supabase'],
  },
  {
    group: 'Practice',
    note: 'how the work gets done',
    items: ['Reusable components', 'API integration', 'Performance optimization', 'Code review', 'Git', 'GitHub', 'Postman', 'Vercel'],
  },
]

export const education = {
  degree: 'Bachelor of Arts',
  school: 'Burdwan University',
  year: '2025',
}

/** Lines typed out by the loader. Real bundler cadence, honest numbers. */
export const bootLog = [
  { text: 'metro start --reset-cache', kind: 'cmd' },
  { text: 'resolving dependencies', kind: 'step', tail: '148' },
  { text: 'transforming modules', kind: 'step', tail: '412/412' },
  { text: 'linking assets', kind: 'step', tail: 'ok' },
  { text: 'building rahulghosh.dev', kind: 'step', tail: 'done' },
  { text: 'hot reload', kind: 'ok', tail: '1.2s' },
] as const
