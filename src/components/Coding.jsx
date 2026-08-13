import { ArrowUpRight, Check } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { useReveal } from '../hooks/useReveal'
import { coding } from '../data/resume'

export default function Coding() {
  const ref = useReveal()
  return (
    <section id="coding" className="py-24 md:py-32 border-t border-surface-border">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <SectionHeading route="/dsa" title="Data structures & algorithms" />

        <div ref={ref} className="reveal grid lg:grid-cols-[1fr_0.8fr] gap-10">
          <div className="card-surface rounded-2xl p-6 sm:p-8">
            <p className="font-display text-lg text-ink leading-snug">{coding.headline}</p>
            <ul className="mt-6 space-y-3.5">
              {coding.points.map((point, i) => (
                <li key={i} className="flex gap-3 text-sm text-ink-muted leading-relaxed">
                  <Check size={16} className="text-accent flex-shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-2.5">
            {coding.profiles.map((p) => (
              <a
                key={p.label}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-surface rounded-xl px-5 py-4 flex items-center justify-between hover:border-accent/40 hover:-translate-y-0.5 transition-all duration-200 group"
              >
                <span className="font-mono text-sm text-ink group-hover:text-accent transition-colors">
                  {p.label}
                </span>
                <ArrowUpRight
                  size={16}
                  className="text-ink-faint group-hover:text-accent transition-colors"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
