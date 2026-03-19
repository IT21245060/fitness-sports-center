import { CheckCircle } from 'lucide-react'

export default function About() {
  const stats = [
    { number: '500+', label: 'Members' },
    { number: '15+', label: 'Trainers' },
    { number: '50+', label: 'Equipment' },
  ]

  const features = [
    'Expert certified trainers',
    'State-of-the-art equipment',
    'Flexible membership options',
  ]

  return (
    <section id="about" className="bg-dark-brown py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Image + Stats */}
          <div className="flex flex-col gap-6 reveal-left">
            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 mb-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-4xl text-gold">{stat.number}</div>
                  <div className="text-cream/70 text-sm font-body mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden border border-gold/10">
              <img
                src="/gym-interior.jpg"
                alt="Gym Interior"
                className="w-full h-80 lg:h-96 object-cover"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextElementSibling.style.display = 'flex'
                }}
              />
              {/* Fallback placeholder */}
              <div
                className="w-full h-80 lg:h-96 bg-jet items-center justify-center rounded-2xl"
                style={{ display: 'flex' }}
              >
                <div className="text-center">
                  <div className="text-6xl mb-4">🏋️</div>
                  <div className="text-gold font-display text-2xl">WORLD CLASS FACILITY</div>
                  <div className="text-cream/40 text-sm mt-2 font-body">Add gym-interior.jpg to /public</div>
                </div>
              </div>

              {/* Badge overlay */}
              <div className="absolute bottom-4 left-4 bg-jet/90 border border-gold/30 rounded-xl px-4 py-2 backdrop-blur-sm">
                <span className="text-gold font-display text-sm tracking-wider">#1 GYM IN THE CITY</span>
              </div>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="flex flex-col gap-6 reveal-right">
            <div>
              <span className="section-label">ABOUT US</span>
              <h2 className="font-display text-5xl lg:text-6xl text-cream mt-3 leading-tight">
                More Than Just<br />A Gym
              </h2>
              <div className="gold-line-left mt-4" />
            </div>

            <p className="text-cream/70 text-base lg:text-lg leading-relaxed font-body">
              We are more than iron and sweat. Fitness Sports Center was founded in 2023
              with one mission — to build champions. Whether you're a beginner or a pro,
              our world-class facility and expert coaches will push you beyond your limits.
            </p>

            <div className="flex flex-col gap-3 mt-2">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-gold flex-shrink-0" />
                  <span className="text-cream/80 font-body">{feature}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => document.getElementById('plans').scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary self-start mt-4"
            >
              View Plans
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}
