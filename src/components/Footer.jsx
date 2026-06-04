import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-primary text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-2">{t('site_title')}</h3>
            <p className="text-gray-200 text-sm">{t('footer_description')}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">{t('footer_quick_links')}</h4>
            <ul className="space-y-2 text-sm text-gray-200">
              <li><a href="#" className="hover:text-secondary transition">{t('nav_home')}</a></li>
              <li><a href="#" className="hover:text-secondary transition">{t('nav_about')}</a></li>
              <li><a href="#" className="hover:text-secondary transition">{t('nav_gallery')}</a></li>
              <li><a href="#" className="hover:text-secondary transition">{t('nav_services')}</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">{t('footer_services_heading')}</h4>
            <ul className="space-y-2 text-sm text-gray-200">
              <li><a href="#" className="hover:text-secondary transition">{t('service_portrait_title')}</a></li>
              <li><a href="#" className="hover:text-secondary transition">{t('service_wedding_title')}</a></li>
              <li><a href="#" className="hover:text-secondary transition">{t('service_restoration_title')}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">{t('footer_contact_heading')}</h4>
            <ul className="space-y-2 text-sm text-gray-200">
              <li><strong>{t('footer_phone')}:</strong> +95 9 XXX XXXX</li>
              <li><strong>{t('footer_email')}:</strong> info@spsphotostudio.com</li>
              <li><strong>{t('footer_address')}:</strong> Yangon, Myanmar</li>
              <li><strong>{t('footer_hours')}:</strong> 9 AM - 6 PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary pt-6 text-center text-sm text-gray-200">
          <p>&copy; 2026 {t('site_title')}. {t('footer_copyright')}</p>
        </div>
      </div>
    </footer>
  )
}
