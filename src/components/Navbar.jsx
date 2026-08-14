import { useEffect, useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { useActiveSection } from '../hooks/useActiveSection'
import { profile } from '../data/resume'

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'coding', label: 'Coding' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(NAV_ITEMS.map((n) => n.id))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg/85 backdrop-blur-md border-b border-surface-border' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-content mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="font-mono text-sm text-ink hover:text-accent transition-colors"
        >
          sukhwinder<span className="text-accent">.dev</span>
        </a>

        <ul className="hidden md:flex items-center gap-1 font-mono text-[13px]">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 rounded-md transition-colors ${
                  active === item.id
                    ? 'text-accent bg-accent/5'
                    : 'text-ink-muted hover:text-ink'
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <a
          href={profile.resumeFile}
          download
          className="hidden md:inline-flex items-center gap-1.5 text-xs font-mono border border-surface-border rounded-lg px-3.5 py-2 text-ink hover:border-accent/50 hover:text-accent transition-colors"
        >
          Resume <ArrowUpRight size={13} />
        </a>

        <button
          className="md:hidden text-ink p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="px-5 pb-5 flex flex-col gap-1 bg-bg/95 backdrop-blur-md border-b border-surface-border font-mono text-sm">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-3 py-2.5 rounded-md ${
                  active === item.id ? 'text-accent bg-accent/5' : 'text-ink-muted'
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
          <li>
            <a
              href={profile.resumeFile}
              download
              className="w-full inline-flex items-center gap-1.5 px-3 py-2.5 text-accent"
            >
              Download Resume <ArrowUpRight size={13} />
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
