// src/components/RotatingLogo.jsx
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function RotatingBox() {
  const meshRef = useRef();

  useFrame(() => {
    // Rotate on X and Y axes
    meshRef.current.rotation.x += 0.05;
    meshRef.current.rotation.y += 0.05;
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
}

const RotatingLogo = () => {
  return (
    <div style={{ height: "200px", width: "100%" }}>
      <Canvas>
        <ambientLight />
        <directionalLight position={[2, 2, 5]} />
        <OrbitControls />
        <RotatingBox />
      </Canvas>
    </div>
  );
};

export default RotatingLogo;
