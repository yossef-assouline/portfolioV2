"use client"
import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'



export const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const textVariants = {
    hidden: { 
      opacity: 0,
      filter: "blur(40px)",
      y: 20
    },
    visible: { 
      opacity: 1,
      filter: "blur(0px)",
      y:0
      
    }
  }

  const wordVariants = {
    hidden: { 
      opacity: 0,
      x: -40,
      filter: "blur(40px)",
    },
    visible: { 
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
    }
  }

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

  const wordsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  }

  return (
    <section id="about" className="min-h-screen flex items-center justify-center p-8 relative overflow-hidden">
      {/* Content */}
      <motion.div 
        className="relative z-10 text-center"
        variants={containerVariants}
        
        initial="hidden"
        animate="visible"
        transition={{
          duration: 1,
          ease: "easeInOut"
        }}
      >
        <motion.div 
          variants={wordsContainerVariants}
          className="text-4xl md:text-6xl font-bold flex justify-center gap-x-4 flex-wrap"
        >
          {['I', 'will', 'help', 'you'].map((word, index) => (
            <motion.span
              key={index}
              variants={wordVariants}
             
              className={`inline-block ${word === 'help' ? 'bg-gradient-to-r from-blue-500/70 via-cyan-600 to-cyan-500/90 inline-block text-transparent bg-clip-text' : 'blur-hidden'}`}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>

        <motion.div 
          variants={textVariants}
          className="mb-8"
          transition={{
            delay: 0.5,
            duration: 1,
            ease: "easeInOut"
          }}
        >
          <TypeAnimation
            sequence={[
              'get shit ON',
              2000,
              'get oiled UP',
              2000,
              'get FREAKY',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="blur-hidden text-4xl md:text-6xl font-bold text-white mb-8 blur-visible "
          />
        </motion.div>

       

        {/* New Buttons Container */}
        <motion.div
          variants={textVariants}
          transition={{
            delay: 0.8,
            duration: 1,
            ease: "easeInOut"
          }}
          className="flex gap-4 justify-center mb-16 flex-wrap"
        >
          <motion.button
            onClick={() => scrollToSection('contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-blue-500 hover:cursor-pointer text-white rounded-lg font-medium
              transition-colors duration-300 hover:bg-blue-600"
          >
            צור קשר אח
          </motion.button>
          
          <motion.button
            onClick={() => scrollToSection('tech-stack')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 border border-white/20 text-white rounded-lg font-medium
              transition-colors hover:cursor-pointer duration-300 hover:bg-white/10"
          >
            בוא תלמד איזה דבר או שתיים
          </motion.button>
        </motion.div>

        {/* Custom Animated Arrow */}
        <motion.div
          variants={textVariants}
          initial={{ y: 0 }}
          animate={{ 
            y: [0, 10, 0],
          }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          onClick={() => scrollToSection('tech-stack')}
          className="cursor-pointer w-8 h-12 mx-auto relative top-70"
        >
          <motion.svg
            viewBox="0 0 24 24"
            className="w-full h-full"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.path
              d="M12 4 L12 20 M5 13 L12 20 L19 13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              
              className="text-white"
            />
          </motion.svg>
        </motion.div>
      </motion.div>
    </section>
  )
}