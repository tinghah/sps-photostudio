import { useTranslation } from 'react-i18next'

export default function Services() {
  const { t } = useTranslation()

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold">{t('nav_services')}</h1>
          <p className="text-lg opacity-90">{t('services_subheading')}</p>
        </div>
      </section>

      {/* Portrait Photography */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="bg-gradient-to-br from-primary to-secondary h-64 rounded-lg flex items-center justify-center text-6xl">
            👤
          </div>
          <div>
            <h2 className="text-3xl font-bold text-primary mb-4">{t('service_portrait_title')}</h2>
            <p className="text-gray-700 mb-4">{t('service_portrait_description')}</p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li>✓ Individual Portraits</li>
              <li>✓ Family Sessions</li>
              <li>✓ Children Photography</li>
              <li>✓ Professional Headshots</li>
            </ul>
            <button className="bg-primary hover:opacity-90 text-white px-8 py-3 rounded-lg font-bold transition">
              {t('service_learn_more')}
            </button>
          </div>
        </div>
      </section>

      {/* Wedding Photography */}
      <section className="py-16 px-4 bg-cream">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-4">{t('service_wedding_title')}</h2>
            <p className="text-gray-700 mb-4">{t('service_wedding_description')}</p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li>✓ Full Day Coverage</li>
              <li>✓ Ceremony & Reception</li>
              <li>✓ Candid Moments</li>
              <li>✓ Professional Editing</li>
            </ul>
            <button className="bg-primary hover:opacity-90 text-white px-8 py-3 rounded-lg font-bold transition">
              {t('service_learn_more')}
            </button>
          </div>
          <div className="bg-gradient-to-br from-accent to-secondary h-64 rounded-lg flex items-center justify-center text-6xl">
            💍
          </div>
        </div>
      </section>

      {/* Photo Restoration */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="bg-gradient-to-br from-primary to-accent h-64 rounded-lg flex items-center justify-center text-6xl">
            🔧
          </div>
          <div>
            <h2 className="text-3xl font-bold text-primary mb-4">{t('service_restoration_title')}</h2>
            <p className="text-gray-700 mb-4">{t('service_restoration_description')}</p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li>✓ Damage Repair</li>
              <li>✓ Color Restoration</li>
              <li>✓ Faded Photo Enhancement</li>
              <li>✓ Digital Archiving</li>
            </ul>
            <button className="bg-primary hover:opacity-90 text-white px-8 py-3 rounded-lg font-bold transition">
              {t('service_learn_more')}
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-cream">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">{t('cta_heading')}</h2>
          <button className="bg-primary hover:opacity-90 text-white px-8 py-3 rounded-lg font-bold transition">
            {t('cta_book_now')}
          </button>
        </div>
      </section>
    </div>
  )
}
