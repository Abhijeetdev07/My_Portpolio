import React, { useMemo, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const skills = [
  { name: 'JavaScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg', invert: true },
  { name: 'MongoDB', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Docker', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Git', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitHub', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg', invert: true },
  { name: 'Python', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Java', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'HTML5', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'Vite', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' },
  { name: 'VS Code', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  { name: 'Linux', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
  { name: 'C', src: 'https://img.icons8.com/?size=100&id=40670&format=png&color=000000' },
  { name: 'curser ai', src: 'https://img.icons8.com/?size=100&id=DiGZkjCzyZXn&format=png&color=000000'},
  { name: 'ChatGPT', src:'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg' },
  { name: 'AWS', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' }

]

const randomBetween = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const Skills = () => {
  return (
    <section id="skills" className="relative py-24 bg-black text-white overflow-hidden">
      {/* Radial gradient background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900/30 via-gray-900/50 to-black"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500/10 rounded-full blur-[120px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-center text-4xl md:text-5xl mb-2">My Skills</h2>
        <div className="w-24 h-1 bg-[#2adb5c] mx-auto mb-12"></div>

        {/* Grid layout of floating icons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative mx-auto max-w-5xl rounded-3xl overflow-hidden border border-green-400/20 bg-black/90 p-12 md:p-14 lg:p-20"
        >
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-6 md:gap-8 lg:gap-10">
            {skills.map((skill, index) => {
              // Alternate floating animations
              const floatClass = index % 2 === 0 ? 'animate-float-y' : 'animate-float-x'
              const delay = (index % 10) * 0.35
              
              return (
                <div
                  key={skill.name}
                  className="flex items-center justify-center"
                >
                  <div className={`group relative ${floatClass}`} style={{ animationDelay: `${delay}s` }}>
                    <img
                      src={skill.src}
                      alt={skill.name}
                      className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 drop-shadow-[0_0_18px_rgba(42,219,92,0.25)] transition-transform duration-500 group-hover:scale-110 ${skill.invert ? 'invert brightness-0' : ''}`}
                      style={{ filter: skill.invert ? 'invert(1) brightness(2)' : 'none' }}
                    />
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute left-1/2 -translate-x-1/2 top-[calc(100%+8px)] text-xs bg-black/90 px-2 py-1 rounded-md border border-green-400/30 whitespace-nowrap z-10">
                      {skill.name}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills


