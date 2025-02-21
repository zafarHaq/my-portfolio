"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";

export default function RetroScene() {
  return (
    <Canvas camera={{ position: [0, 2, 5], fov: 75 }}>
      {/* Retro Grid */}
      <gridHelper args={[10, 20, "hotpink", "purple"]} />

      {/* Neon Text */}
      <Text position={[0, 1, 0]} fontSize={0.5} color="cyan">
        Welcome to My Retro Portfolio
      </Text>

      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <OrbitControls />
    </Canvas>
  );
}
