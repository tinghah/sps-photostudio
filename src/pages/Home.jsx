import { useTranslation } from 'react-i18next'

export default function Home() {
  const { t } = useTranslation()

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('hero_heading')}</h1>
          <p className="text-xl mb-8 opacity-90">{t('hero_subheading')}</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-secondary hover:opacity-90 text-white px-8 py-3 rounded-lg font-bold transition">
              {t('hero_view_gallery')}
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-primary text-white px-8 py-3 rounded-lg font-bold transition">
              {t('hero_book_appointment')}
            </button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-4">{t('intro_welcome_heading')}</h2>
            <p className="text-gray-700 mb-4">{t('intro_paragraph_1')}</p>
            <p className="text-gray-700 mb-4">{t('intro_paragraph_2')}</p>
            <p className="text-gray-700 font-bold text-primary">{t('intro_paragraph_3')}</p>
          </div>
          <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
            <span className="text-gray-400">📷 {t('site_title')}</span>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 px-4 bg-cream">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-primary mb-4">{t('services_heading')}</h2>
          <p className="text-center text-gray-600 mb-12">{t('services_subheading')}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="h-40 bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-5xl">
                👤
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">{t('service_portrait_title')}</h3>
                <p className="text-gray-600 mb-4">{t('service_portrait_description')}</p>
                <button className="text-primary font-bold hover:text-secondary transition">{t('service_learn_more')} →</button>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="h-40 bg-gradient-to-r from-accent to-secondary flex items-center justify-center text-5xl">
                💍
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">{t('service_wedding_title')}</h3>
                <p className="text-gray-600 mb-4">{t('service_wedding_description')}</p>
                <button className="text-primary font-bold hover:text-secondary transition">{t('service_learn_more')} →</button>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="h-40 bg-gradient-to-r from-primary to-accent flex items-center justify-center text-5xl">
                🔧
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">{t('service_restoration_title')}</h3>
                <p className="text-gray-600 mb-4">{t('service_restoration_description')}</p>
                <button className="text-primary font-bold hover:text-secondary transition">{t('service_learn_more')} →</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">{t('why_choose_us_heading')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-cream rounded-lg">
              <h3 className="text-xl font-bold text-secondary mb-3">{t('why_choose_us_authenticity_title')}</h3>
              <p className="text-gray-700">{t('why_choose_us_authenticity_text')}</p>
            </div>
            <div className="p-6 bg-cream rounded-lg">
              <h3 className="text-xl font-bold text-secondary mb-3">{t('why_choose_us_legacy_title')}</h3>
              <p className="text-gray-700">{t('why_choose_us_legacy_text')}</p>
            </div>
            <div className="p-6 bg-cream rounded-lg">
              <h3 className="text-xl font-bold text-secondary mb-3">{t('why_choose_us_expertise_title')}</h3>
              <p className="text-gray-700">{t('why_choose_us_expertise_text')}</p>
            </div>
            <div className="p-6 bg-cream rounded-lg">
              <h3 className="text-xl font-bold text-secondary mb-3">{t('why_choose_us_local_title')}</h3>
              <p className="text-gray-700">{t('why_choose_us_local_text')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-cream">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">{t('cta_heading')}</h2>
          <p className="text-gray-600 mb-8">{t('cta_subheading')}</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-primary hover:opacity-90 text-white px-8 py-3 rounded-lg font-bold transition">
              {t('cta_book_now')}
            </button>
            <button className="border-2 border-primary hover:bg-primary hover:text-white text-primary px-8 py-3 rounded-lg font-bold transition">
              {t('cta_view_gallery')}
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
