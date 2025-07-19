import React from 'react'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'

const ProjectDetail = () => {
  const { projectId } = useParams()

  return (
    <>
      <Helmet>
        <title>{`Project: ${projectId} - Tufel Malik`}</title>
        <meta name="description" content={`Detailed case study of ${projectId} project by Tufel Malik.`} />
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
              {projectId} Case Study
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Detailed project case study page for {projectId}. This will include immersive 3D mockups, 
              technical stack details, development process, and live demo links.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default ProjectDetail