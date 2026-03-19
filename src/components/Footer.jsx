import { Instagram, Facebook, Youtube } from 'lucide-react'

export default function Footer() {
  const socialLinks = [
    { Icon: Instagram, href: '#', label: 'Instagram' },
    { Icon: Facebook, href: '#', label: 'Facebook' },
    { Icon: Youtube, href: '#', label: 'YouTube' },
  ]

  return (
    <footer className="bg-jet border-t border-gold/25 py-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">

        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Fitness Sports Center"
            className="h-10 w-10 object-contain rounded"
            onError={(e) => { e.target.style.display = 'none' }}
          />
          <span className="font-display text-lg text-cream tracking-wider">
            FITNESS <span className="text-gold">SC</span>
          </span>
        </div>

        {/* Center: Copyright */}
        <p className="text-cream/40 text-xs font-body text-center">
          © 2023 Fitness Sports Center. All rights reserved.
        </p>

        {/* Right: Socials */}
        <div className="flex items-center gap-3">
          {socialLinks.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="w-9 h-9 border border-gold/40 rounded-lg flex items-center justify-center text-gold
                hover:bg-gold hover:text-jet transition-all duration-200"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

      </div>
    </footer>
  )
}
