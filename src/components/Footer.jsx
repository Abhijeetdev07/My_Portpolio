import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { FaLocationDot } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";


const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
]

const Footer = () => {
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
          <span>
            Crafted with <FaHeart className="inline text-red-500" /> and React &amp; Tailwind
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer


