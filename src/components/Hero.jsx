import { useState, useEffect } from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { LuDownload } from "react-icons/lu";
import resumePdf from '../assets/My-Resume.pdf'
import { motion } from 'framer-motion'

const Hero = () => {
  const [roleText, setRoleText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [isRoleDeleting, setIsRoleDeleting] = useState(false)
  
  const roles = ['Frontend Developer', 'Backend Developer', 'MERN Developer']
  
  // Static greeting handled in markup below

  // Role typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex]
    
    const typeRole = () => {
      if (!isRoleDeleting) {
        // Typing
        if (roleText.length < currentRole.length) {
          setRoleText(currentRole.slice(0, roleText.length + 1))
        } else {
          // Role complete, start deleting after pause
          setTimeout(() => setIsRoleDeleting(true), 2500)
          return
        }
      } else {
        // Deleting
        if (roleText.length > 0) {
          setRoleText(currentRole.slice(0, roleText.length - 1))
        } else {
          // Deletion complete, move to next role
          setIsRoleDeleting(false)
          setRoleIndex((prev) => (prev + 1) % roles.length)
          return
        }
      }
    }
    
    const roleTimer = setTimeout(typeRole, isRoleDeleting ? 80 : 120)
    return () => clearTimeout(roleTimer)
  }, [roleText, roleIndex, isRoleDeleting, roles])
  return (
    <section id="home" className="min-h-screen bg-gray-900 text-white flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex justify-center">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="space-y-6 max-w-4xl text-center"
          >
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold">Namaste,</h1>
              <h1 className="text-4xl md:text-6xl font-bold">
                I'm <span className="text-cyan-400">Abhijeet Ugale</span>
                <span className="text-yellow-400 text-5xl md:text-7xl ml-2">👋</span>
              </h1>
              <h2 className="text-2xl md:text-4xl text-gray-300 font-medium mt-6">
                I am <span className="text-cyan-400">{roleText}</span>
                <span className="animate-pulse text-cyan-400">|</span>
              </h2>
            </div>

            <div className="flex items-center justify-center space-x-4">
              {/* Social Links */}
              <a 
                href="www.linkedin.com/in/abhijeetugale07" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>

              <a 
                href="https://github.com/Abhijeetdev07" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors"
              >
                <FaGithub className="w-6 h-6" />
              </a>
            </div>

            <div className="flex flex-row flex-wrap gap-4 pt-4 justify-center items-center">
            <a
              href="https://github.com/Abhijeetdev07?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-cyan-400 text-gray-900 rounded-lg font-semibold hover:bg-cyan-500 transition-colors flex items-center justify-center animate-bounce"
            >
              View Projects
            </a>
              <a href={resumePdf} download className="border-2 border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-colors flex items-center gap-2">
                <span>Download Resume</span>
                <LuDownload />
              </a>
            </div>

            <div className="pt-6">
              <p className="text-pink-400 text-lg font-semibold flex items-center justify-center">
                <span className="mr-2">🚀</span>
                Let's build something awesome!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
