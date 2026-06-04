import { useTranslation } from 'react-i18next'

export default function About() {
  const { t } = useTranslation()

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold">{t('about_heading')}</h1>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
            <span className="text-gray-400">📷 {t('site_title')}</span>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-primary mb-4">{t('about_story_title')}</h2>
            <p className="text-gray-700 mb-4">{t('about_story_text')}</p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-cream">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-4">{t('about_mission_title')}</h2>
            <p className="text-gray-700 mb-4">{t('about_mission_text')}</p>
          </div>
          <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
            <span className="text-gray-400">🎯 {t('about_mission_title')}</span>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">{t('about_values_title')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-cream rounded-lg">
              <div className="text-4xl mb-4">✓</div>
              <h3 className="text-xl font-bold text-primary mb-2">{t('about_authenticity')}</h3>
              <p className="text-gray-600">We believe in real photography and real expertise</p>
            </div>
            <div className="text-center p-6 bg-cream rounded-lg">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-bold text-primary mb-2">{t('about_excellence')}</h3>
              <p className="text-gray-600">Every project receives meticulous attention to detail</p>
            </div>
            <div className="text-center p-6 bg-cream rounded-lg">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-primary mb-2">{t('about_community')}</h3>
              <p className="text-gray-600">We serve our local Myanmar community with pride</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
