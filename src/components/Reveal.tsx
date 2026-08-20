import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  /** stagger index — small delays only, so scrolling never feels held up */
  i?: number
  as?: 'div' | 'li' | 'section' | 'header'
  className?: string
  /**
   * Fade without the rise. Use it where a translate would break a graphic that
   * spans element boundaries — the experience timeline draws its spine per role,
   * so a moving row would visibly jog the line out of alignment.
   */
  fadeOnly?: boolean
}

/** One reveal used everywhere, so the whole page moves with a single grammar. */
export default function Reveal({ children, i = 0, as = 'div', className, fadeOnly }: Props) {
  const reduced = useReducedMotion()
  const M = motion[as]
  if (reduced) return <M className={className}>{children}</M>
  return (
    <M
      className={className}
      initial={fadeOnly ? { opacity: 0 } : { opacity: 0, y: 22 }}
      whileInView={fadeOnly ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-12% 0px -12% 0px' }}
      transition={{ duration: 0.62, delay: Math.min(i, 6) * 0.055, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </M>
  )
}
