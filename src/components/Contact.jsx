import { useEffect, useRef, useState } from 'react'
import { MapPin, Phone, Mail, CheckCircle } from 'lucide-react'

export default function Contact() {
  const toastAnimationDuration = 250
  const toastAutoDismissDelay = 4000
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [toastVisible, setToastVisible] = useState(false)
  const [loading, setLoading] = useState(false)
  const showToastTimerRef = useRef(null)
  const hideToastTimerRef = useRef(null)

  useEffect(() => {
    return () => {
      if (showToastTimerRef.current) {
        window.clearTimeout(showToastTimerRef.current)
      }

      if (hideToastTimerRef.current) {
        window.clearTimeout(hideToastTimerRef.current)
      }
    }
  }, [])

  const validate = () => {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'Name is required'
    if (!form.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Enter a valid email'
    }
    if (!form.message.trim()) newErrors.message = 'Message is required'
    else if (form.message.trim().length < 10) newErrors.message = 'Message too short (min 10 chars)'
    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))

    if (touched[name]) {
      const nextForm = { ...form, [name]: value }
      const nextError = validateField(name, nextForm[name])

      setErrors((prev) => ({
        ...prev,
        [name]: nextError,
      }))
    }
  }

  const validateField = (name, value) => {
    if (name === 'name') {
      if (!value.trim()) return 'Name is required'
      if (value.trim().length < 2) return 'Enter at least 2 characters'
    }

    if (name === 'email') {
      if (!value.trim()) return 'Email is required'
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Enter a valid email'
    }

    if (name === 'message') {
      if (!value.trim()) return 'Message is required'
      if (value.trim().length < 10) return 'Message too short (min 10 chars)'
    }

    return ''
  }

  const handleBlur = (e) => {
    const { name, value } = e.target

    setTouched((prev) => ({ ...prev, [name]: true }))
    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }))
  }

  const clearToastTimers = () => {
    if (showToastTimerRef.current) {
      window.clearTimeout(showToastTimerRef.current)
      showToastTimerRef.current = null
    }

    if (hideToastTimerRef.current) {
      window.clearTimeout(hideToastTimerRef.current)
      hideToastTimerRef.current = null
    }
  }

  const showSuccessToast = () => {
    clearToastTimers()
    setSubmitted(true)
    setToastVisible(false)

    showToastTimerRef.current = window.setTimeout(() => {
      setToastVisible(true)
      showToastTimerRef.current = null
    }, 10)

    hideToastTimerRef.current = window.setTimeout(() => {
      hideSuccessToast()
    }, toastAutoDismissDelay)
  }

  const hideSuccessToast = () => {
    clearToastTimers()
    setToastVisible(false)

    hideToastTimerRef.current = window.setTimeout(() => {
      setSubmitted(false)
      hideToastTimerRef.current = null
    }, toastAnimationDuration)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setTouched({ name: true, email: true, message: true })
      setErrors(validationErrors)
      return
    }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      showSuccessToast()
      setForm({ name: '', email: '', message: '' })
      setTouched({})
      setErrors({})
    }, 1200)
  }

  const contactInfo = [
    { Icon: MapPin, label: '123 Fitness Street, Colombo, Sri Lanka', href: null },
    { Icon: Phone, label: '+94 11 234 5678', href: 'tel:+94112345678' },
    { Icon: Mail, label: 'hello@fitnesssportscenter.lk', href: 'mailto:hello@fitnesssportscenter.lk' },
  ]

  const inputClass = (field) =>
    `w-full bg-dark-brown border rounded-xl px-4 py-3.5 text-cream placeholder-cream/35 font-body text-sm
    outline-none transition-all duration-200 focus:border-gold focus:ring-1 focus:ring-gold/30
    ${errors[field] ? 'border-red-500/70' : 'border-gold/25'}`

  return (
    <section id="contact" className="bg-jet py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="section-label">Contact Us</span>
          <h2 className="font-display text-5xl lg:text-6xl text-cream mt-3">Get In Touch</h2>
          <div className="gold-line mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left: Contact Info */}
          <div className="flex flex-col gap-8 reveal-left">
            {contactInfo.map(({ Icon, label, href }) => (
              <div key={label} className="flex items-start gap-5">
                <div className="w-12 h-12 bg-gold rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className="text-jet" />
                </div>
                {href ? (
                  <a
                    href={href}
                    className="text-cream/80 font-body text-base hover:text-gold transition-colors mt-3"
                  >
                    {label}
                  </a>
                ) : (
                  <p className="text-cream/80 font-body text-base mt-3">{label}</p>
                )}
              </div>
            ))}

            {/* Map placeholder */}
            <div className="bg-dark-brown rounded-2xl border border-gold/15 h-48 flex items-center justify-center mt-2">
              <div className="text-center">
                <MapPin size={28} className="text-gold mx-auto mb-2" />
                <span className="text-gold font-body font-semibold text-sm tracking-wide">Find Us Here</span>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="reveal-right relative">
            {submitted && (
              <div
                role="status"
                aria-live="polite"
                className={`absolute left-0 right-0 top-0 z-10 mx-auto w-full max-w-md rounded-2xl border border-gold/30 bg-dark-brown/95 px-5 py-4 shadow-2xl backdrop-blur-sm transition-all duration-300 ${toastVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gold text-jet">
                    <CheckCircle size={20} />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="font-display text-2xl text-cream">Feedback Submitted Successfully</h3>
                    <p className="mt-1 text-sm text-cream/70 font-body">
                      Your feedback has been received successfully. We&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={hideSuccessToast}
                    className="text-sm font-body text-cream/60 transition-colors hover:text-gold"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              noValidate
              className={`transition-all duration-300 ${submitted ? 'pt-32' : ''}`}
            >
                <h3 className="font-body font-bold text-xl text-cream mb-6">Send Us A Message</h3>

                <div className="flex flex-col gap-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="contact-name" className="sr-only">Your Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={form.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      minLength={2}
                      autoComplete="name"
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'contact-name-error' : undefined}
                      className={inputClass('name')}
                    />
                    {errors.name && (
                      <p id="contact-name-error" className="text-red-400 text-xs mt-1 font-body">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="contact-email" className="sr-only">Your Email</label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={form.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      autoComplete="email"
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'contact-email-error' : undefined}
                      className={inputClass('email')}
                    />
                    {errors.email && (
                      <p id="contact-email-error" className="text-red-400 text-xs mt-1 font-body">{errors.email}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="sr-only">Your Message</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      placeholder="Your Message"
                      value={form.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      rows={5}
                      required
                      minLength={10}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? 'contact-message-error' : undefined}
                      className={`${inputClass('message')} resize-none`}
                    />
                    {errors.message && (
                      <p id="contact-message-error" className="text-red-400 text-xs mt-1 font-body">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full text-sm py-4 mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>

                  <p className="text-cream/35 text-xs text-center font-body">
                    We'll get back to you within 24 hours
                  </p>
                </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
