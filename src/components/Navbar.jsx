import { useState, useEffect } from 'react'
import { MdDarkMode, MdLightMode } from 'react-icons/md'

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < 10) {
        // Always show navbar at the top
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down - hide navbar
        setIsVisible(false)
        setIsMenuOpen(false) // Close mobile menu when hiding
      } else {
        // Scrolling up - show navbar
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <nav className={`fixed w-full top-0 z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full md:-translate-y-[calc(100%+1rem)]'}`}>
      {/* Desktop Glassy Capsule Navbar */}
      <div className="hidden md:block md:pt-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative bg-white/5 backdrop-blur-xl rounded-full border border-[rgba(var(--theme-primary-rgb),0.3)] shadow-[0_8px_32px_0_rgba(var(--theme-primary-rgb),0.15)] hover:shadow-[0_8px_48px_0_rgba(var(--theme-primary-rgb),0.25)] hover:border-[rgba(var(--theme-primary-rgb),0.5)] transition-all duration-500">
            <div className="flex justify-between items-center h-16 px-6 relative z-10">
              {/* Logo */}
              <div className="flex-shrink-0">
                <a href="#home" className="flex items-center gap-2 group select-none">
                  <span className="px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md logo-border-shine">
                    <span className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-[var(--theme-light)] via-[var(--theme-primary)] to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_2px_6px_rgba(var(--theme-primary-rgb),0.35)]">
                      Abhijee
                    </span>
                  </span>
                </a>
              </div>

              {/* Desktop Navigation */}
              <div className="flex items-center space-x-1">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="hover:text-[var(--theme-primary)] hover:bg-white/5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative group" style={{ color: 'var(--text-secondary)' }}
                  >
                    {item.name}
                  </a>
                ))}
                
                {/* Dark/Light Mode Toggle */}
                <button
                  onClick={toggleTheme}
                  className="hover:text-[var(--theme-primary)] hover:bg-white/5 p-2 rounded-full text-sm font-medium transition-all duration-300" style={{ color: 'var(--text-secondary)' }}
                  aria-label="Toggle dark/light mode"
                >
                  {isDarkMode ? <MdLightMode className="w-5 h-5" /> : <MdDarkMode className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden shadow-lg border-b border-[rgba(var(--theme-primary-rgb),0.3)]" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#home" className="flex items-center gap-2 group select-none">
                <span className="px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md logo-border-shine">
                  <span className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-[var(--theme-light)] via-[var(--theme-primary)] to-[var(--theme-primary)] bg-clip-text text-transparent drop-shadow-[0_2px_6px_rgba(var(--theme-primary-rgb),0.35)]">
                    Abhijeet
                  </span>
                </span>
              </a>
            </div>

            {/* Mobile menu button and dark mode toggle */}
            <div className="flex items-center gap-2">
              {/* Dark/Light Mode Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-md hover:text-[var(--theme-primary)] hover:bg-white/5 transition-all duration-300"
                style={{ color: 'var(--text-secondary)' }}
                aria-label="Toggle dark/light mode"
              >
                {isDarkMode ? <MdLightMode className="w-5 h-5" /> : <MdDarkMode className="w-5 h-5" />}
              </button>
              
              <button
                onClick={toggleMenu}
                className="inline-flex flex-col items-center justify-center p-2 rounded-md hover:text-[var(--theme-primary)] hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[var(--theme-primary)] w-10 h-10 gap-1.5"
                style={{ color: 'var(--text-secondary)' }}
              >
                <span className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <div className="overflow-hidden transition-[max-height] duration-500 ease-in-out" style={{ maxHeight: isMenuOpen ? '360px' : '0px' }}>
            <div className={`px-2 ${isMenuOpen ? 'pt-2 pb-3 opacity-100 translate-y-0' : 'pt-0 pb-0 opacity-0 -translate-y-2'} space-y-1 sm:px-3 border-t border-[var(--theme-primary)] transition-all duration-500 ease-out will-change-transform`} style={{ backgroundColor: 'var(--bg-primary)' }}>
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="hover:text-[var(--theme-primary)] hover:border hover:border-[rgba(var(--theme-primary-rgb),0.5)] block px-3 py-2 rounded-lg text-base font-medium transition-all duration-300 relative group" style={{ color: 'var(--text-primary)', backgroundColor: 'transparent' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-3 w-0 h-0.5 bg-[var(--theme-primary)] transition-all duration-300 group-hover:w-[calc(100%-1.5rem)]"></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
