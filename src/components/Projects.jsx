import React, { useState } from 'react'
import hms_demo from '../assets/hms.png'
import pg_demo from '../assets/pg_img.png' 
import herosec from '../assets/herosec-DZoufsF8.png'
import ez_demo from '../assets/ezesume.png'
import { FaExternalLinkAlt, FaGithub, FaReact, FaNode } from 'react-icons/fa'
import { BiCodeAlt } from 'react-icons/bi'
import { SiMongodb, SiExpress } from 'react-icons/si'
import { motion } from 'framer-motion'
  
// Technology icon mapping
const techIcons = {
  'MongoDB': SiMongodb,
  'Express': SiExpress,
  'React': FaReact,
  'Node': FaNode,
}

// Get icon component for a given tech tag
const getTechIcon = (tag) => {
  const normalizedTag = tag.toLowerCase()
  
  // Direct match
  if (techIcons[tag]) return techIcons[tag]
  
  // Case-insensitive search
  for (const [key, icon] of Object.entries(techIcons)) {
    if (key.toLowerCase() === normalizedTag) return icon
  }
  
  // Default icon
  return BiCodeAlt
}

const projects = [
  {
    title: 'EZ Resume',
    description: 'A comprehensive resume builder application allowing users to create and customize professional resumes.',
    tags: ['MongoDB', 'Express', 'React', 'Node'],
    image: ez_demo,
    demo: 'https://ezyresume.onrender.com/',
    github: 'https://ezyresume.onrender.com/',
  },
  {
    title: 'Personal Finance Tracker',
    description: 'Personal finance tracker using MERN stack with CRUD operations, authentication, and data visualization.',
    tags: ['MongoDB', 'Express', 'React', 'Node'],
    image: herosec,
    demo: 'https://smart-finance-o4s9.onrender.com/',
    github: 'https://github.com/Abhijeetdev07/Personal-finiance-tracker',
  },
  {
    title: 'Hospital Management System',
    description: 'Hospital admin, reception, doctor and patient management system',
    tags: ['MongoDB', 'Express', 'React', 'Node'],
    image: hms_demo,
    demo: 'https://github.com/Abhijeetdev07/Hospital-management-system',
    github: 'https://github.com/Abhijeetdev07/Hospital-management-system',
  },
  {
    title: 'PG-Hub',
    description: 'PG Hub is a platform for finding PG\'s in a city with admin panel',
    tags: ['MongoDB', 'Express', 'React', 'Node'],
    image: pg_demo,
    demo: 'https://pg-hub.onrender.com/',
    github: 'https://github.com/Abhijeetdev07/pg-finder',
  },
]

const itemVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
}

