import { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['Home', 'About', 'Services', 'Plans']

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase())
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-jet/95 backdrop-blur-md shadow-lg' : 'bg-jet'
      } border-b border-gold/20`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo('home')}>
          <img
            src="/logo.png"
            alt="Fitness Sports Center"
            className="h-12 w-12 object-contain rounded"
            onError={(e) => {
              e.target.style.display = 'none'
            }}
          />
          <span className="font-display text-2xl text-cream tracking-wider hidden sm:block">
            FITNESS <span className="text-gold">SC</span>
          </span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-cream/80 hover:text-gold font-body font-medium text-sm tracking-wide transition-colors duration-200 relative group"
            >
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Dark mode toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full border border-gold/30 text-gold hover:border-gold hover:bg-gold/10 transition-all duration-200"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* CTA */}
          <button
            onClick={() => scrollTo('Plans')}
            className="hidden md:block btn-primary text-sm py-3 px-6"
          >
            Join Now
          </button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-cream hover:text-gold transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        } bg-dark-brown border-t border-gold/20`}
      >
        <div className="flex flex-col px-6 py-4 gap-4">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-cream/80 hover:text-gold font-body font-medium text-base text-left py-2 border-b border-white/5 transition-colors"
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => scrollTo('Plans')}
            className="btn-primary text-sm py-3 mt-2"
          >
            Join Now
          </button>
        </div>
      </div>
    </nav>
  )
}
