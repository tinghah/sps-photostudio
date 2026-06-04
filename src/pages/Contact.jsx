import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function Contact() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold">{t('contact_heading')}</h1>
          <p className="text-lg opacity-90">{t('contact_subheading')}</p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-gray-700 font-bold mb-2">{t('contact_form_name')}</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                  placeholder={t('contact_form_name')}
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 font-bold mb-2">{t('contact_form_email')}</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                  placeholder={t('contact_form_email')}
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-gray-700 font-bold mb-2">{t('contact_form_subject')}</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                  placeholder={t('contact_form_subject')}
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-700 font-bold mb-2">{t('contact_form_message')}</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                  placeholder={t('contact_form_message')}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-primary hover:opacity-90 text-white py-3 rounded-lg font-bold transition text-lg"
              >
                {t('contact_form_submit')}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6">Contact Information</h2>
            
            <div className="space-y-8">
              {/* Phone */}
              <div className="flex gap-4">
                <div className="text-3xl">📞</div>
                <div>
                  <h3 className="font-bold text-primary mb-1">{t('contact_phone')}</h3>
                  <p className="text-gray-600">+95 9 XXX XXXX</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="text-3xl">📧</div>
                <div>
                  <h3 className="font-bold text-primary mb-1">{t('contact_email')}</h3>
                  <p className="text-gray-600">info@spsphotostudio.com</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex gap-4">
                <div className="text-3xl">📍</div>
                <div>
                  <h3 className="font-bold text-primary mb-1">{t('contact_address')}</h3>
                  <p className="text-gray-600">Yangon, Myanmar</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <div className="text-3xl">🕐</div>
                <div>
                  <h3 className="font-bold text-primary mb-1">{t('contact_hours')}</h3>
                  <p className="text-gray-600">Monday - Friday: 9 AM - 6 PM</p>
                  <p className="text-gray-600">Saturday: 10 AM - 4 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 bg-gray-200 h-48 rounded-lg flex items-center justify-center">
              <span className="text-gray-400">📍 Map Location</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
