const plans = [
  {
    name: 'Basic',
    price: '$29',
    period: 'month',
    featured: false,
    features: [
      'Access to gym floor',
      'Locker room access',
      '2 group classes/week',
      'Basic fitness assessment',
    ],
  },
  {
    name: 'Pro',
    price: '$59',
    period: 'month',
    featured: true,
    badge: 'Most Popular',
    features: [
      'Access to gym floor',
      'Locker room access',
      '2 group classes/week',
      'Basic fitness assessment',
      'Unlimited group classes',
      '1 personal training session/week',
      'Nutrition consultation',
      'Priority booking',
    ],
  },
  {
    name: 'Elite',
    price: '$99',
    period: 'month',
    featured: false,
    features: [
      'All Pro features',
      'Unlimited personal training',
      'Dedicated locker',
      'Spa & recovery access',
      '24/7 gym access',
      'Guest passes (2/month)',
      'Private training sessions',
      'Premium supplements discount',
    ],
  },
]

export default function Plans() {
  return (
    <section id="plans" className="bg-dark-brown py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="section-label">MEMBERSHIP PLANS</span>
          <h2 className="font-display text-5xl lg:text-6xl text-cream mt-3">Choose Your Plan</h2>
          <div className="gold-line mt-4" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
          {plans.map((plan, i) => (
            <PlanCard key={plan.name} plan={plan} delay={i * 0.1} />
          ))}
        </div>

      </div>
    </section>
  )
}

function PlanCard({ plan, delay }) {
  const { name, price, period, featured, badge, features } = plan

  return (
    <div
      className={`reveal relative rounded-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-2
        ${featured
          ? 'bg-gold border-2 border-gold shadow-2xl shadow-gold/30 -mt-6'
          : 'bg-jet border border-cream/10'
        }`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {/* Most popular badge */}
      {badge && (
        <div className="flex justify-center pt-5">
          <span className="bg-jet text-cream text-xs font-bold font-body px-4 py-1.5 rounded-full tracking-wide">
            {badge}
          </span>
        </div>
      )}

      <div className="p-8">
        {/* Plan Name */}
        <h3 className={`font-body font-bold text-xl mb-2 ${featured ? 'text-jet' : 'text-cream'}`}>
          {name}
        </h3>

        {/* Price */}
        <div className="flex items-end gap-1 mb-1">
          <span className={`font-display text-6xl leading-none ${featured ? 'text-jet' : 'text-cream'}`}>
            {price}
          </span>
          <span className={`text-sm mb-2 font-body ${featured ? 'text-jet/70' : 'text-cream/50'}`}>
            /{period}
          </span>
        </div>

        {/* Divider */}
        <div className={`w-full h-px my-5 ${featured ? 'bg-jet/20' : 'bg-gold/30'}`} />

        {/* Features */}
        <ul className="flex flex-col gap-2.5 mb-8">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <span className={`mt-0.5 text-sm font-body ${featured ? 'text-jet/80' : 'text-cream/70'}`}>
                — {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`w-full py-3.5 rounded-xl font-body font-bold text-sm transition-all duration-200
            ${featured
              ? 'bg-jet text-cream hover:bg-charcoal'
              : 'border-2 border-gold text-gold hover:bg-gold hover:text-jet'
            }`}
        >
          Join Today
        </button>
      </div>
    </div>
  )
}
