"use client"
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export const Projects = () => {
  // Create separate refs for title and content
  const titleRef = useRef(null)
  const contentRef = useRef(null)
  
  // Use separate useInView hooks with different thresholds
  const isTitleInView = useInView(titleRef, { 
    once: true,
    margin: "0px 0px -200px 0px" // Negative margin to trigger earlier
  })
  
  const isContentInView = useInView(contentRef, { 
    once: true,
    margin: "0px 0px -200px 0px"
  })

  const projects = [
    {
      year: '2025',
      title: 'VidTube',
      description: 'A community-driven video sharing platform',
      tech: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'Tailwind' , 'Express'],
      link: 'https://video-tube-one.vercel.app/',
      direction: 'right'
    },
    {
      year: '2024',
      title: 'Mood 4 Movie',
      description: 'A movie recommendation system that suggests movies based on the user mood.',
      tech: [ 'Nextjs', 'Tailwind', 'React', 'JavaScript', 'Axios'],
      link: 'https://mood4movie.vercel.app',
      direction: 'left'
    },
    {
      year: '2024',
      title: 'MathRacer',
      description: 'A math game racing game that challenges users to solve math problems as fast as possible.',
      tech: ['Sockets', 'Nextjs', 'React', 'JavaScript'],
      link: 'https://math-racer.vercel.app/',
      direction: 'right'
    },
    // Add more projects as needed
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: direction => ({
      opacity: 0,
      x: direction === 'left' ? 100 : -100,

    }),
    visible: {
      opacity: 1,
      x: 0,

      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1], // Custom easing
      }
    }
  }

  return (
    <section id="work" className="min-h-screen flex flex-col items-center justify-center py-20 px-4 bg-gradient-to-b from-[#121212] to-gray-900">
        <motion.h2 
          ref={titleRef}
          initial={{ opacity: 0, y: -20 }}
          animate={isTitleInView ? 
            { opacity: 1, y: 0 } : 
            { opacity: 0, y: -20 }
          }
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-16 text-blue-400 lg:self-start xl:ml-32 mt-14 md:mt-22 bg-gradient-to-r from-blue-500/70 via-cyan-600 to-cyan-500/90 inline-block text-transparent bg-clip-text"
        >
          Work
        </motion.h2>

      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={contentRef}
          variants={containerVariants}
          initial="hidden"
          animate={isContentInView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline line with gradient fade */}
          <motion.div
            initial={{ opacity: 0, y: 100 , transform: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0 , transform: 'blur(0px)' }}
            transition={{ duration: 1 }}
           className="absolute right-full md:left-1/2 transform -translate-x-1/2 h-full w-1">
            <motion.div className="absolute top-0 w-full h-20 bg-gradient-to-b from-gray-900 to-transparent z-10" />
            <motion.div className="w-full h-full bg-blue-500/80" />
            <motion.div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-gray-900 to-transparent z-10" />
          </motion.div>

          {projects.map((project, index) => (
            <motion.div
              key={index}
              custom={project.direction}
              variants={itemVariants}
              className={`flex items-center justify-center md:justify-start mb-20 ${
                project.direction === 'left' ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Project card */}  
              <div className={`w-5/6  md:w-2/3 ${project.direction === 'left' ? 'md:pl-40' : 'md:pr-40'}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-6 rounded-lg flex flex-col border border-gray-700 bg-gray-900/10 
                    backdrop-blur-sm shadow-lg hover:bg-gray-900/60 transition-colors duration-300"
                >
                  <span className="text-blue-400 text-sm font-semibold">{project.year}</span>
                  <h3 className="text-xl font-bold mt-2 mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center"
                  >
                    View Project
                    <svg 
                      className="w-4 h-4 ml-2" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M14 5l7 7m0 0l-7 7m7-7H3" 
                      />
                    </svg>
                  </a>
                </motion.div>
              </div>

              {/* Timeline dot */}
              <motion.div 

                className="absolute w-4 h-4 right-[99.4%] md:left-1/2 transform md:-translate-x-1/2 bg-white rounded-full   "
                variants={{
                  hidden: { scale: 0 ,},
                  visible: { 
                    scale: 1,
                   
                    transition: { duration: 0.3 }
                  }
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
