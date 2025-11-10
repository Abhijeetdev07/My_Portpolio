import React, { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { FaLocationDot } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { MdPalette } from 'react-icons/md';


const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

const themes = [
  { name: 'Green', primary: '#2adb5c', primaryRgb: '42, 219, 92', light: '#86efac', lightRgb: '134, 239, 172' },
  { name: 'Blue', primary: '#3b82f6', primaryRgb: '59, 130, 246', light: '#93c5fd', lightRgb: '147, 197, 253' },
  { name: 'Purple', primary: '#a855f7', primaryRgb: '168, 85, 247', light: '#c084fc', lightRgb: '192, 132, 252' },
  { name: 'Orange', primary: '#f97316', primaryRgb: '249, 115, 22', light: '#fb923c', lightRgb: '251, 146, 60' },
  { name: 'Pink', primary: '#ec4899', primaryRgb: '236, 72, 153', light: '#f9a8d4', lightRgb: '249, 168, 212' },
  { name: 'Cyan', primary: '#06b6d4', primaryRgb: '6, 182, 212', light: '#67e8f9', lightRgb: '103, 232, 249' },
]

const Footer = () => {
  const [currentTheme, setCurrentTheme] = useState(0)
  const [showThemePicker, setShowThemePicker] = useState(false)
  const [autoChange, setAutoChange] = useState(true)

  const changeTheme = (index, pauseAuto = true) => {
    const theme = themes[index]
    document.documentElement.style.setProperty('--theme-primary', theme.primary)
    document.documentElement.style.setProperty('--theme-primary-rgb', theme.primaryRgb)
    document.documentElement.style.setProperty('--theme-light', theme.light)
    document.documentElement.style.setProperty('--theme-light-rgb', theme.lightRgb)
    setCurrentTheme(index)
    setShowThemePicker(false)
    localStorage.setItem('theme-index', index)
    
    // Pause auto-change when user manually selects a theme
    if (pauseAuto) {
      setAutoChange(false)
    }
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme-index')
    
    if (savedTheme !== null) {
      changeTheme(parseInt(savedTheme), false)
    }
    
    // Auto-change is always enabled on page refresh
    setAutoChange(true)
  }, [])

  // Auto-change theme every 5 seconds
  useEffect(() => {
    if (!autoChange) return

    const interval = setInterval(() => {
      setCurrentTheme((prev) => {
        const nextIndex = (prev + 1) % themes.length
        const theme = themes[nextIndex]
        document.documentElement.style.setProperty('--theme-primary', theme.primary)
        document.documentElement.style.setProperty('--theme-primary-rgb', theme.primaryRgb)
        document.documentElement.style.setProperty('--theme-light', theme.light)
        document.documentElement.style.setProperty('--theme-light-rgb', theme.lightRgb)
        return nextIndex
      })
    }, 5000) // Change every 5 seconds

    return () => clearInterval(interval)
  }, [autoChange])

  // Close theme picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showThemePicker && !event.target.closest('.theme-picker-container')) {
        setShowThemePicker(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [showThemePicker])
  return (
    <footer className="relative border-t" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-secondary)', borderColor: 'var(--border-color)' }}>
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[rgba(var(--theme-primary-rgb),0.4)] to-transparent"></div>
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 py-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-16">
          <div>
          <a href="#home" className="flex items-center gap-2 group select-none">
              <span className="px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md logo-border-shine">
                <span className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-[var(--theme-light)] via-[var(--theme-primary)] to-emerald-400 bg-clip-text text-transparent drop-shadow-[0_2px_6px_rgba(var(--theme-primary-rgb),0.35)]">
                  Abhijeet
                </span>
              </span>
            </a>
            <p className="mt-2 text-sm max-w-md" style={{ color: 'var(--text-primary)' }}>
            Passionate MERN Developer. <br /> Building scalable web applications <br/> with  modern technologies.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://github.com/Abhijeetdev07"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl border border-[rgba(var(--theme-primary-rgb),0.4)] text-[var(--theme-primary)] flex items-center justify-center hover:bg-[var(--theme-primary)] hover:text-gray-900 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/abhijeetugale07?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl border border-[rgba(var(--theme-primary-rgb),0.4)] text-[var(--theme-primary)] flex items-center justify-center hover:bg-[var(--theme-primary)] hover:text-gray-900 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:ugaleabhijeet03@gmail.com"
                className="w-10 h-10 rounded-xl border text-[var(--theme-primary)] flex items-center justify-center hover:bg-[var(--theme-primary)] hover:text-gray-900 transition-colors"
                aria-label="Email"
              >
                <HiOutlineMail className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-[var(--theme-primary)] font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.name}>
                  <a href={l.href} className="hover:text-[var(--theme-primary)] transition-colors">
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-2xl font-semibold text-[var(--theme-primary)] mb-4">Get In Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3" style={{ color: 'var(--text-secondary)' }}>
                <HiOutlineMail className="w-5 h-5 text-[var(--theme-primary)]" />
                <a href="mailto:ugaleabhijeet03@gmail.com" className="hover:text-[var(--theme-primary)] transition-colors">ugaleabhijeet03@gmail.com</a>
              </li>
              <li className="flex items-center gap-3" style={{ color: 'var(--text-secondary)' }}>
                <FaLocationDot className="text-[var(--theme-primary)]" />
                <span>Chikhli, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t text-xs flex flex-col sm:flex-row items-center justify-between gap-2 text-center" style={{ borderColor: 'var(--border-color)', color: 'var(--text-tertiary)' }}>
          <span>© {new Date().getFullYear()} Abhijeet Ugale. All rights reserved.</span>
          <div className="flex items-center gap-3">
            <span>
              Crafted with <FaHeart className="inline text-red-500" /> and React &amp; Tailwind
            </span>
            
            {/* Theme Picker */}
            <div className="relative theme-picker-container">
              <button
                onClick={() => setShowThemePicker(!showThemePicker)}
                className="w-6 h-6 rounded-full hover:bg-white/5 transition-all duration-300 flex items-center justify-center"
                style={{ color: 'var(--text-secondary)' }}
                aria-label="Change theme color"
              >
                <MdPalette className="w-4 h-4" />
              </button>
              
              {/* Theme Picker Dropdown */}
              {showThemePicker && (
                <div className="absolute bottom-full right-0 mb-3 p-3 bg-black/95 backdrop-blur-xl rounded-2xl border border-[rgba(var(--theme-primary-rgb),0.3)] shadow-[0_8px_32px_0_rgba(var(--theme-primary-rgb),0.25)] z-50">
                  <div className="flex gap-2">
                    {themes.map((theme, index) => (
                      <button
                        key={theme.name}
                        onClick={() => changeTheme(index)}
                        className={`w-8 h-8 rounded-full transition-all duration-300 hover:scale-110 ${
                          currentTheme === index ? 'ring-2 ring-white ring-offset-2 ring-offset-black' : ''
                        }`}
                        style={{ backgroundColor: theme.primary }}
                        title={theme.name}
                        aria-label={`Switch to ${theme.name} theme`}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


