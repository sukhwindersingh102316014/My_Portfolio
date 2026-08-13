import { useReveal } from '../hooks/useReveal'

export default function SectionHeading({ route, title, description }) {
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal max-w-2xl mb-12 md:mb-16">
      <span className="route-label">{route}</span>
      <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink mt-3 tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="text-ink-muted mt-4 leading-relaxed">{description}</p>
      )}
    </div>
  )
}
