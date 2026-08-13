import { profile } from '../data/resume'

export default function Footer() {
  return (
    <footer className="border-t border-surface-border py-8">
      <div className="max-w-content mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-xs text-ink-faint">
          © {new Date().getFullYear()} {profile.name}. HTTP/1.1 200 OK.
        </p>
        <p className="font-mono text-xs text-ink-faint">Built with React &amp; Tailwind CSS.</p>
      </div>
    </footer>
  )
}
