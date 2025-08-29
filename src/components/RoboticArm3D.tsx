import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense, useRef, useState } from 'react';
import Box from '@mui/material/Box';

import * as THREE from 'three';
function RoboticArm() {
  const lowerArmRef = useRef<THREE.Mesh>(null);
  const upperArmRef = useRef<THREE.Mesh>(null);
  const gripperLeftRef = useRef<THREE.Mesh>(null);
  const gripperRightRef = useRef<THREE.Mesh>(null);
  const [t] = useState(() => ({ value: 0 }));
  useFrame((state, delta) => {
    t.value += delta;
    if (lowerArmRef.current) {
      lowerArmRef.current.rotation.z = 0.2 + Math.sin(t.value * 1.2) * 0.25;
    }
    if (upperArmRef.current) {
      upperArmRef.current.rotation.z = -0.3 + Math.sin(t.value * 1.2 + 1) * 0.35;
    }
    if (gripperLeftRef.current && gripperRightRef.current) {
      const open = 0.2 + Math.abs(Math.sin(t.value * 1.5)) * 0.25;
      gripperLeftRef.current.position.x = 0.09 + open;
      gripperRightRef.current.position.x = -0.09 - open;
    }
  });
  return (
    <group>
      <mesh position={[0, 0.1, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.4, 0.4, 0.2, 32]} />
        <meshPhysicalMaterial color="#444" metalness={0.7} roughness={0.3} clearcoat={0.5} />
      </mesh>
      <mesh ref={lowerArmRef} position={[0, 0.6, 0]} castShadow>
        <boxGeometry args={[0.25, 1, 0.25]} />
        <meshPhysicalMaterial color="#1976d2" metalness={0.6} roughness={0.2} emissive="#1976d2" emissiveIntensity={0.15} />
      </mesh>
      <mesh position={[0, 1.1, 0]} castShadow>
        <sphereGeometry args={[0.15, 32, 32]} />
        <meshPhysicalMaterial color="#e0e0e0" metalness={1} roughness={0.1} />
      </mesh>
      <mesh ref={upperArmRef} position={[0, 1.6, 0]} castShadow>
        <boxGeometry args={[0.18, 0.8, 0.18]} />
        <meshPhysicalMaterial color="#8b5cf6" metalness={0.7} roughness={0.2} emissive="#8b5cf6" emissiveIntensity={0.12} />
      </mesh>
      <mesh position={[0, 2.0, 0]} castShadow>
        <sphereGeometry args={[0.11, 32, 32]} />
        <meshPhysicalMaterial color="#e0e0e0" metalness={1} roughness={0.1} />
      </mesh>
      <mesh ref={gripperLeftRef} position={[0.09, 2.25, 0]} castShadow>
        <boxGeometry args={[0.05, 0.3, 0.05]} />
        <meshPhysicalMaterial color="#1976d2" metalness={0.7} roughness={0.2} />
      </mesh>
      <mesh ref={gripperRightRef} position={[-0.09, 2.25, 0]} castShadow>
        <boxGeometry args={[0.05, 0.3, 0.05]} />
        <meshPhysicalMaterial color="#1976d2" metalness={0.7} roughness={0.2} />
      </mesh>
      <mesh position={[0, 2.45, 0]}>
        <sphereGeometry args={[0.06, 24, 24]} />
        <meshStandardMaterial color="#00ffe7" emissive="#00ffe7" emissiveIntensity={0.7} />
      </mesh>
    </group>
  );
}

export default function RoboticArm3D() {
  return (
    <Box sx={{ width: '100%', height: { xs: 320, sm: 400, md: 480 }, background: 'transparent' }}>
      <Canvas camera={{ position: [0, 2.2, 5], fov: 38 }} shadows>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 10, 5]} intensity={1.2} castShadow />
        <Suspense fallback={null}>
          <group position={[0, -0.5, 0]}>
            <RoboticArm />
          </group>
        </Suspense>
        <OrbitControls enablePan={false} enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={0} />
      </Canvas>
    </Box>
  );
}
