"use client"
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { PerspectiveCamera, OrbitControls } from '@react-three/drei'
import { angleToRadian } from '../utils/angleToRadian';
import Newmodel from './Model';

const Model = ({ data }) => {
  return (
    <Canvas className='h-screen'>
      <Suspense fallback={null}>
        <PerspectiveCamera />
        <OrbitControls minPolarAngle={(angleToRadian(90))} setPolarAngle={angleToRadian(90)} maxPolarAngle={angleToRadian(90)} enableZoom={false} />
        <Newmodel data={data} />
        <ambientLight args={["lightgreen", 1]} />
        <spotLight castShadow position={[-2, 5, 8]} args={["lightgreen", 1]} />
      </Suspense>
    </Canvas>
  )
}

export default Model