import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function Gallery() {
  const { t } = useTranslation()
  const [activeFilter, setActiveFilter] = useState('all')

  const galleryItems = [
    { id: 1, category: 'portraits', title: 'Family Portrait', emoji: '👨‍👩‍👧‍👦' },
    { id: 2, category: 'portraits', title: 'Professional Headshot', emoji: '👤' },
    { id: 3, category: 'portraits', title: 'Children Portrait', emoji: '👶' },
    { id: 4, category: 'weddings', title: 'Wedding Ceremony', emoji: '💍' },
    { id: 5, category: 'weddings', title: 'Reception Moments', emoji: '🎉' },
    { id: 6, category: 'weddings', title: 'Couple Portrait', emoji: '💑' },
    { id: 7, category: 'restoration', title: 'Restored Legacy Photo', emoji: '✨' },
    { id: 8, category: 'restoration', title: 'Color Restoration', emoji: '🎨' },
    { id: 9, category: 'restoration', title: 'Damage Repair', emoji: '🔧' },
  ]

  const filters = [
    { id: 'all', label: t('gallery_filter_all') },
    { id: 'portraits', label: t('gallery_filter_portraits') },
    { id: 'weddings', label: t('gallery_filter_weddings') },
    { id: 'restoration', label: t('gallery_filter_restoration') },
  ]

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter)

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold">{t('gallery_heading')}</h1>
          <p className="text-lg opacity-90">{t('gallery_subheading')}</p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-4 justify-center flex-wrap">
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-lg font-bold transition ${
                  activeFilter === filter.id
                    ? 'bg-primary text-white'
                    : 'bg-cream text-primary border-2 border-primary hover:bg-primary hover:text-white'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredItems.map(item => (
              <div
                key={item.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition transform hover:scale-105"
              >
                <div className="h-48 bg-gradient-to-br from-primary to-accent flex items-center justify-center text-6xl">
                  {item.emoji}
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 capitalize">{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
