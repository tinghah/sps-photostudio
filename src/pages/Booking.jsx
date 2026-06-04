import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function Booking() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'portrait',
    date: '',
    time: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your booking request! We will contact you soon.')
    setFormData({ name: '', email: '', phone: '', service: 'portrait', date: '', time: '', message: '' })
  }

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold">{t('booking_heading')}</h1>
          <p className="text-lg opacity-90">{t('booking_subheading')}</p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-gray-700 font-bold mb-2">{t('booking_form_name')}</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                placeholder={t('booking_form_name')}
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-bold mb-2">{t('booking_form_email')}</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                placeholder={t('booking_form_email')}
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-gray-700 font-bold mb-2">{t('booking_form_phone')}</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                placeholder={t('booking_form_phone')}
              />
            </div>

            {/* Service */}
            <div>
              <label className="block text-gray-700 font-bold mb-2">{t('booking_form_service')}</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
              >
                <option value="portrait">{t('service_portrait_title')}</option>
                <option value="wedding">{t('service_wedding_title')}</option>
                <option value="restoration">{t('service_restoration_title')}</option>
              </select>
            </div>

            {/* Date */}
            <div>
              <label className="block text-gray-700 font-bold mb-2">{t('booking_form_date')}</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
              />
            </div>

            {/* Time */}
            <div>
              <label className="block text-gray-700 font-bold mb-2">{t('booking_form_time')}</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-700 font-bold mb-2">{t('booking_form_message')}</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                placeholder={t('booking_form_message')}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-primary hover:opacity-90 text-white py-3 rounded-lg font-bold transition text-lg"
            >
              {t('booking_form_submit')}
            </button>
          </form>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-4 bg-cream">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">📞</div>
            <h3 className="font-bold text-primary mb-2">{t('footer_phone')}</h3>
            <p className="text-gray-600">+95 9 XXX XXXX</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">📧</div>
            <h3 className="font-bold text-primary mb-2">{t('footer_email')}</h3>
            <p className="text-gray-600">info@spsphotostudio.com</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🕐</div>
            <h3 className="font-bold text-primary mb-2">{t('footer_hours')}</h3>
            <p className="text-gray-600">9 AM - 6 PM</p>
          </div>
        </div>
      </section>
    </div>
  )
}
