import React, { useRef, useMemo, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Sphere } from '@react-three/drei'
import * as THREE from 'three'

// Floating particles component
function FloatingParticles(props) {
  const ref = useRef()
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(2000 * 3)
    for (let i = 0; i < 2000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 100
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100
    }
    return positions
  }, [])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={particlesPosition} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#0ea5e9"
          size={0.8}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.3}
        />
      </Points>
    </group>
  )
}

// Network globe component
function NetworkGlobe() {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
    }
  })

  return (
    <group position={[8, 0, -5]}>
      <Sphere ref={meshRef} args={[2, 32, 32]}>
        <meshStandardMaterial
          color="#0ea5e9"
          transparent
          opacity={0.1}
          wireframe
        />
      </Sphere>
      
      {/* Connection lines */}
      {Array.from({ length: 20 }).map((_, i) => (
        <mesh key={i} position={[
          Math.sin(i * 0.3) * 3,
          Math.cos(i * 0.3) * 3,
          Math.sin(i * 0.5) * 2
        ]}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshStandardMaterial color="#d946ef" transparent opacity={0.6} />
        </mesh>
      ))}
    </group>
  )
}

const BackgroundElements = () => {
  return (
    <>
      {/* 3D Canvas Background */}
      <div className="fixed inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 10], fov: 75 }}
          style={{ background: 'transparent' }}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <FloatingParticles />
          <NetworkGlobe />
        </Canvas>
      </div>
      
      {/* CSS Gradient Overlays */}
      <div className="fixed inset-0 z-0">
        {/* Primary gradient */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-primary-500/20 to-transparent rounded-full blur-3xl animate-pulse-slow" />
        
        {/* Secondary gradient */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-radial from-accent-500/20 to-transparent rounded-full blur-3xl animate-pulse-slow animation-delay-400" />
        
        {/* Tertiary gradient */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-conic from-primary-500/10 via-accent-500/10 to-primary-500/10 rounded-full blur-3xl animate-spin-slow" />
      </div>
      
      {/* Grid Pattern */}
      <div className="fixed inset-0 z-0 opacity-[0.02]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(14, 165, 233, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(14, 165, 233, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>
    </>
  )
}

export default BackgroundElements