export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="min-h-screen bg-jet flex items-center pt-20 relative overflow-hidden"
    >
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(#C99A10 1px, transparent 1px), linear-gradient(90deg, #C99A10 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Gold bottom border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gold/40" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)] py-16">

          {/* Left: Text Content */}
          <div className="flex flex-col gap-6">
            <div className="reveal">
              <span className="section-label">EST. 2023</span>
            </div>

            <h1
              className="font-display text-[5rem] sm:text-[7rem] lg:text-[8.5rem] leading-[0.9] text-cream reveal"
              style={{ transitionDelay: '0.1s' }}
            >
              FORGE
              <br />
              YOUR
              <br />
              BODY.
              <br />
              <span className="text-gold">FORGE</span>
              <br />
              YOUR
              <br />
              FUTURE.
            </h1>

            <p
              className="text-cream/65 text-base lg:text-lg leading-relaxed max-w-md reveal font-body"
              style={{ transitionDelay: '0.2s' }}
            >
              Join Fitness Sports Center — where champions are built. Expert trainers,
              world-class equipment, and a community that pushes you further.
            </p>

            <div
              className="flex flex-wrap gap-4 reveal"
              style={{ transitionDelay: '0.3s' }}
            >
              <button
                onClick={() => scrollTo('plans')}
                className="btn-primary text-sm"
              >
                Get Started
              </button>
              <button
                onClick={() => scrollTo('plans')}
                className="btn-outline text-sm"
              >
                View Plans
              </button>
            </div>

            {/* Stats */}
            <div
              className="flex items-center gap-0 mt-4 reveal"
              style={{ transitionDelay: '0.4s' }}
            >
              {[
                { number: '500+', label: 'Members' },
                { number: '15+', label: 'Trainers' },
                { number: '50+', label: 'Equipment' },
              ].map((stat, i) => (
                <div key={stat.label} className="flex items-center">
                  <div className="px-6 first:pl-0 text-center">
                    <div className="font-display text-3xl text-gold">{stat.number}</div>
                    <div className="text-cream/60 text-sm font-body">{stat.label}</div>
                  </div>
                  {i < 2 && <div className="w-px h-10 bg-gold/30" />}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Logo Image */}
          <div
            className="flex items-center justify-center reveal-right"
            style={{ transitionDelay: '0.2s' }}
          >
            <div className="relative">
              {/* Glow effect behind logo */}
              <div
                className="absolute inset-0 rounded-2xl blur-3xl opacity-20"
                style={{ background: 'radial-gradient(circle, #C99A10 0%, transparent 70%)' }}
              />
              <img
                src="/logo.png"
                alt="Fitness Sports Center"
                className="relative z-10 w-full max-w-sm lg:max-w-md xl:max-w-lg object-contain drop-shadow-2xl"
                onError={(e) => {
                  // Fallback placeholder if image not found
                  e.target.style.display = 'none'
                  e.target.nextElementSibling.style.display = 'flex'
                }}
              />
              {/* Fallback */}
              <div
                className="hidden w-80 h-80 rounded-full border-4 border-gold/40 items-center justify-center bg-dark-brown"
                style={{ display: 'none' }}
              >
                <span className="font-display text-5xl text-gold text-center leading-tight">
                  FITNESS<br />SPORTS<br />CENTER
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
