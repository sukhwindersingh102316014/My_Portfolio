export default function Tag({ children, muted = false }) {
  return (
    <span
      className={
        'inline-flex items-center rounded-md px-2.5 py-1 text-xs font-mono border transition-colors ' +
        (muted
          ? 'border-surface-border text-ink-muted bg-transparent'
          : 'border-accent-soft/60 text-accent bg-accent/5')
      }
    >
      {children}
    </span>
  )
}
