import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

function Model() {
  const objRef = useRef();

  //This is Where the model get loaded in
  const { scene } = useLoader(GLTFLoader, '/assets/3D/dog.gltf');

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

export default function Display() {
  return (
    <div>
      <Canvas
        style={{ width: '45vw', height: '55vh' }}
      >
        <Suspense fallback={null}>
          <Background />
          <Camera />
          <Lighting />
          <Model />
          <OrbitControls />
        </Suspense>
      </Canvas>
      <div style={infoBanner}>
        This model is 3D and interactive!
      </div>

    </div>
  );
}
