import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* Radial gradient background effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-green-500/20 rounded-full blur-[120px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-[var(--theme-primary)]">Me</span>
          </h2>
          <div className="w-24 h-1 bg-[var(--theme-primary)] mx-auto"></div>
        </div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-4xl bg-black/90 p-8 md:p-12 rounded-2xl border border-green-400/20 transition-all duration-500 transform hover:scale-[1.02]"
          >
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-white text-center">
                I'm Abhijeet Ugale, a passionate developer
              </h3>
              
              <p className="text-gray-300 text-lg leading-relaxed text-center">
              Hey there! I'm final year Information Technology (IT) student at Anuradha College of 
                Engineering and Technology, Chikhli, with a strong passion for web development 
                and software engineering. I love creating innovative solutions and bringing 
                ideas to life through code.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed text-center">
                My journey in programming started with curiosity and has evolved into a 
                deep commitment to mastering both frontend and backend technologies. 
                I enjoy working with modern frameworks and tools to build scalable.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
