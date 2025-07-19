import React from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'

const Experience = () => {
  return (
    <>
      <Helmet>
        <title>Experience & Skills - Tufel Malik</title>
        <meta name="description" content="Explore Tufel Malik's professional experience, technical skills, and educational background." />
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
              Experience & Skills
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              This page will showcase detailed professional experience, comprehensive technical skills, 
              education details, and achievements. Coming soon!
            </p>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Experience