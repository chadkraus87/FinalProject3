import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

function Model({ modelPath }) {
  const objRef = useRef();
  
  const { scene } = useLoader(GLTFLoader, modelPath);
  console.log("Model Path:", modelPath);
  
  useEffect(() => {
    if (objRef.current) {
      objRef.current.scale.set(1.5, 1.5, 1.5);
    }
  }, [objRef]);

  return <primitive ref={objRef} object={scene} position={[0, 0, 0]} />;
}



function Lighting() {
  return (
    <>
      {/* <pointLight position={[0, 10, -10]} intensity={1.5} /> */}
      <directionalLight position={[10, 10, 20]} intensity={3} />
      <directionalLight position={[-10, -10, -20]} intensity={3} />

    </>
  );
}

function Background() {
  const { scene } = useThree();
  useEffect(() => {
    scene.background = new THREE.Color('#FFA500');
  }, [scene]);
  return null;
}



function Camera() {
  const { camera } = useThree();
  useEffect(() => {
    camera.fov = 75;
    camera.updateProjectionMatrix();
  }, [camera]);

  useFrame(() => {
    camera.updateProjectionMatrix();
  });

  return null;
}

const infoBanner = {
  background: 'black',
  opacity: '75%',
  color: 'white',
  textAlign: 'right',
  paddingRight: "2%"
}

export default function Display({ modelPath }) { 
  return (
    <div>
      <Canvas style={{ width: '45vw', height: '55vh' }}>
        <Suspense fallback={null}>
          <Background />
          <Camera />
          <Lighting />
          <Model modelPath={modelPath} />  
          <OrbitControls />
        </Suspense>
      </Canvas>
      <div style={infoBanner}>
        This model is 3D and interactive!
      </div>
    </div>
  );
}

