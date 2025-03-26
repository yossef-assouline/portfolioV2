import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Logo } from './NavBar'

export const Footer = () => {
  const currentYear = new Date().getFullYear()
  
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
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center space-y-4">
            
          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                <FontAwesomeIcon 
                  icon={link.icon} 
                  className="text-xl hover:scale-110 transform transition-transform" 
                />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-gray-400 text-sm text-center">
            <p>© {currentYear} Yossef Assouline. All rights reserved.</p>
          </div>
          <Logo />
        </div>
      </div>
    </footer>
  )
}
