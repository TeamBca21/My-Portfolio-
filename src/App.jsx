import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LoadingSpinner from './components/LoadingSpinner'
import BackgroundElements from './components/BackgroundElements'

// Lazy load pages for better performance
const Home = React.lazy(() => import('./pages/Home'))
const About = React.lazy(() => import('./pages/About'))
const Experience = React.lazy(() => import('./pages/Experience'))
const Projects = React.lazy(() => import('./pages/Projects'))
const ProjectDetail = React.lazy(() => import('./pages/ProjectDetail'))
const Contact = React.lazy(() => import('./pages/Contact'))

function App() {
  return (
    <div className="min-h-screen bg-secondary-900 relative overflow-hidden">
      {/* Background Elements */}
      <BackgroundElements />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:projectId" element={<ProjectDetail />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </AnimatePresence>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App