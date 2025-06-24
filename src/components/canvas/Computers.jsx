import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";

// Main model
const Computers = ({ isMobile }) => {
  const computer = useGLTF("/desktop_pc/scene.gltf"); // ✅ Fixed path

  return (
    <group>
      {/* Ambient light */}
      <ambientLight intensity={1.2} color="#ffffff" />

      {/* Hemisphere light */}
      <hemisphereLight intensity={0.8} groundColor="#f0f8ff" skyColor="#d3e6ff" />

      {/* Conditionally enable shadows only on desktop */}
      {!isMobile && (
        <directionalLight
          position={[5, 10, 7]}
          intensity={2.5}
          castShadow
          shadow-mapSize={2048}
          color="#ffffff"
        />
      )}

      {/* Simpler lights for mobile */}
      <directionalLight position={[0, -5, 5]} intensity={1.5} color="#f8f8ff" />
      <directionalLight position={[-10, 5, 0]} intensity={1.2} color="#fff9e6" />
      <pointLight position={[0, 5, -10]} intensity={1.0} distance={20} decay={1} />
      <pointLight position={[10, 10, -5]} intensity={0.6} distance={15} decay={1.5} />

      {/* Model */}
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

  // Handle mobile screen detection
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleChange = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <div className="w-full h-[500px] sm:h-[600px]"> {/* ✅ Ensures canvas has height */}
      <Canvas
        frameloop="demand"
        shadows={!isMobile} // ✅ Disable shadows on mobile
        dpr={[1, isMobile ? 1.5 : 2]} // ✅ Lower DPR on mobile
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{
          preserveDrawingBuffer: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.1,
          outputEncoding: THREE.sRGBEncoding,
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
    </div>
  );
};

export default ComputersCanvas;

