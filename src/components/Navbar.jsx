import { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['Home', 'About', 'Services', 'Plans', 'Contact']
  const searchItems = [
    { title: 'Home', sectionId: 'home', keywords: 'landing hero forge body future gym fitness center' },
    { title: 'About', sectionId: 'about', keywords: 'about us trainers facility champions mission' },
    { title: 'Services', sectionId: 'services', keywords: 'services offerings cardio weight training coaching classes nutrition recovery' },
    { title: 'Plans', sectionId: 'plans', keywords: 'plans membership basic pro elite pricing monthly' },
    { title: 'Contact', sectionId: 'contact', keywords: 'contact us feedback message email phone location' },
    { title: 'Weight Training', sectionId: 'services', keywords: 'weights muscle strength workout' },
    { title: 'Cardio Zone', sectionId: 'services', keywords: 'cardio endurance burn calories treadmill' },
    { title: 'Personal Coaching', sectionId: 'services', keywords: 'trainer one on one coaching' },
    { title: 'Group Classes', sectionId: 'services', keywords: 'hiit boxing yoga classes' },
    { title: 'Nutrition Plans', sectionId: 'services', keywords: 'meal diet nutrition plans' },
    { title: 'Recovery & Spa', sectionId: 'services', keywords: 'recovery sauna massage ice bath' },
    { title: 'Basic Plan', sectionId: 'plans', keywords: 'basic plan beginner entry' },
    { title: 'Pro Plan', sectionId: 'plans', keywords: 'pro plan popular personal training' },
    { title: 'Elite Plan', sectionId: 'plans', keywords: 'elite premium 24/7 spa' },
  ]
  const trimmedQuery = searchQuery.trim().toLowerCase()
  const matchingItems = trimmedQuery
    ? searchItems.filter((item) => {
      const haystack = `${item.title} ${item.keywords}`.toLowerCase()
      return haystack.includes(trimmedQuery)
    })
    : []

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase())
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  const handleSearchSelect = (sectionId) => {
    scrollTo(sectionId)
    setSearchQuery('')
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
          <div className="hidden md:block relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search website"
              className="bg-dark-brown border border-gold/25 rounded-lg px-3 py-2 text-sm text-cream placeholder-cream/40 outline-none focus:border-gold focus:ring-1 focus:ring-gold/30"
              aria-label="Search website content"
            />

            {trimmedQuery && (
              <div className="absolute top-12 right-0 w-72 bg-dark-brown border border-gold/25 rounded-xl shadow-2xl overflow-hidden z-50">
                {matchingItems.length > 0 ? (
                  <div className="max-h-72 overflow-y-auto">
                    {matchingItems.map((item) => (
                      <button
                        key={`${item.title}-${item.sectionId}`}
                        type="button"
                        onClick={() => handleSearchSelect(item.sectionId)}
                        className="w-full text-left px-4 py-3 border-b border-gold/10 last:border-b-0 hover:bg-gold/10 transition-colors"
                      >
                        <span className="text-cream text-sm font-body">{item.title}</span>
                        <span className="block text-cream/45 text-xs font-body mt-0.5">Go to {item.sectionId}</span>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="px-4 py-3 text-cream/60 text-sm font-body">No matching section found</div>
                )}
              </div>
            )}
          </div>

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
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search website"
            className="bg-jet border border-gold/25 rounded-lg px-3 py-2 text-sm text-cream placeholder-cream/40 outline-none focus:border-gold focus:ring-1 focus:ring-gold/30"
            aria-label="Search website content"
          />

          {trimmedQuery && matchingItems.length > 0 ? (
            matchingItems.map((item) => (
              <button
                key={`${item.title}-${item.sectionId}`}
                onClick={() => handleSearchSelect(item.sectionId)}
                className="text-cream/80 hover:text-gold font-body font-medium text-base text-left py-2 border-b border-white/5 transition-colors"
              >
                {item.title}
              </button>
            ))
          ) : (
            links.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="text-cream/80 hover:text-gold font-body font-medium text-base text-left py-2 border-b border-white/5 transition-colors"
              >
                {link}
              </button>
            ))
          )}

          {trimmedQuery && matchingItems.length === 0 && (
            <span className="text-cream/50 font-body text-sm">No matching section found</span>
          )}
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
