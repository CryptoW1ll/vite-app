import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { PerspectiveCamera, Stars } from '@react-three/drei';
import { Suspense, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import CCAttribution from './CCAttribution';

const planetScales = { earth: 6371 / 3000, moon: 1737 / 12000 };

function useReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(mediaQuery.matches);
    update();
    mediaQuery.addEventListener('change', update);
    return () => mediaQuery.removeEventListener('change', update);
  }, []);

  return reducedMotion;
}

function Moon({ reducedMotion }) {
  const moonRef = useRef();
  const moonMap = useLoader(THREE.TextureLoader, '/2k_moon.jpg');

  useFrame(() => {
    if (!reducedMotion && moonRef.current) moonRef.current.rotation.y += 0.0002;
  });

  return (
    <mesh ref={moonRef} position={[3, 1, 2.3]}>
      <sphereGeometry args={[planetScales.moon, 32, 32]} />
      <meshPhongMaterial map={moonMap} />
    </mesh>
  );
}

function Atmosphere() {
  const atmosphereMaterial = new THREE.ShaderMaterial({
    vertexShader: `varying vec3 vNormal; void main() { vNormal = normalize(normalMatrix * normal); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
    fragmentShader: `varying vec3 vNormal; void main() { float intensity = pow(0.5 - dot(vNormal, vec3(0, 0, 1.0)), 2.0); gl_FragColor = vec4(0.3, 0.6, 1.0, 1.0) * intensity; }`,
    side: THREE.BackSide,
    blending: THREE.AdditiveBlending,
    transparent: true,
  });

  return (
    <mesh scale={1.3}>
      <sphereGeometry args={[planetScales.earth, 32, 32]} />
      <primitive attach="material" object={atmosphereMaterial} />
    </mesh>
  );
}

function Clouds({ reducedMotion }) {
  const cloudRef = useRef();
  const cloudMap = useLoader(THREE.TextureLoader, '/8k_earth_clouds.jpg');

  useFrame(() => {
    if (!reducedMotion && cloudRef.current) cloudRef.current.rotation.y += 0.0003;
  });

  return (
    <mesh ref={cloudRef} scale={1.01}>
      <sphereGeometry args={[planetScales.earth, 48, 48]} />
      <meshPhongMaterial map={cloudMap} transparent opacity={0.35} depthWrite={false} />
    </mesh>
  );
}

function Earth({ reducedMotion }) {
  const earthRef = useRef();
  const colorMap = useLoader(THREE.TextureLoader, '/2k_earth_daymap.jpg');
  const bumpMap = useLoader(THREE.TextureLoader, '/2k_earth_normal_map.jpg');

  useFrame(() => {
    if (!reducedMotion && earthRef.current) earthRef.current.rotation.y += 0.0002;
  });

  return (
    <mesh ref={earthRef} rotation={[-0.6, 8, 0]}>
      <sphereGeometry args={[planetScales.earth, 48, 48]} />
      <meshPhongMaterial map={colorMap} bumpMap={bumpMap} bumpScale={0.6} specular={new THREE.Color('grey')} shininess={5} />
    </mesh>
  );
}

function Scene({ reducedMotion }) {
  return (
    <>
      <PerspectiveCamera makeDefault fov={75} near={0.1} far={1000} position={[0, 0, 5]} />
      <Stars radius={50} depth={35} count={1400} factor={3} saturation={0} fade speed={0.35} />
      <ambientLight intensity={0.08} />
      <directionalLight position={[20, 15, 5]} intensity={3.5} color={0xfff3d0} />
      <pointLight position={[-4, 1, 3]} intensity={2} color={0x4f9dff} />
      <Moon reducedMotion={reducedMotion} />
      <Earth reducedMotion={reducedMotion} />
      <Clouds reducedMotion={reducedMotion} />
      <Atmosphere />
    </>
  );
}

export default function PlanetEarth() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="relative flex min-h-[62vh] w-full items-center justify-center overflow-hidden bg-[#020611] md:min-h-[72vh]" aria-label="Interactive Earth visual">
      <Canvas dpr={[1, 1.5]} frameloop={reducedMotion ? 'demand' : 'always'} fallback={<div className="px-6 text-center text-gray-300">Interactive Earth visuals are unavailable on this device.</div>}>
        <Suspense fallback={null}>
          <Scene reducedMotion={reducedMotion} />
        </Suspense>
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.55)_100%)]" aria-hidden="true" />
      <CCAttribution />
    </div>
  );
}
