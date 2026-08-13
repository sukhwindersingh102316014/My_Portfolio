import { Mail, Phone, Github, Linkedin, ArrowUpRight } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import { profile } from '../data/resume'

const CHANNELS = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}`, icon: Phone },
  { label: 'GitHub', value: 'sukhwindersingh102316014', href: profile.github, icon: Github },
  {
    label: 'LinkedIn',
    value: 'sukhwinder-singh',
    href: profile.linkedin,
    icon: Linkedin,
  },
]

export default function Contact() {
  const ref = useReveal()
  return (
    <section id="contact" className="py-24 md:py-32 border-t border-surface-border">
      <div className="max-w-content mx-auto px-5 sm:px-8">
        <div ref={ref} className="reveal">
          <span className="route-label">/contact</span>
          <h2 className="font-display text-3xl sm:text-5xl font-semibold text-ink mt-3 tracking-tight max-w-xl">
            Open to internship &amp; SDE roles.
          </h2>
          <p className="text-ink-muted mt-4 max-w-lg leading-relaxed">
            Reach out directly — happy to talk through backend architecture, a project walkthrough,
            or an opportunity.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mt-10 max-w-2xl">
            {CHANNELS.map(({ label, value, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="card-surface rounded-xl px-5 py-4 flex items-center gap-4 hover:border-accent/40 hover:-translate-y-0.5 transition-all duration-200 group"
              >
                <span className="h-9 w-9 rounded-lg bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                  <Icon size={16} />
                </span>
                <span className="min-w-0">
                  <span className="block font-mono text-[11px] text-ink-faint">{label}</span>
                  <span className="block text-sm text-ink truncate group-hover:text-accent transition-colors">
                    {value}
                  </span>
                </span>
                <ArrowUpRight
                  size={15}
                  className="ml-auto text-ink-faint group-hover:text-accent transition-colors flex-shrink-0"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
