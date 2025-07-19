import React, { Suspense } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { Sphere, Float, Text3D, OrbitControls } from '@react-three/drei'
import { ArrowRight, Download, ExternalLink, Code, Database, Smartphone } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

// 3D Hero Visual Component
function HeroVisual() {
  return (
    <Float
      speed={2}
      rotationIntensity={1}
      floatIntensity={2}
    >
      <group>
        {/* Central Mobile Device */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1, 2, 0.1]} />
          <meshStandardMaterial color="#0ea5e9" />
        </mesh>
        
        {/* Network Globe */}
        <Sphere position={[2, 1, -1]} args={[0.8, 32, 32]}>
          <meshStandardMaterial color="#d946ef" wireframe transparent opacity={0.6} />
        </Sphere>
        
        {/* Floating Data Nodes */}
        {Array.from({ length: 8 }).map((_, i) => (
          <mesh
            key={i}
            position={[
              Math.sin(i * 0.785) * 3,
              Math.cos(i * 0.785) * 2,
              Math.sin(i * 0.5) * 1.5
            ]}
          >
            <sphereGeometry args={[0.1, 8, 8]} />
            <meshStandardMaterial color="#0ea5e9" emissive="#0ea5e9" emissiveIntensity={0.2} />
          </mesh>
        ))}
      </group>
    </Float>
  )
}

const Home = () => {
  const skills = [
    { name: 'Kotlin', icon: Code, description: 'Mobile & Cross-platform' },
    { name: 'Firebase', icon: Database, description: 'Backend & Auth' },
    { name: 'Android', icon: Smartphone, description: 'Native Development' }
  ]

  return (
    <>
      <Helmet>
        <title>Tufel Malik - Mobile Application Developer</title>
        <meta name="description" content="Professional Mobile Application Developer specializing in Kotlin, Android, and cross-platform development. Currently pursuing MCA at Parul University." />
      </Helmet>

      <div className="min-h-screen relative">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center section-padding">
          <div className="container-max">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                    <span className="gradient-text">Tufel Malik:</span>
                    <br />
                    <span className="text-white">Innovating Mobile</span>
                    <br />
                    <span className="text-white">Experiences &</span>
                    <br />
                    <span className="gradient-text">Bridging Networks</span>
                  </h1>
                </motion.div>

                <motion.p
                  className="text-xl text-gray-300 max-w-2xl leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Crafting robust, user-centric mobile applications with a strategic vision 
                  for network solutions and system architecture.
                </motion.p>

                {/* Quick Intro */}
                <motion.div
                  className="glass-morphism p-6 rounded-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <p className="text-gray-300">
                    🎓 <strong className="text-primary-400">BCA Graduate</strong> from Parul University, Vadodara
                    <br />
                    📚 Currently pursuing <strong className="text-primary-400">MCA</strong> 
                    <br />
                    🚀 Eager for a <strong className="text-accent-400">Network Technician</strong> role to enhance my skills
                  </p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <Link to="/projects" className="btn-primary flex items-center justify-center space-x-2">
                    <span>Explore My Projects</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  
                  <Link to="/contact" className="btn-secondary flex items-center justify-center space-x-2">
                    <span>Connect Now</span>
                    <ExternalLink className="w-5 h-5" />
                  </Link>
                </motion.div>
              </motion.div>

              {/* 3D Visual */}
              <motion.div
                className="h-96 lg:h-[500px] relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
                  <ambientLight intensity={0.5} />
                  <pointLight position={[10, 10, 10]} />
                  <directionalLight position={[-10, -10, -5]} intensity={0.3} />
                  <Suspense fallback={null}>
                    <HeroVisual />
                    <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
                  </Suspense>
                </Canvas>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Key Skills Spotlight */}
        <section className="section-padding py-20">
          <div className="container-max">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
                Core Expertise
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Specialized skills in mobile development and network technologies
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {skills.map((skill, index) => {
                const Icon = skill.icon
                return (
                  <motion.div
                    key={skill.name}
                    className="skill-card text-center group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                  >
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{skill.name}</h3>
                    <p className="text-gray-400">{skill.description}</p>
                  </motion.div>
                )
              })}
            </div>

            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <Link 
                to="/experience" 
                className="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors font-medium"
              >
                <span>View All Skills & Experience</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home