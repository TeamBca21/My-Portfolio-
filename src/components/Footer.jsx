import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      className="relative z-10 mt-20 glass-morphism"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-max section-padding py-12">
        <div className="text-center">
          <motion.div
            className="flex justify-center space-x-6 mb-6"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <a
              href="https://www.linkedin.com/in/tufel-malik-9609b3264"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary-500/10 border border-primary-400/20 hover:bg-primary-500/20 transition-all duration-300"
            >
              <Linkedin className="w-6 h-6 text-primary-400" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary-500/10 border border-primary-400/20 hover:bg-primary-500/20 transition-all duration-300"
            >
              <Github className="w-6 h-6 text-primary-400" />
            </a>
            <a
              href="mailto:mtufel21@gmail.com"
              className="p-3 rounded-full bg-primary-500/10 border border-primary-400/20 hover:bg-primary-500/20 transition-all duration-300"
            >
              <Mail className="w-6 h-6 text-primary-400" />
            </a>
          </motion.div>
          
          <motion.p
            className="text-gray-400 flex items-center justify-center space-x-2"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <span>© {currentYear} Tufel Malik. Made with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>and React</span>
          </motion.p>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer