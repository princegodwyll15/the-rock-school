import type { ReactNode } from 'react'

export interface AboutValue {
  title: string
  desc: string
  icon: ReactNode
}

const stroke = {
  primary: 'var(--color-primary)',
  accent: 'var(--color-accent)',
}

export const ABOUT_VALUES: AboutValue[] = [
  {
    title: 'Quality Education',
    desc: 'Building strong academic foundations through proven teaching methods and modern learning tools.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path
          d="M11 2a7 7 0 100 14A7 7 0 0011 2zm0 2a5 5 0 110 10A5 5 0 0111 4zm0 2a3 3 0 100 6 3 3 0 000-6zM4 20a8 8 0 0114 0"
          stroke={stroke.primary}
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: 'Character & Discipline',
    desc: 'Helping students develop responsibility, confidence and the good values that last a lifetime.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path
          d="M11 2L3 6.5V11c0 5.25 4.4 10.15 8 11.5 3.6-1.35 8-6.25 8-11.5V6.5L11 2z"
          stroke={stroke.primary}
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M8 11l2.5 2.5L15 9"
          stroke={stroke.accent}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Supportive Environment',
    desc: 'Creating a safe, inclusive and encouraging space where every learner can flourish.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path
          d="M3 11a8 8 0 1016 0A8 8 0 003 11zm5-1h6M11 7v8"
          stroke={stroke.primary}
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
]