import React from 'react'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact - Tufel Malik</title>
        <meta name="description" content="Get in touch with Tufel Malik for collaboration opportunities and professional inquiries." />
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
              Let's Connect
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              This page will feature a comprehensive contact form, direct contact information, 
              3D connection visuals, and professional social media links.
            </p>
            
            <div className="mt-12 glass-morphism p-8 rounded-2xl max-w-md mx-auto">
              <h3 className="text-2xl font-semibold text-white mb-4">Quick Contact</h3>
              <div className="space-y-3 text-left">
                <p className="text-gray-300">
                  <strong className="text-primary-400">Email:</strong> mtufel21@gmail.com
                </p>
                <p className="text-gray-300">
                  <strong className="text-primary-400">Phone:</strong> +91 9924753867
                </p>
                <p className="text-gray-300">
                  <strong className="text-primary-400">Location:</strong> Bharuch, Gujarat, India
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Contact