import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto"></div>
        </div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-4xl bg-gray-900/80 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-gray-700/50 shadow-xl hover:shadow-[0_0_50px_rgba(6,182,212,0.3)] transition-all duration-300 transform hover:scale-102"
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
