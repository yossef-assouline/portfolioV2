"use client"
import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import toast, { Toaster } from 'react-hot-toast'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export const Contact = () => {
  const formRef = useRef(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const sendEmail = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      toast.success('Message sent successfully!')
      formRef.current.reset()
    } catch (error) {
      console.error('Email error:', error)
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  }

  const socialLinks = [
    {
      name: 'GitHub',
      icon: faGithub,
      url: 'https://github.com/yourusername'
    },
    {
      name: 'LinkedIn',
      icon: faLinkedin,
      url: 'https://linkedin.com/in/yourusername'
    }
  ]

  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-900">
      <Toaster position="bottom-right" />
          <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
            variants={itemVariants}
            className="text-4xl font-bold mb-4 text-blue-400 lg:self-start xl:ml-28 bg-gradient-to-r from-blue-500/70 via-cyan-600 to-cyan-500/90 inline-block text-transparent bg-clip-text"
          >
          Contact
          </motion.h1>
      <motion.div 
        className="max-w-4xl w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 
          variants={itemVariants}
          className="text-4xl font-bold mb-4 text-blue-400 text-center"
        >
          Get in Touch
        </motion.h2>

        <motion.p 
          variants={itemVariants}
          className="text-white text-center mb-12 max-w-lg mx-auto"
        >
          Feel free to reach out for collaborations, opportunities, or just to say hello! 
          I'll try my best to get back to you as soon as possible.
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="bg-gray-800/50 rounded-xl p-8 backdrop-blur-sm border border-gray-700/50"
        >
          <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div variants={itemVariants}>
                <label className="block mb-2 text-white font-bold">Name</label>
                <input 
                  type="text" 
                  name="user_name"
                  placeholder="Enter your name here..."
                  required
                  className="w-full p-3 bg-gray-900/50 rounded-lg border border-gray-700 
                    focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all
                    outline-none"
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <label className="block mb-2 text-white font-bold">Email</label>
                <input 
                  type="email" 
                  name="user_email"
                  required
                  placeholder="example@gmail.com"
                  className="w-full p-3 bg-gray-900/50 rounded-lg border border-gray-700 
                    focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all
                    outline-none"
                />
              </motion.div>
            </div>
            
            <motion.div variants={itemVariants}>
              <label className="block mb-2 text-white font-bold">Message</label>
              <textarea 
                name="message"
                required
                placeholder="Enter your message here..."
                className="w-full p-3 bg-gray-900/50 rounded-lg border border-gray-700 h-32
                  focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all
                  outline-none resize-none"
              />
            </motion.div>

            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
              className="w-full bg-blue-500/80 hover:bg-blue-500/40 px-8 py-4 rounded-lg 
                transition-colors disabled:opacity-50 disabled:cursor-not-allowed
                font-bold text-white"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
          </form>
        </motion.div>

        {/* Social Links */}
        
      </motion.div>
    </section>
  )
}
