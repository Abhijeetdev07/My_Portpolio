import React, { useMemo, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const skills = [
  { name: 'JavaScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'MongoDB', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Docker', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Git', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitHub', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
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
  { name: 'AWS', src: 'https://img.icons8.com/?size=100&id=33039&format=png&color=000000' }

]

const randomBetween = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

const Skills = () => {
  // Track viewport width for responsive rings and sizes
  const [vw, setVw] = useState(typeof window !== 'undefined' ? window.innerWidth : 1280)

  useEffect(() => {
    const onResize = () => setVw(window.innerWidth)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Tick to change positions periodically
  const [tick, setTick] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 2000) // every 2s
    return () => clearInterval(id)
  }, [])

  // Compute non-overlapping positions arranged on concentric rings
  const { placements: layout, containerHeight } = useMemo(() => {
    const center = { x: 50, y: 50 }
    // Breakpoint-specific capacity and sizing
    const maxPerRing = vw < 640 ? 6 : vw < 1024 ? 8 : 10
    const numRings = Math.min(4, Math.ceil(skills.length / maxPerRing) || 1)
    const startRadius = vw < 640 ? 16 : vw < 1024 ? 16 : 18
    const ringGap = vw < 640 ? 12 : vw < 1024 ? 12 : 12
    const rings = Array.from({ length: numRings }, (_, i) => Math.min(46, startRadius + ringGap * i))
    const baseSize = vw < 640 ? 46 : vw < 1024 ? 54 : 60
    const sizeDrop = vw < 640 ? 4 : vw < 1024 ? 4 : 6
    const sizePerRing = Array.from({ length: numRings }, (_, i) => Math.max(34, baseSize - i * sizeDrop))

    // Distribute icons respecting per-ring capacity
    const groups = Array.from({ length: numRings }, () => [])
    skills.forEach((s) => {
      // pick the ring with the smallest count and not exceeding capacity
      let targetIndex = 0
      let minCount = Infinity
      for (let i = 0; i < numRings; i += 1) {
        if (groups[i].length < maxPerRing && groups[i].length < minCount) {
          minCount = groups[i].length
          targetIndex = i
        }
      }
      groups[targetIndex].push(s)
    })

    const placements = []
    let globalIndex = 0
    const spinPerRing = [18, -22, 26, -30]
    groups.forEach((group, ringIndex) => {
      const radius = rings[ringIndex]
      const step = 360 / Math.max(group.length, 1)
      const ringAngleOffset = ringIndex * 12 + tick * (spinPerRing[ringIndex % spinPerRing.length])
      group.forEach((_, j) => {
        const angle = (j * step) + ringAngleOffset
        const rad = (angle * Math.PI) / 180
        const left = center.x + radius * Math.cos(rad)
        const top = center.y + radius * Math.sin(rad)
        const size = sizePerRing[ringIndex]
        const delay = (globalIndex % 10) * 0.35
        const floatClass = globalIndex % 3 === 0 ? 'animate-float-y' : globalIndex % 3 === 1 ? 'animate-float-x' : 'animate-orbit'
        placements.push({ top, left, size, delay, floatClass })
        globalIndex += 1
      })
    })
    const containerHeight = vw < 640 ? 380 + (numRings - 1) * 60 : vw < 1024 ? 460 + (numRings - 3) * 50 : 520 + (numRings - 3) * 40
    return { placements, containerHeight }
  }, [vw, tick])

  return (
    <section id="skills" className="relative py-24 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-4xl md:text-5xl  mb-2">My Skills</h2>
        <div className="w-24 h-1 bg-cyan-400 mx-auto mb-12"></div>

        {/* Floating cloud of icons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative mx-auto max-w-6xl rounded-3xl overflow-hidden border border-gray-700/60 bg-gradient-to-b from-gray-900/40 to-gray-800/40 backdrop-blur-md"
          style={{ height: `${containerHeight}px` }}
        >

          <div className="absolute inset-0">
            {skills.map((skill, index) => {
              const { top, left, size, delay, floatClass } = layout[index] || layout[0]
              return (
                <div
                  key={skill.name + index}
                  className="absolute transition-all duration-700 ease-in-out"
                  style={{ top: `${top}%`, left: `${left}%`, transform: 'translate(-50%, -50%)' }}
                >
                  <div className={`group relative ${floatClass}`} style={{ animationDelay: `${delay}s` }}>
                    <img
                      src={skill.src}
                      alt={skill.name}
                      width={size}
                      height={size}
                      className="drop-shadow-[0_0_18px_rgba(34,211,238,0.25)] transition-transform duration-500 group-hover:scale-110"
                    />
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute left-1/2 -translate-x-1/2 top-[calc(100%+8px)] text-xs bg-black/70 px-2 py-1 rounded-md border border-gray-700 whitespace-nowrap">
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


