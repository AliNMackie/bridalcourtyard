
"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Pearl() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            const t = state.clock.getElapsedTime();
            meshRef.current.rotation.y = t * 0.2;
            meshRef.current.rotation.x = Math.cos(t * 0.2) * 0.2;
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh ref={meshRef} castShadow receiveShadow>
                <sphereGeometry args={[1, 64, 64]} />
                <MeshDistortMaterial
                    color="#fdfcf0" /* Warm Pearl White */
                    envMapIntensity={1}
                    clearcoat={1}
                    clearcoatRoughness={0.1}
                    metalness={0.1}
                    roughness={0.2}
                    distort={0.3}
                    speed={1.5}
                />
            </mesh>
        </Float>
    );
}

export default function Accessory3D() {
    return (
        <div className="w-full h-full min-h-[400px] relative cursor-pointer group">
            <Canvas camera={{ position: [0, 0, 3], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
                <pointLight position={[-10, -10, -10]} intensity={0.5} />
                <Pearl />
                <Environment preset="studio" />
            </Canvas>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs uppercase tracking-widest text-gray-400 opacity-50 group-hover:opacity-100 transition-opacity">
                Interactive 3D
            </div>
        </div>
    );
}
