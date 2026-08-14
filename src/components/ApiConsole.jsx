import { useEffect, useState } from 'react'
import { stats, profile } from '../data/resume'

const REQUESTS = [
  {
    method: 'GET',
    route: '/api/v1/developer',
    status: 200,
    body: {
      name: profile.name,
      role: 'Full-Stack Developer',
      focus: ['Spring Boot', 'React.js'],
      status: 'available',
    },
  },
  {
    method: 'GET',
    route: '/api/v1/projects?shipped=true',
    status: 200,
    body: {
      count: stats.projects,
      stack: stats.coreStacks,
    },
  },
  {
    method: 'GET',
    route: '/api/v1/education',
    status: 200,
    body: {
      institute: 'Thapar Institute of Engineering & Technology',
      cgpa: stats.cgpa,
      program: 'B.E. CSE',
    },
  },
  {
    method: 'GET',
    route: '/api/v1/dsa/stats',
    status: 200,
    body: {
      solved: stats.dsaProblems,
      platforms: ['LeetCode', 'GeeksforGeeks', 'Code360'],
    },
  },
]

function formatBody(body) {
  return JSON.stringify(body, null, 2)
}

export default function ApiConsole() {
  const [reqIndex, setReqIndex] = useState(0)
  const [typed, setTyped] = useState('')
  const [phase, setPhase] = useState('typing') // typing | holding | erasing

  useEffect(() => {
    const current = formatBody(REQUESTS[reqIndex].body)
    let timeout

    if (phase === 'typing') {
      if (typed.length < current.length) {
        timeout = setTimeout(() => setTyped(current.slice(0, typed.length + 1)), 14)
      } else {
        timeout = setTimeout(() => setPhase('holding'), 1600)
      }
    } else if (phase === 'holding') {
      timeout = setTimeout(() => setPhase('erasing'), 900)
    } else if (phase === 'erasing') {
      if (typed.length > 0) {
        timeout = setTimeout(() => setTyped(typed.slice(0, -1)), 6)
      } else {
        timeout = setTimeout(() => {
          setReqIndex((i) => (i + 1) % REQUESTS.length)
          setPhase('typing')
        }, 300)
      }
    }

    return () => clearTimeout(timeout)
  }, [typed, phase, reqIndex])

  const current = REQUESTS[reqIndex]

  return (
    <div className="card-surface rounded-2xl shadow-2xl shadow-black/40 overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-surface-border bg-surface/60">
        <span className="h-2.5 w-2.5 rounded-full bg-[#F2554B]/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent-amber/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
        <span className="ml-3 font-mono text-[11px] text-ink-faint">console — request preview</span>
      </div>

      <div className="p-5 font-mono text-[13px] leading-relaxed">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-accent-amber font-semibold">{current.method}</span>
          <span className="text-ink">{current.route}</span>
        </div>
        <div className="flex items-center gap-2 mt-1 text-ink-faint text-xs">
          <span className="text-accent">HTTP/1.1 {current.status}</span>
          <span>OK</span>
        </div>

        <pre className="mt-4 text-ink-muted whitespace-pre-wrap min-h-[7.5rem]">
{typed}
          <span className="inline-block w-[7px] h-[15px] bg-accent align-middle ml-0.5 animate-blink" />
        </pre>
      </div>

      <div className="px-5 py-3 border-t border-surface-border flex items-center gap-1.5 bg-surface/40">
        {REQUESTS.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === reqIndex ? 'w-5 bg-accent' : 'w-1.5 bg-surface-border'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
