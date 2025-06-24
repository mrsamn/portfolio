import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from 'three';

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <group>
      {/* Strong ambient light for base illumination */}
      <ambientLight intensity={1.2} color="#ffffff" />
      
      {/* Hemisphere light for natural environment lighting */}
      <hemisphereLight 
        intensity={0.8}
        groundColor="#f0f8ff"
        skyColor="#d3e6ff"
      />

      {/* Main directional light from front-top */}
      <directionalLight
        position={[5, 10, 7]}
        intensity={2.5}
        castShadow
        shadow-mapSize={2048}
        color="#ffffff"
      />

      {/* Fill light from bottom-front */}
      <directionalLight
        position={[0, -5, 5]}
        intensity={1.8}
        color="#f8f8ff"
      />

      {/* Side fill light */}
      <directionalLight
        position={[-10, 5, 0]}
        intensity={1.5}
        color="#fff9e6"
      />

      {/* Back light for depth */}
      <pointLight
        position={[0, 5, -10]}
        intensity={1.2}
        distance={20}
        decay={1}
        color="#e6f0ff"
      />

      {/* Soft rim light */}
      <pointLight
        position={[10, 10, -5]}
        intensity={0.8}
        distance={15}
        decay={1.5}
        color="#ffffff"
      />

      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </group>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ 
        preserveDrawingBuffer: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.1,
        outputEncoding: THREE.sRGBEncoding
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
