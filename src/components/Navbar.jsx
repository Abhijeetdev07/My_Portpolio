import { useState, useEffect } from 'react'

const Navbar = () => {
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
          <div className="relative bg-white/5 backdrop-blur-xl rounded-full border border-green-400/30 shadow-[0_8px_32px_0_rgba(42,219,92,0.15)] hover:shadow-[0_8px_48px_0_rgba(42,219,92,0.25)] hover:border-green-400/50 transition-all duration-500">
            <div className="flex justify-between items-center h-16 px-6 relative z-10">
              {/* Logo */}
              <div className="flex-shrink-0">
                <a href="#home" className="flex items-center gap-2 group select-none">
                  <span className="px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md logo-border-shine">
                    <span className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-green-300 via-green-400 to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_2px_6px_rgba(42,219,92,0.35)]">
                      Abhijeet
                    </span>
                  </span>
                </a>
              </div>

              {/* Desktop Navigation */}
              <div className="flex items-baseline space-x-1">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-300 hover:text-green-400 hover:bg-white/5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative group"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden bg-black shadow-lg border-b border-green-400/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#home" className="flex items-center gap-2 group select-none">
                <span className="px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md logo-border-shine">
                  <span className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-green-300 via-green-400 to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_2px_6px_rgba(42,219,92,0.35)]">
                    Abhijeet
                  </span>
                </span>
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-green-400 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-400"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          <div className="overflow-hidden transition-[max-height] duration-500 ease-in-out" style={{ maxHeight: isMenuOpen ? '360px' : '0px' }}>
            <div className={`px-2 ${isMenuOpen ? 'pt-2 pb-3 opacity-100 translate-y-0' : 'pt-0 pb-0 opacity-0 -translate-y-2'} space-y-1 sm:px-3 bg-black border-t border-green-400 transition-all duration-500 ease-out will-change-transform`}>
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-green-400 hover:bg-black hover:border hover:border-green-400/50 block px-3 py-2 rounded-lg text-base font-medium transition-all duration-300 relative group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-3 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-[calc(100%-1.5rem)]"></span>
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
