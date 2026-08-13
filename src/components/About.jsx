import SectionHeading from './SectionHeading'
import { useReveal } from '../hooks/useReveal'
import { profile, stats } from '../data/resume'

const FACTS = [
  { label: 'CGPA', value: stats.cgpa },
  { label: 'Shipped projects', value: String(stats.projects) },
  { label: 'DSA problems solved', value: stats.dsaProblems },
  { label: 'Core stack', value: 'Spring Boot · React' },
]

export default function About() {
  const ref = useReveal()
  return (
    <section id="about" className="py-24 md:py-32 border-t border-surface-border">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <SectionHeading
          route="/about"
          title="A developer who ships both ends of the stack"
          description="From data model to deployed interface — comfortable in Spring Boot backends, relational and document databases, and the React front ends that bring it together."
        />

        <div ref={ref} className="reveal grid md:grid-cols-[1.2fr_0.8fr] gap-10 md:gap-16">
          <p className="text-ink-muted leading-relaxed text-[15px]">
            {profile.summary} Currently pursuing a B.E. in Computer Science &amp; Engineering at
            Thapar Institute of Engineering &amp; Technology, Patiala, Sukhwinder has built four
            full-stack platforms — an event booking system, a campus cab-sharing app, a
            skill-barter network, and a real-time family location tracker — each with a
            documented, JWT-secured REST API underneath.
          </p>

          <dl className="grid grid-cols-2 gap-5">
            {FACTS.map((fact) => (
              <div
                key={fact.label}
                className="card-surface rounded-xl p-4 hover:border-accent/40 transition-colors"
              >
                <dt className="font-mono text-[11px] text-ink-faint uppercase tracking-wide">
                  {fact.label}
                </dt>
                <dd className="font-display text-xl text-ink mt-1.5">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
