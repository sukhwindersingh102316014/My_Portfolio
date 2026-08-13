import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import ApiConsole from './ApiConsole'
import LinkButton from './LinkButton'
import { profile } from '../data/resume'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden"
    >
      <div className="max-w-content mx-auto px-5 sm:px-8 w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        <div className="animate-fadeUp" style={{ animationDelay: '80ms' }}>
          <span className="route-label">/hero</span>

          <h1 className="font-display text-[2.6rem] leading-[1.08] sm:text-6xl sm:leading-[1.06] font-semibold text-ink mt-5 tracking-tight">
            {profile.name}
            <br />
            <span className="text-ink-muted">builds the API layer</span>
            <br />
            <span className="text-accent">and the UI that calls it.</span>
          </h1>

          <p className="text-ink-muted mt-6 max-w-lg leading-relaxed text-[15px]">
            {profile.summary}
          </p>

          <div className="flex flex-wrap items-center gap-3 mt-8">
            <LinkButton href="#projects" external={false} variant="primary">
              View projects
            </LinkButton>
            <LinkButton href={profile.resumeFile} external={false} variant="secondary">
              Download résumé
            </LinkButton>
          </div>

          <div className="flex items-center gap-5 mt-9 text-ink-faint">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="hover:text-accent transition-colors"
            >
              <Github size={19} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="hover:text-accent transition-colors"
            >
              <Linkedin size={19} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Send email"
              className="hover:text-accent transition-colors"
            >
              <Mail size={19} />
            </a>
            <span className="h-4 w-px bg-surface-border" />
            <span className="font-mono text-xs text-ink-faint">{profile.phone}</span>
          </div>
        </div>

        <div
          className="animate-fadeUp"
          style={{ animationDelay: '220ms' }}
        >
          <ApiConsole />
        </div>
      </div>

      <button
        onClick={() =>
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
        }
        aria-label="Scroll to about section"
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-ink-faint hover:text-accent transition-colors animate-floatSlow"
      >
        <span className="font-mono text-[11px]">scroll</span>
        <ArrowDown size={16} />
      </button>
    </section>
  )
}
