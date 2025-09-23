import { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
  ]


  return (
    <nav className="bg-gray-900/20 backdrop-blur-md shadow-lg fixed w-full top-0 z-50 border-b border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center gap-2 group select-none">
                <span className="px-3 py-1 rounded-lg border border-cyan-400/30 bg-gray-900/40 backdrop-blur-md">
                <span className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_2px_6px_rgba(0,200,255,0.35)]">
                  Abhijeet
                </span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-all duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-cyan-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-400"
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
        </div>

        {/* Mobile Navigation Menu */}
        <div className="md:hidden overflow-hidden transition-[max-height] duration-500 ease-in-out" style={{ maxHeight: isMenuOpen ? '360px' : '0px' }}>
          <div className={`px-2 ${isMenuOpen ? 'pt-2 pb-3 opacity-100 translate-y-0' : 'pt-0 pb-0 opacity-0 -translate-y-2'} space-y-1 sm:px-3 bg-gray-900/90 backdrop-blur-md border-t border-gray-700/50 transition-all duration-500 ease-out will-change-transform` }>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-cyan-400 block px-3 py-2 text-base font-medium transition-all duration-300 relative group"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
                <span className="absolute bottom-0 left-3 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-[calc(100%-1.5rem)]"></span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
