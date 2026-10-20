import React, { useState } from 'react'
import loan_approval from '../assets/loan_approval.png'
import hr_attrition from '../assets/hr_attrition.png'
import sales_dashboard from '../assets/sales_dashboard.png'
import medical_sql from '../assets/medical_sql.jpg'
import { FaExternalLinkAlt, FaGithub, FaPython, FaDatabase, FaFileExcel, FaChartBar, FaChartLine, FaChartPie } from 'react-icons/fa'
import { BiCodeAlt } from 'react-icons/bi'
import { SiPandas, SiNumpy, SiMysql, SiTableau } from 'react-icons/si'
import { BsBarChartFill } from 'react-icons/bs'
import { motion } from 'framer-motion'
import Snowfall from 'react-snowfall'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// Technology icon mapping for Data Analytics
const techIcons = {
  'Python': FaPython,
  'SQL': FaDatabase,
  'MySQL': SiMysql,
  'Power BI': BsBarChartFill,
  'Tableau': SiTableau,
  'Pandas': SiPandas,
  'NumPy': SiNumpy,
  'Excel': FaFileExcel,
  'DAX': FaChartLine,
  'Seaborn': FaChartPie,
  'EDA': FaChartBar,
  'Data Modeling': FaDatabase,
  'Analytics': BsBarChartFill,
  'Database': FaDatabase,
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
    title: 'Bank Loan Approval & Risk Analysis',
    description: 'End-to-end loan approval analytics on 614 applicant records, evaluating credit risk, demographics, and income with interactive Power BI dashboards.',
    tags: ['Python', 'SQL', 'Power BI', 'Pandas'],
    image: loan_approval,
    demo: 'https://github.com/Abhijeetdev07/finance_project_loan_approval-analysis',
    github: 'https://github.com/Abhijeetdev07/finance_project_loan_approval-analysis',
  },
  {
    title: 'HR Attrition & Analytics Dashboard',
    description: 'Comprehensive HR workforce analysis across 1,470 employee records uncovering key turnover drivers (30.5% overtime attrition) with a 4-page DAX dashboard.',
    tags: ['Power BI', 'Python', 'SQL', 'DAX'],
    image: hr_attrition,
    demo: 'https://github.com/Abhijeetdev07/hr_attrition_employee',
    github: 'https://github.com/Abhijeetdev07/hr_attrition_employee',
  },
  {
    title: 'Sales Performance & Profit Analytics',
    description: 'Interactive multi-year Power BI sales dashboard visualizing $55.39M in revenue, $35.59M profit margins, regional trends, and category performance.',
    tags: ['Power BI', 'Excel', 'DAX', 'Analytics'],
    image: sales_dashboard,
    demo: 'https://github.com/Abhijeetdev07/sales_data_powerbi',
    github: 'https://github.com/Abhijeetdev07/sales_data_powerbi',
  },
  {
    title: 'Healthcare & Hospital SQL Analytics',
    description: 'Advanced relational SQL database analysis answering 34 operational questions on patient admissions, physician workloads, allergies, and diagnoses.',
    tags: ['SQL', 'MySQL', 'EDA', 'Database'],
    image: medical_sql,
    demo: 'https://github.com/Abhijeetdev07/medical_sql_project',
    github: 'https://github.com/Abhijeetdev07/medical_sql_project',
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
      className="group relative bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden p-5 border-2 border-[rgba(var(--theme-primary-rgb),1)] shadow-[0_8px_32px_0_rgba(var(--theme-primary-rgb),0.2)] hover:shadow-[0_8px_48px_0_rgba(var(--theme-primary-rgb),0.3)] hover:border-[rgba(var(--theme-primary-rgb),1)] transition-all duration-500 ease-out flex flex-col will-change-transform w-full h-full min-h-[420px]"
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
          View Project
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
// relative min-h-screen flex items-center overflow-hidden
const Projects = () => {
  return (
    <section id="projects" className="relative min-h-screen flex items-center justify-center overflow-hidden py-12 lg:py-16">
      <Snowfall color="#82C3D9" style={{ position: 'absolute', inset: 0, zIndex: 0 }} />
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="text-center mb-10 lg:mb-12">
          <h2 className="text-3xl min-[500px]:text-4xl md:text-5xl font-bold">Analytics Projects</h2>
          <div className="w-20 min-[500px]:w-24 h-1 bg-[var(--theme-primary)] mx-auto mt-2"></div>
        </div>

        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          initialSlide={1}
          coverflowEffect={{
            rotate: 0,
            stretch: 50,
            depth: 50,
            modifier: 2,
            slideShadows: true,
          }}
          pagination={false}
          navigation={false}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="mySwiper py-12"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.title} className="!w-[300px] sm:!w-[320px] lg:!w-[320px]">
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
 
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
