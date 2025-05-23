import { Canvas, useFrame, useLoader, extend } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import React, { useRef } from "react";
import * as THREE from "three";
import CCAttribution from "./CCAttribution";

const planetScales = {
    earth: 6371 / 3000,
    moon: 1737 / 12000,
  };

const Moon = () => {
    const moonRef = useRef();
    const moonmap = useLoader(THREE.TextureLoader, "./2k_moon.jpg");

    return (
        <mesh ref={moonRef} position={[3,1,2.3]}>
            <sphereGeometry args={[planetScales.moon, 64, 64]} />
                <meshPhongMaterial 
                    map={moonmap} 
                />
        </mesh>
    )
}

const Atmosphere = () => {
    const atmosphereRef = useRef();

    const atmosphereMaterial = new THREE.ShaderMaterial({
        vertexShader: `
            varying vec3 vNormal;
            void main() {
                vNormal = normalize(normalMatrix * normal);
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,
        fragmentShader: `
            varying vec3 vNormal;
            void main() {
                float intensity = pow(0.5 - dot(vNormal, vec3(0, 0, 1.0)), 2.0);
                gl_FragColor = vec4(0.3, 0.6, 1.0, 1.0) * intensity;
            }
        `,
        side: THREE.BackSide, 
        blending: THREE.AdditiveBlending, 
        transparent: true
    });

    return (
        <mesh ref={atmosphereRef} scale={1.35}>
            <sphereGeometry args={[planetScales.earth, 64, 64]} />
            <primitive attach="material" object={atmosphereMaterial} />
        </mesh>
    );
};
const Clouds = () => {
  const cloudRef = useRef();
  const cloudMap = useLoader(THREE.TextureLoader, "./8k_earth_clouds.jpg");

  useFrame(() => {
    if (cloudRef.current) {
      cloudRef.current.rotation.y += 0.0006;
    }
  });

  return (
    <mesh ref={cloudRef}>
      <sphereGeometry args={[planetScales.earth * 1.01, 64, 64]} />
      <meshPhongMaterial
        map={cloudMap}
        transparent={true}
        opacity={0.4}
        depthWrite={false}
      />
    </mesh>
  );
};


const Earth = () => {
  const earthRef = useRef();

   // Load textures
   const colorMap = useLoader(THREE.TextureLoader, "./8k_earth_daymap.jpg");
   const bumpMap = useLoader(THREE.TextureLoader, "./2k_earth_normal_map.jpg");
   const specularMap = useLoader(THREE.TextureLoader, "./8k_earth_specular_map.jpg");
 

  // Rotate Earth on each frame
  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.0005;
    }
  });

  return (
    <mesh ref={earthRef} rotation={[-0.6, 8, 0]}>
      <sphereGeometry args={[planetScales.earth, 64, 64]} />
      <meshPhongMaterial 
        map={colorMap} 
        bumpMap={bumpMap} 
        bumpScale={1} 
        specularMap={specularMap} 
        specular={new THREE.Color("grey")}
        shininess={4}
      />
    </mesh>
  );
};


export default function PlanetEarth() {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-black relative">
      <Canvas className="w-full h-full" style={{ pointerEvents: "none" }}>
        <PerspectiveCamera
          makeDefault
          fov={75}
          near={0.1}
          far={1000}
          position={[0, 0, 5]}
        />
        <ambientLight intensity={0} />
        <directionalLight
          position={[20, 15, 5]}
          intensity={3}
          color={0xffffff}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-near={0.5}
          shadow-camera-far={50}
          shadow-camera-left={-30}
          shadow-camera-right={30}
          shadow-camera-top={30}
          shadow-camera-bottom={-30}
        />
        <Moon />
        <Earth />
        <Clouds />
        <Atmosphere />
        
      </Canvas>
      <CCAttribution/>
    </div>
  );
}