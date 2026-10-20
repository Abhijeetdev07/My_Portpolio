import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Snowfall from 'react-snowfall';

const skills = [
  { name: 'Python', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'SQL (MySQL)', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Power BI', src: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg' },
  { name: 'Tableau', src: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Tableau_Logo.png' },
  { name: 'Pandas', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
  { name: 'NumPy', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
  { name: 'Excel (Pivot Tables)', src: 'https://img.icons8.com/?size=100&id=117561&format=png&color=000000' },
  { name: 'Matplotlib', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg' },
  { name: 'Seaborn', src: 'https://raw.githubusercontent.com/mwaskom/seaborn/master/doc/_static/logo-mark-lightbg.svg' },
  { name: 'Jupyter Notebook', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg' },
  { name: 'Git', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitHub', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg', invert: true },
  { name: 'PostgreSQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
  { name: 'Claude AI', src: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Anthropic_logo.svg', invert: true },
  { name: 'PowerPoint', src: 'https://img.icons8.com/?size=100&id=117563&format=png&color=000000' },
  { name: 'VS Code', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
]

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState('')

  return (
    <section id="skills" className="relative min-h-screen overflow-hidden flex items-center justify-center py-8 sm:py-12 lg:py-16" style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* Radial gradient background effect */}
      <Snowfall color="#82C3D9"/>
      <div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[550px] bg-[rgba(var(--theme-primary-rgb),0.2)] rounded-full blur-[120px]"></div>
      
      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-4 sm:mb-6 lg:mb-8">
          <h2 className="text-3xl min-[500px]:text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-[var(--theme-primary)]">Skills</span>
          </h2>
          <div className="w-20 min-[500px]:w-24 h-1 bg-[var(--theme-primary)] mx-auto"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-full max-[1000px]:w-full min-[1001px]:w-[70%] mx-auto p-4 sm:p-5 md:p-6 lg:p-8 rounded-2xl border transition-all duration-500" style={{ backgroundColor: 'var(--bg-card-dark)' }}
        >
            <div className="space-y-3 sm:space-y-4 lg:space-y-5">
              <div className="text-center">
                <h3 className="text-xl min-[500px]:text-2xl md:text-3xl font-semibold">
                  Technologies I Work With
                </h3>
                <p className="text-[var(--theme-primary)] text-lg min-[500px]:text-xl font-semibold mt-3 h-8">
                  {hoveredSkill || '\u00A0'}
                </p>
              </div>
              
              {/* Skills Grid */}
              <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-4 sm:gap-6 md:gap-8">
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
                          className={`w-8 h-8 min-[450px]:w-10 min-[450px]:h-10 lg:w-14 lg:h-14 drop-shadow-[0_0_18px_rgba(var(--theme-primary-rgb),0.25)] transition-transform duration-300 group-hover:scale-110 ${skill.invert ? 'skill-icon-invert' : ''}`}
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
