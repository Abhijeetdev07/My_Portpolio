import React, { useState } from 'react'
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
  { name: 'Cursor AI', src: 'https://img.icons8.com/?size=100&id=DiGZkjCzyZXn&format=png&color=000000'},
  { name: 'ChatGPT', src:'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg' },
  { name: 'AWS', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' }
]

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState('')

  return (
    <section id="skills" className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* Radial gradient background effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-[rgba(var(--theme-primary-rgb),0.2)] rounded-full blur-[120px]"></div>
      
      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-[var(--theme-primary)]">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-[var(--theme-primary)] mx-auto"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-full max-[1000px]:w-full min-[1001px]:w-[70%] mx-auto bg-black/90 p-8 md:p-12 rounded-2xl border border-[rgba(var(--theme-primary-rgb),0.2)] transition-all duration-500"
        >
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-semibold text-white">
                  Technologies I Work With
                </h3>
                <p className="text-[var(--theme-primary)] text-xl font-semibold mt-4 h-8">
                  {hoveredSkill || '\u00A0'}
                </p>
              </div>
              
              {/* Skills Grid */}
              <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-6 md:gap-8">
                {skills.map((skill, index) => {
                  const delay = (index % 10) * 0.1
                  
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay, ease: 'easeOut' }}
                      className="flex items-center justify-center"
                    >
                      <div 
                        className="group relative aspect-square w-full max-w-[60px] min-[450px]:max-w-[72px] lg:max-w-[80px] p-2 min-[450px]:p-3 flex items-center justify-center rounded-xl border-2 border-transparent hover:border-[var(--theme-primary)] lg:focus:border-transparent focus:border-[var(--theme-primary)] hover:bg-[rgba(var(--theme-primary-rgb),0.05)] focus:bg-[rgba(var(--theme-primary-rgb),0.05)] lg:focus:bg-transparent transition-all duration-300 cursor-pointer"
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill('')}
                        onFocus={() => setHoveredSkill(skill.name)}
                        onBlur={() => setHoveredSkill('')}
                        onTouchStart={() => setHoveredSkill(skill.name)}
                        tabIndex={0}
                      >
                        <img
                          src={skill.src}
                          alt={skill.name}
                          className={`w-8 h-8 min-[450px]:w-10 min-[450px]:h-10 lg:w-14 lg:h-14 drop-shadow-[0_0_18px_rgba(var(--theme-primary-rgb),0.25)] transition-transform duration-300 group-hover:scale-110 ${skill.invert ? 'invert brightness-0' : ''}`}
                          style={{ filter: skill.invert ? 'invert(1) brightness(2)' : 'none' }}
                        />
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
