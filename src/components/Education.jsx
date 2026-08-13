import { GraduationCap, Users } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { useReveal } from '../hooks/useReveal'
import { education, positions } from '../data/resume'

function EduRow({ item, index }) {
  const ref = useReveal()
  return (
    <div
      ref={ref}
      className="reveal flex gap-4 py-6 border-b border-surface-border last:border-b-0"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <GraduationCap className="text-accent flex-shrink-0 mt-1" size={18} />
      <div className="flex-1 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1.5">
        <div>
          <h3 className="font-display text-ink text-[17px]">{item.institution}</h3>
          <p className="text-ink-muted text-sm mt-0.5">{item.degree}</p>
          <p className="font-mono text-xs text-ink-faint mt-1">{item.detail}</p>
        </div>
        <span className="font-mono text-xs text-ink-faint whitespace-nowrap">{item.period}</span>
      </div>
    </div>
  )
}

export default function Education() {
  const posRef = useReveal()
  return (
    <section id="education" className="py-24 md:py-32 border-t border-surface-border">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <SectionHeading route="/education" title="Education" />

        <div className="card-surface rounded-2xl px-6">
          {education.map((item, i) => (
            <EduRow key={item.institution} item={item} index={i} />
          ))}
        </div>

        <div ref={posRef} className="reveal mt-16">
          <span className="route-label">/leadership</span>
          <h3 className="font-display text-2xl text-ink mt-3 mb-8">
            Positions of responsibility
          </h3>

          <div className="grid sm:grid-cols-2 gap-5">
            {positions.map((p) => (
              <div
                key={p.role}
                className="card-surface rounded-xl p-5 hover:border-accent/40 transition-colors"
              >
                <Users className="text-accent mb-3" size={18} />
                <h4 className="font-display text-ink text-[15px]">{p.role}</h4>
                <p className="font-mono text-xs text-ink-faint mt-0.5">{p.org}</p>
                <p className="text-ink-muted text-sm mt-3 leading-relaxed">{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
