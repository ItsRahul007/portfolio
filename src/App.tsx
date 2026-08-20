import { useCallback, useEffect, useState } from 'react'
import Lenis from 'lenis'
import Loader from './components/Loader'
import Nav from './components/Nav'
import Hero from './sections/Hero'
import Rail from './sections/Rail'
import Work from './sections/Work'
import Projects from './sections/Projects'
import Stack from './sections/Stack'
import Contact from './sections/Contact'

export default function App() {
  /* Two stages: `booting` gates the page reveal, `loading` keeps the panel mounted
     through its split. The page starts animating behind the panel, not after it. */
  const [booting, setBooting] = useState(true)
  const [loading, setLoading] = useState(true)
  const reveal = useCallback(() => setBooting(false), [])
  const finish = useCallback(() => setLoading(false), [])

  /* Page scroll stays locked through the build so the reveal lands on a still page. */
  useEffect(() => {
    document.body.dataset.booting = String(booting)
  }, [booting])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const lenis = new Lenis({ duration: 1.05, wheelMultiplier: 0.9 })
    let raf = 0
    const loop = (t: number) => {
      lenis.raf(t)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
    }
  }, [])

  return (
    <>
      {loading && <Loader onReveal={reveal} onDone={finish} />}
      <Nav />
      <main>
        <Hero booted={!booting} />
        <Rail />
        <Work />
        <Projects />
        <Stack />
      </main>
      <Contact />
    </>
  )
}
