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
    <footer className="relative bg-[#0b1220] text-gray-300 border-t border-cyan-400/20">
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"></div>
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 py-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-16">
          <div>
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-2 group select-none">
              <span className="inline-block w-2.5 h-6 rounded-sm bg-cyan-400 shadow-[0_0_15px_rgba(0,200,255,0.6)]"></span>
              <span className="px-3 py-1 rounded-lg border border-cyan-400/30 bg-gray-900/40 backdrop-blur-md">
                <span className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_2px_6px_rgba(0,200,255,0.35)]">
                  Abhijeet
                </span>
              </span>
            </a>
            <p className="mt-2 text-sm text-white max-w-md">
            Passionate MERN Developer. <br /> Building scalable web applications <br/> with  modern technologies.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://github.com/Abhijeetdev07"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl border border-cyan-400/40 text-cyan-400 flex items-center justify-center hover:bg-cyan-400 hover:text-gray-900 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="www.linkedin.com/in/abhijeetugale07"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl border border-cyan-400/40 text-cyan-400 flex items-center justify-center hover:bg-cyan-400 hover:text-gray-900 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:ugaleabhijeet03@gmail.com"
                className="w-10 h-10 rounded-xl border text-cyan-400 flex items-center justify-center hover:bg-cyan-400 hover:text-gray-900 transition-colors"
                aria-label="Email"
              >
                <HiOutlineMail className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-cyan-400 font-semibold mb-3 ">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.name}>
                  <a href={l.href} className="hover:text-cyan-400 transition-colors">
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-2xl font-semibold text-cyan-400 mb-4">Get In Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-300">
                <HiOutlineMail className="w-5 h-5 text-cyan-400" />
                <a href="mailto:ugaleabhijeet03@gmail.com" className="hover:text-cyan-400 transition-colors">ugaleabhijeet03@gmail.com</a>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <FaLocationDot className="text-cyan-400" />
                <span>Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-gray-800 text-xs text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-2 text-center">
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


