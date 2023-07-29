"use client"
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useAnimations } from '@react-three/drei'
import { useEffect, useRef } from 'react'

const Newmodel = ({ data }) => {

    const {path, scale, speed} = data
    const { scene, animations } = useLoader(GLTFLoader, path)
    const modelRef = useRef()
    const modelAnimations = useAnimations(animations, modelRef);

    useEffect(() => {
        modelAnimations.actions[modelAnimations.names[0]].reset().play();
        modelAnimations.actions[modelAnimations.names[0]].setDuration(speed); 
      }, []);
    return <primitive castShadow ref={modelRef} object={scene} scale={scale} rotation={[0, 0, 0]} position={[0, -1.5, 0]} />

}

export default Newmodel