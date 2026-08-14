export default function LinkButton({
  href,
  children,
  icon: Icon,
  variant = 'primary',
  external = true,
  className = '',
}) {
  const base =
    'inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 focus-visible:outline-none'
  const variants = {
    primary:
      'bg-accent text-bg hover:bg-accent/90 hover:-translate-y-0.5 shadow-[0_0_0_1px_rgba(79,209,197,0.2)]',
    secondary:
      'border border-surface-border text-ink hover:border-accent/50 hover:text-accent hover:-translate-y-0.5',
    ghost: 'text-ink-muted hover:text-accent',
  }

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {Icon && <Icon size={16} strokeWidth={2} />}
      {children}
    </a>
  )
}
