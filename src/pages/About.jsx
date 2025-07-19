import React from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'

const About = () => {
  return (
    <>
      <Helmet>
        <title>About - Tufel Malik</title>
        <meta name="description" content="Learn more about Tufel Malik's background, education, and professional journey in mobile application development." />
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
              About Me
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              This page is under construction. The full About page with detailed professional narrative, 
              education background, and career aspirations will be implemented here.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default About