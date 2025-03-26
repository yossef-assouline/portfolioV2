"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faHtml5, faCss3Alt, faJs, faNodeJs, 
  faReact, faSass, faGitAlt, faNpm
} from '@fortawesome/free-brands-svg-icons'
import { faDatabase, faBolt } from '@fortawesome/free-solid-svg-icons'

const technologies = [
  { name: 'אייצ׳ טי אם אל', icon: faHtml5, color: 'text-[#E34F26]' },
  { name: 'סי אס אס', icon: faCss3Alt, color: 'text-[#1572B6]' },
  { name: 'ג׳אווה סקריפט', icon: faJs, color: 'text-[#F7DF1E]' },
  { name: 'טייפ סקריפט', icon: faJs, color: 'text-[#3178C6]' }, // Using JS icon as fallback
  { name: 'ריאקט', icon: faReact, color: 'text-[#61DAFB]' },
  { name: 'נקסט ', icon: faReact, color: 'text-white' }, // Using React icon as fallback
  { name: 'נוד', icon: faNodeJs, color: 'text-[#339933]' },
  { name: 'אקספרס', icon: faNodeJs, color: 'text-gray-400' }, // Using Node icon as fallback
  { name: 'מונגו דיביל', icon: faDatabase, color: 'text-[#47A248]' },
  { name: 'גיט', icon: faGitAlt, color: 'text-[#F05032]' },
  { name: 'סאאס', icon: faSass, color: 'text-[#CC6699]' },
  { name: 'זנב רוח', icon: faCss3Alt, color: 'text-[#38B2AC]' }, // Using CSS icon as fallback

]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { y: 10, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

export const TechStack = () => {
  return (
    <>
    <section id="tech-stack" className="min-h-screen flex flex-col items-center justify-center  ">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 mt-28 md:mt-0 lg:self-start xl:ml-32 xl:mb-16 bg-gradient-to-r from-blue-500/70 via-cyan-600 to-cyan-500/90 inline-block text-transparent bg-clip-text"
        >
          טכנולוגיות
        </motion.h2>
      <div className="w-2/3">
      
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12"
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              
              className="flex flex-col items-center justify-center p-6 rounded-lg border border-gray-700
                bg-gray-900/10 backdrop-blur-sm hover:translate-y-[-5px] shadow-lg hover:bg-gray-900/60
                transition-all duration-300 group"
            >
              <motion.div
                initial={false}
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className={`text-4xl mb-3 ${tech.color} opacity-80 
                   transition-opacity`}
              >
                <FontAwesomeIcon icon={tech.icon} />
              </motion.div>
              <h3 className="text-gray-300 font-medium text-sm">
                {tech.name}
              </h3>
            </motion.div>
            
          ))}
        </motion.div>
       
      </div>
    </section>
    </>
  )
}