const ProjectCard = ({ project }) => {
  const [loaded, setLoaded] = useState(false)
  const [errored, setErrored] = useState(false)
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -6, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className="group relative bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden p-5 border-2 border-[rgba(var(--theme-primary-rgb),1)] shadow-[0_8px_32px_0_rgba(var(--theme-primary-rgb),0.2)] hover:shadow-[0_8px_48px_0_rgba(var(--theme-primary-rgb),0.3)] hover:border-[rgba(var(--theme-primary-rgb),1)] transition-all duration-500 ease-out flex flex-col will-change-transform w-full h-full"
    >
   
      <div className="aspect-video -mx-5 -mt-5 rounded-t-2xl overflow-hidden mb-4 relative z-10">
        {!loaded && (
          <div className="absolute inset-0 bg-gray-800/70 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full border-2 border-[var(--theme-primary)] border-t-transparent animate-spin" />
          </div>
        )}
        {!errored ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            onLoad={() => setLoaded(true)}
            onError={() => { setErrored(true); setLoaded(true) }}
            className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          />
        ) : (
          <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-400 text-sm">Image unavailable</div>
        )}
      </div>
      <h3 className="text-base min-[500px]:text-lg font-semibold mb-2 relative z-10" >{project.title}</h3>
      <p className="text-xs min-[500px]:text-sm mb-3.5 relative z-10 line-clamp-2" >{project.description}</p>
      <div className="flex flex-wrap gap-1.5 min-[500px]:gap-2 mb-4 relative z-10">
        {project.tags.map((t) => {
          const IconComponent = getTechIcon(t)
          return (
            <span 
              key={t} 
              className="text-[10px] min-[500px]:text-xs px-1.5 min-[500px]:px-2 py-1 min-[500px]:py-1.5 rounded-md border border-[rgba(var(--theme-primary-rgb),0.3)] bg-gradient-to-r from-gray-800/80 to-gray-700/80 text-[var(--theme-light)] font-medium flex items-center gap-1 min-[500px]:gap-1.5 hover:border-[rgba(var(--theme-primary-rgb),0.6)] hover:shadow-[0_0_8px_rgba(var(--theme-primary-rgb),0.3)] transition-all duration-300"
            >
              <IconComponent className="w-2.5 h-2.5 min-[500px]:w-3 min-[500px]:h-3" />
              {t}
            </span>
          )
        })}
      </div>
      <div className="mt-auto flex items-center gap-2 relative z-10">
        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 min-[500px]:gap-1.5 justify-center px-2.5 min-[500px]:px-3 py-1.5 text-xs min-[500px]:text-sm rounded-md bg-[var(--theme-primary)] text-gray-900 font-semibold hover:bg-[var(--theme-light)] transition-colors">
          Live Demo
          <FaExternalLinkAlt className="w-3 h-3 min-[500px]:w-3.5 min-[500px]:h-3.5" />
        </a>
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 min-[500px]:gap-1.5 justify-center px-2.5 min-[500px]:px-3 py-1.5 text-xs min-[500px]:text-sm rounded-md border-2 border-[var(--theme-primary)] text-[var(--theme-primary)] font-semibold hover:bg-[var(--theme-primary)] hover:text-gray-900 transition-colors">
          <FaGithub className="w-3.5 h-3.5 min-[500px]:w-4 min-[500px]:h-4" />
          GitHub
        </a>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  const scrollContainerRef = React.useRef(null)
  const [centerIndex, setCenterIndex] = React.useState(0)

  React.useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const handleScroll = () => {
      const containerRect = container.getBoundingClientRect()
      const containerCenter = containerRect.left + containerRect.width / 2
      
      const cards = container.children
      let closestIndex = 0
      let minDistance = Infinity

      Array.from(cards).forEach((card, index) => {
        const cardRect = card.getBoundingClientRect()
        const cardCenter = cardRect.left + cardRect.width / 2
        const distance = Math.abs(containerCenter - cardCenter)
        
        if (distance < minDistance) {
          minDistance = distance
          closestIndex = index
        }
      })

      setCenterIndex(closestIndex)
    }

    container.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check
    
    return () => container.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center overflow-hidden py-12 lg:py-16" >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-10 lg:mb-12">
          <h2 className="text-3xl min-[500px]:text-4xl md:text-5xl font-bold">Projects</h2>
          <div className="w-20 min-[500px]:w-24 h-1 bg-[var(--theme-primary)] mx-auto mt-2"></div>
        </div>

        <motion.div
          ref={scrollContainerRef}
          className="flex gap-3 sm:gap-4 lg:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide py-8 -my-8 sm:py-0 sm:my-0 pb-4 px-4 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:overflow-visible scroll-smooth"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ staggerChildren: 0.08, delayChildren: 0.05 }}
        >
          {projects.map((p, idx) => (
            <div 
              key={p.title} 
              className={`snap-center flex-shrink-0 w-[75vw] max-w-[300px] min-h-[420px] max-[500px]:min-h-[420px] sm:w-auto sm:flex-shrink sm:snap-align-none transition-transform duration-500 ease-out ${
                centerIndex === idx ? 'scale-105 sm:scale-100' : 'scale-90 sm:scale-100'
              }`}
            >
              <ProjectCard project={p} />
            </div>
          ))}
        </motion.div>

        <div className="mt-16 min-[500px]:mt-20 sm:mt-16 lg:mt-14 flex justify-center">
          <a
            href="https://github.com/Abhijeetdev07"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 min-[500px]:px-6 min-[500px]:py-3 text-sm min-[500px]:text-base rounded-lg bg-[var(--theme-primary)] text-gray-900 font-semibold hover:bg-[var(--theme-light)] transition-colors shadow-[0_0_30px_rgba(var(--theme-primary-rgb),0.35)]"
          >
            View more on GitHub
            <FaGithub className="w-4 h-4 min-[500px]:w-5 min-[500px]:h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
