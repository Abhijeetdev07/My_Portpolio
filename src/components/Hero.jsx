import { useState, useEffect } from 'react'
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
    <section id="home" className="relative min-h-screen bg-black text-white flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
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
              <h1 className="text-3xl min-[500px]:text-4xl md:text-6xl font-bold leading-tight">Namaste,</h1>
              <h1 className="text-3xl min-[500px]:text-4xl md:text-6xl font-bold leading-tight">
                I'm <span className="text-[var(--theme-primary)]">Abhijeet Ugale</span>
                <span className="text-yellow-400 text-4xl min-[500px]:text-5xl md:text-7xl ml-2">👋</span>
              </h1>
              <h2 className="text-xl min-[500px]:text-2xl md:text-4xl text-gray-300 font-medium mt-6 leading-relaxed">
                I am <span className="text-[var(--theme-primary)]">{roleText}</span>
                <span className="animate-pulse text-[var(--theme-primary)]">|</span>
              </h2>
            </div>


            <div className="flex flex-row flex-wrap gap-3 min-[500px]:gap-4 pt-4 justify-center items-center">
            <a
              href="https://github.com/Abhijeetdev07?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 min-[500px]:px-6 min-[500px]:py-3 text-sm min-[500px]:text-base bg-[var(--theme-primary)] text-gray-900 rounded-lg font-semibold hover:bg-[var(--theme-primary)] transition-colors flex items-center justify-center animate-bounce"
            >
              View Projects
            </a>
              <a href={resumePdf} download className="border-2 border-[var(--theme-primary)] text-[var(--theme-primary)] px-4 py-2 min-[500px]:px-6 min-[500px]:py-3 text-sm min-[500px]:text-base rounded-lg font-semibold hover:bg-[var(--theme-primary)] hover:text-gray-900 transition-colors flex items-center gap-2">
                <span>Download Resume</span>
                <LuDownload />
              </a>
            </div>

            <div className="pt-6">
              <p className="text-pink-400 text-base min-[500px]:text-lg font-semibold flex items-center justify-center leading-relaxed">
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
