"use client"
import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

export const Logo = () => (
  <svg 
    
    viewBox="0 0 1024 1024"
    className="text-white hover:text-blue-400 transition-colors duration-300 w-18 h-18"
    preserveAspectRatio="xMidYMid meet"
  >
    <g transform="translate(0.000000,1024.000000) scale(0.100000,-0.100000)"
      fill="currentColor" stroke="none">
      <path d="M2455 7807 c-3 -6 -4 -401 -3 -877 l3 -865 328 -3 327 -2 0 532 c0
        293 3 543 6 556 l7 23 2011 -2 c1106 -1 2019 -4 2029 -6 16 -4 17 -111 17
        -2062 l0 -2058 -882 -7 -883 -7 -20 -27 c-38 -49 -417 -606 -422 -619 -4 -11
        271 -13 1436 -13 l1441 0 0 2724 0 2723 -2695 1 c-2119 1 -2697 -1 -2700 -11z"/>
      <path d="M3515 6823 c10 -16 50 -73 89 -128 40 -55 104 -145 143 -200 75 -107
        557 -781 736 -1030 59 -82 106 -157 104 -165 -2 -8 -94 -143 -204 -300 -247
        -353 -456 -654 -681 -983 -95 -138 -195 -285 -223 -324 l-50 -73 413 0 413 0
        217 308 c276 391 812 1143 949 1332 129 179 228 315 523 725 126 176 317 440
        423 586 106 147 193 269 193 273 0 3 -188 6 -419 6 l-418 0 -288 -412 c-379
        -543 -397 -568 -405 -568 -7 0 -350 488 -571 812 l-114 167 -424 1 -423 0 17
        -27z"/>
      <path d="M5893 5423 c-38 -54 -112 -159 -163 -233 -95 -136 -458 -652 -709
        -1006 -258 -364 -388 -550 -590 -841 -111 -161 -205 -294 -209 -296 -4 -3
        -254 -6 -557 -8 l-550 -4 -3 1228 -2 1227 -330 0 -330 0 2 -1557 3 -1558 1070
        -3 1070 -2 135 192 c73 106 191 274 260 373 70 99 192 272 270 385 79 113 208
        297 287 410 79 113 156 222 171 242 15 21 72 103 127 183 55 79 103 145 106
        145 3 0 61 -82 130 -181 68 -100 174 -253 234 -341 l110 -160 240 2 c131 0
        240 2 242 3 1 2 3 115 3 253 l1 250 -463 694 c-255 381 -469 695 -475 697 -6
        2 -42 -40 -80 -94z"/>
    </g>
  </svg>
)

export const NavBar = () => {
  const pathname = usePathname()

  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [indicatorStyle, setIndicatorStyle] = useState({})
  const [isScrolled, setIsScrolled] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    // Create an Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-50% 0px -50% 0px', // Triggers when section is in the middle of viewport
        threshold: 0
      }
    )

    // Observe all sections
    const sections = document.querySelectorAll('section[id]')
    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  useEffect(() => {
    // Update indicator position when active section changes
    if (navRef.current) {
      const activeElement = navRef.current.querySelector(`[data-section="${activeSection}"]`)
      if (activeElement) {
        const navRect = navRef.current.getBoundingClientRect()
        const activeRect = activeElement.getBoundingClientRect()
        
        // Calculate center position by adding half of the difference between text width and indicator width
        const centerOffset = (activeRect.width - 5) / 2
        
        setIndicatorStyle({
          width: '5px',
          transform: `translateX(${(activeRect.left - navRect.left) + centerOffset}px)`,
          opacity: 1
        })
      }
    }
  }, [activeSection])

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navItems = [
    { href: '#about', label: 'Home', id: 'about' },
    { href: '#tech-stack', label: 'Techologies', id: 'tech-stack' },
    { href: '#work', label: 'Work', id: 'work' },
    { href: '#contact', label: 'Contact', id: 'contact' },
  ]

  const menuVariants = {
    closed: {
      y: "-100%",
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
        staggerChildren: 0.1,
        staggerDirection: -1,
        when: "afterChildren"
      }
    },
    open: {
      y: "0%",
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
        staggerChildren: 0.1,
        staggerDirection: 1,
        when: "beforeChildren"
      }
    }
  }

  const itemVariants = {
    closed: { 
      opacity: 0,
      y: 50
    },
    open: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1]
      }
    }
  }

  return (
    <nav 
      className={`fixed top-0 left-0 shadow-lg right-0 z-50 h-20 flex text-white justify-between items-center p-4 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#121212] backdrop-blur-sm' 
          : ' backdrop-blur-sm'
      }`}
    >
      {/* Burger Menu Button - Only visible on mobile */}
      <button 
        className="md:hidden z-50 relative w-8 h-8 flex flex-col justify-center items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span 
          className={`block absolute h-0.5 bg-white transform transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
            isOpen 
              ? 'w-8 rotate-45' 
              : 'w-8 -translate-y-2'
          }`} 
        />
        <span 
          className={`block absolute h-0.5 bg-white transform transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
            isOpen 
              ? 'w-0 opacity-0' 
              : 'w-6'
          }`} 
        />
        <span 
          className={`block absolute h-0.5 bg-white transform transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${
            isOpen 
              ? 'w-8 -rotate-45' 
              : 'w-4 translate-y-2'
          }`} 
        />
      </button>

      {/* Desktop Navigation */}
      <div className='hidden md:flex gap-6 items-center relative xl:ml-30' ref={navRef}>
        <div 
          className="absolute -bottom-2 h-[2px] bg-white rounded-full transition-all duration-300 ease-in-out"
          style={indicatorStyle}
        />
        
        {navItems.map((link) => (
          <div 
            key={link.href} 
            className='relative group'
            data-section={link.id}
          >
            <a 
              href={link.href}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(link.id)
              }}
              className={`font-bold hover:text-gray-300 transition-colors cursor-pointer px-1 ${
                activeSection === link.id ? 'text-white' : ''
              }`}
            >
              {link.label}
            </a>
          </div>
        ))}
      </div>

      {/* Center logo */}
      <div className='absolute left-1/2 transform -translate-x-1/2'>
        <Link href="/" className='flex items-center justify-center'>
          <Logo />
        </Link>
      </div>

      {/* Social Icons - Hidden on mobile when menu is open */}
      <div className={`xl:mr-30 hidden md:block`}>
        <div className="flex gap-4">
          <a
            href="https://github.com/yossef-assouline"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400/70 transition-colors"
          >
            <FontAwesomeIcon icon={faGithub} className="text-3xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/yossef-assouline-495992301/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400/70 transition-colors"
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-3xl" />
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Background Layer */}
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "100vh" }}
              exit={{ height: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1]
              }}
              className="fixed inset-x-0 top-0 z-40 bg-[#121212]/90 backdrop-blur-xl origin-top"
            />

            {/* Content Layer */}
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed inset-0 top-50 z-40 md:hidden pointer-events-none"
            >
              {/* Menu Items Container */}
              <div className="h-full flex items-center justify-center">
                <div className="flex flex-col items-center justify-center pointer-events-auto">
                  {navItems.map((link, index) => (
                    <motion.div
                      key={link.href}
                      variants={itemVariants}
                      className="my-4 overflow-hidden"
                    >
                      <a
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault()
                          scrollToSection(link.id)
                          setIsOpen(false)
                        }}
                        className={`text-2xl font-bold text-white hover:text-blue-400 transition-colors relative block ${
                          activeSection === link.id ? 'text-blue-400' : ''
                        }`}
                      >
                        {link.label}
                      </a>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}
