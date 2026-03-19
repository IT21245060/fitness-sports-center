const services = [
  {
    icon: '🏋️',
    title: 'Weight Training',
    description: 'Build muscle and strength with our comprehensive weight training programs.',
  },
  {
    icon: '❤️',
    title: 'Cardio Zone',
    description: 'State-of-the-art cardio equipment to boost your endurance and burn calories.',
  },
  {
    icon: '👟',
    title: 'Personal Coaching',
    description: 'One-on-one training sessions tailored to your specific fitness goals.',
  },
  {
    icon: '🥊',
    title: 'Group Classes',
    description: 'High-energy group workouts including HIIT, boxing, and yoga sessions.',
  },
  {
    icon: '🥗',
    title: 'Nutrition Plans',
    description: 'Custom meal plans designed by certified nutritionists to fuel your progress.',
  },
  {
    icon: '⭐',
    title: 'Recovery & Spa',
    description: 'Premium recovery facilities including sauna, massage, and ice baths.',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-jet py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="section-label">What we offer</span>
          <h2 className="font-display text-5xl lg:text-6xl text-cream mt-3">Our Services</h2>
          <div className="gold-line mt-4" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} delay={i * 0.08} />
          ))}
        </div>

      </div>
    </section>
  )
}

function ServiceCard({ service, delay }) {
  return (
    <div
      className="reveal group bg-dark-brown border border-gold/15 rounded-xl p-7 cursor-default
        transition-all duration-300 hover:border-gold/60 hover:bg-dark-brown/80
        relative overflow-hidden"
      style={{ transitionDelay: `${delay}s` }}
    >
      {/* Left gold border on hover */}
      <div className="absolute left-0 top-0 w-0.5 h-full bg-gold scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

      {/* Icon */}
      <div className="w-14 h-14 bg-gold/15 border border-gold/30 rounded-xl flex items-center justify-center mb-5 text-2xl
        group-hover:bg-gold/25 transition-colors duration-300">
        {service.icon}
      </div>

      {/* Title */}
      <h3 className="font-body font-700 text-lg text-gold mb-2 font-bold">{service.title}</h3>

      {/* Description */}
      <p className="text-cream/65 text-sm leading-relaxed font-body">{service.description}</p>
    </div>
  )
}
