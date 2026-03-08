import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { FaWhatsapp } from 'react-icons/fa'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem('theme-mode')
    if (savedTheme === 'light') {
      setIsDarkMode(false)
      document.documentElement.classList.add('light-mode')
    } else {
      setIsDarkMode(true)
      document.documentElement.classList.remove('light-mode')
    }
  }, [])

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight
      const clientHeight = document.documentElement.clientHeight
      const maxScroll = Math.max(scrollHeight - clientHeight, 1)
      const progress = Math.min((scrollTop / maxScroll) * 100, 100)
      setScrollProgress(progress)
    }

    updateScrollProgress()
    window.addEventListener('scroll', updateScrollProgress, { passive: true })
    window.addEventListener('resize', updateScrollProgress)

    return () => {
      window.removeEventListener('scroll', updateScrollProgress)
      window.removeEventListener('resize', updateScrollProgress)
    }
  }, [])

  const toggleTheme = () => {
    setIsDarkMode(prev => {
      const newMode = !prev
      if (newMode) {
        // Dark mode
        document.documentElement.classList.remove('light-mode')
        localStorage.setItem('theme-mode', 'dark')
      } else {
        // Light mode
        document.documentElement.classList.add('light-mode')
        localStorage.setItem('theme-mode', 'light')
      }
      return newMode
    })
  }

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-transparent">
        <div
          className="h-full bg-[var(--theme-primary)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

      <a
        href={`https://wa.me/91${7719935835}?text=${encodeURIComponent('Hi Abhijeet! I visited your portfolio and would like to connect.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-transform"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-7 h-7" />
      </a>
    </>
  )
}

export default App
