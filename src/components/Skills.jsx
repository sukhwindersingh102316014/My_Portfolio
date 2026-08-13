import SectionHeading from './SectionHeading'
import Tag from './Tag'
import { useReveal } from '../hooks/useReveal'
import { skillGroups } from '../data/resume'

function SkillCard({ group, index }) {
  const ref = useReveal()
  return (
    <div
      ref={ref}
      className="reveal card-surface rounded-xl p-5 hover:border-accent/40 hover:-translate-y-1 transition-all duration-300"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <span className="font-mono text-[11px] text-accent">{group.route}</span>
      <h3 className="font-display text-base text-ink mt-1.5 mb-4">{group.label}</h3>
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <Tag key={skill} muted>
            {skill}
          </Tag>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 border-t border-surface-border">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <SectionHeading
          route="/skills"
          title="Toolkit"
          description="Languages, frameworks and platforms used across coursework and shipped projects."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, i) => (
            <SkillCard key={group.label} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
