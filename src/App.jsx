import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)

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
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </>
  )
}

export default App
