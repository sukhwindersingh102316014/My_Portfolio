import { ExternalLink, Github, BookOpenText } from 'lucide-react'
import Tag from './Tag'
import { useReveal } from '../hooks/useReveal'

export default function ProjectCard({ project, index }) {
  const ref = useReveal()
  const { name, tagline, stack, bullets, links } = project

  return (
    <article
      ref={ref}
      className="reveal card-surface rounded-2xl p-6 sm:p-7 hover:border-accent/40 transition-all duration-300 group"
      style={{ animationDelay: `${index * 90}ms` }}
    >
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <span className="font-mono text-[11px] text-ink-faint">
            0{index + 1} / project
          </span>
          <h3 className="font-display text-2xl text-ink mt-1 group-hover:text-accent transition-colors">
            {name}
          </h3>
          <p className="text-ink-muted text-sm mt-1.5 max-w-md">{tagline}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-5">
        {stack.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>

      <ul className="mt-5 space-y-2">
        {bullets.map((b, i) => (
          <li key={i} className="text-sm text-ink-muted leading-relaxed flex gap-2.5">
            <span className="text-accent mt-1.5 h-1 w-1 rounded-full bg-accent flex-shrink-0" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap items-center gap-2.5 mt-6 pt-5 border-t border-surface-border">
        {links.github && (
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-surface-border px-3 py-1.5 text-xs font-mono text-ink-muted hover:text-accent hover:border-accent/50 transition-colors"
          >
            <Github size={13} /> SRC
          </a>
        )}
        {links.live && (
          <a
            href={links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-accent-soft/60 bg-accent/5 px-3 py-1.5 text-xs font-mono text-accent hover:bg-accent/10 transition-colors"
          >
            <ExternalLink size={13} /> LIVE
          </a>
        )}
        {links.swagger && (
          <a
            href={links.swagger}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-surface-border px-3 py-1.5 text-xs font-mono text-ink-muted hover:text-accent-amber hover:border-accent-amber/50 transition-colors"
          >
            <BookOpenText size={13} /> DOCS
          </a>
        )}
      </div>
    </article>
  )
}
