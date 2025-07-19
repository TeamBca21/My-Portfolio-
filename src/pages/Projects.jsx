import React from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'

const Projects = () => {
  return (
    <>
      <Helmet>
        <title>Projects - Tufel Malik</title>
        <meta name="description" content="Explore Tufel Malik's portfolio of mobile applications and development projects." />
      </Helmet>

      <div className="min-h-screen section-padding py-20">
        <div className="container-max">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-8">
              Projects Portfolio
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              This page will feature an interactive project gallery showcasing BibliaChat App, 
              RajdhaniEats App, Crypto Wallet App, and IndiNews360 App with 3D mockups and detailed case studies.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Projects