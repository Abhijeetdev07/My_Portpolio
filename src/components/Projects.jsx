import React, { useState } from 'react'
import hms_demo from '../assets/hms.png'
import pg_demo from '../assets/pg_img.png'
import thumbnail from '../assets/thumbnail.png'
import { FaExternalLinkAlt, FaGithub, FaReact, FaNode } from 'react-icons/fa'
import { BiCodeAlt } from 'react-icons/bi'
import { 
  SiMongodb, 
  SiExpress, 
} from 'react-icons/si'
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
    title: 'Personal Finance Tracker',
    description: 'Personal finance tracker using MERN stack with CRUD operations,authentication. and data visualization.',
    tags: ['MongoDB', 'Express', 'React', 'Node'],
    image: thumbnail,
    demo: 'https://smart-finance-o4s9.onrender.com',
    github: 'https://github.com/Abhijeetdev07/Personal-finiance-tracker',
  },
  {
    title: 'Hospital Management System',
    description: 'hospital admin, reception, doctor and patient management system',
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
    demo: 'https://pg-hub.onrender.com',
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

const ProjectCard = ({ project, idx }) => {
  const [loaded, setLoaded] = useState(false)
  const [errored, setErrored] = useState(false)
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -6, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className="group relative bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden p-6 border border-white/10 shadow-[0_8px_32px_0_rgba(42,219,92,0.15)] hover:shadow-[0_8px_48px_0_rgba(42,219,92,0.3)] hover:border-green-400/30 transition-all duration-500 ease-out flex flex-col will-change-transform w-full max-w-[340px] mx-auto sm:max-w-none"
    >
      {/* Glassy background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-green-400/10 rounded-full blur-2xl pointer-events-none group-hover:bg-green-400/15 transition-colors duration-500"></div>
      <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-emerald-400/10 rounded-full blur-2xl pointer-events-none group-hover:bg-emerald-400/15 transition-colors duration-500"></div>
      
      <div className="aspect-video -mx-6 -mt-6 rounded-t-2xl overflow-hidden mb-5 relative z-10">
        {!loaded && (
          <div className="absolute inset-0 bg-gray-800/70 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full border-2 border-green-400 border-t-transparent animate-spin" />
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
      <h3 className="text-xl font-semibold mb-2 relative z-10">{project.title}</h3>
      <p className="text-gray-300 mb-4 relative z-10">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-5 relative z-10">
        {project.tags.map((t) => {
          const IconComponent = getTechIcon(t)
          return (
            <span 
              key={t} 
              className="text-xs px-2.5 py-1.5 rounded-md border border-green-400/30 bg-gradient-to-r from-gray-800/80 to-gray-700/80 text-green-300 font-medium flex items-center gap-1.5 hover:border-green-400/60 hover:shadow-[0_0_8px_rgba(42,219,92,0.3)] transition-all duration-300"
            >
              <IconComponent className="w-3.5 h-3.5" />
              {t}
            </span>
          )
        })}
      </div>
      <div className="mt-auto flex items-center gap-3 relative z-10">
        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 justify-center px-4 py-2 rounded-md bg-green-400 text-gray-900 font-semibold hover:bg-green-300 transition-colors">
          Live Demo
          <FaExternalLinkAlt className="w-4 h-4" />
        </a>
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 justify-center px-4 py-2 rounded-md border-2 border-green-400 text-green-400 font-semibold hover:bg-green-400 hover:text-gray-900 transition-colors">
          <FaGithub className="w-5 h-5" />
          GitHub
        </a>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">Projects</h2>
          <div className="w-24 h-1 bg-green-400 mx-auto mt-3"></div>
        </div>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ staggerChildren: 0.08, delayChildren: 0.05 }}
        >
          {projects.map((p, idx) => (
            <ProjectCard key={p.title} project={p} idx={idx} />
          ))}
        </motion.div>

        <div className="mt-12 flex justify-center">
          <a
            href="https://github.com/Abhijeetdev07"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-green-400 text-gray-900 font-semibold hover:bg-green-300 transition-colors shadow-[0_0_30px_rgba(42,219,92,0.35)]"
          >
            View more on GitHub
            <FaGithub className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects


