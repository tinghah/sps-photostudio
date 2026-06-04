import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Services from './pages/Services'
import Booking from './pages/Booking'
import Contact from './pages/Contact'

function App() {
  const { i18n } = useTranslation()
  const [currentPage, setCurrentPage] = useState('home')

  useEffect(() => {
    // Set Burmese font when language changes
    if (i18n.language === 'mm') {
      document.documentElement.style.fontFamily = "'Noto Sans Myanmar', 'Segoe UI', sans-serif"
    } else {
      document.documentElement.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }
  }, [i18n.language])

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />
      case 'about':
        return <About />
      case 'gallery':
        return <Gallery />
      case 'services':
        return <Services />
      case 'booking':
        return <Booking />
      case 'contact':
        return <Contact />
      default:
        return <Home />
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  )
}

export default App
