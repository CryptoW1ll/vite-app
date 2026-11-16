import { Canvas, useFrame } from '@react-three/fiber';
import { Sparkles } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import Coin, { LoadingFallback } from './Coin.jsx';

function Pedestal() {
  return (
    <group position={[0, -1.65, 0]}>
      <mesh receiveShadow>
        <boxGeometry args={[4.8, 0.3, 2.6]} />
        <meshStandardMaterial color="#172033" metalness={0.65} roughness={0.28} />
      </mesh>
      <mesh position={[0, 0.25, 0]} receiveShadow>
        <boxGeometry args={[4.2, 0.18, 2.1]} />
        <meshStandardMaterial color="#29415b" metalness={0.5} roughness={0.3} />
      </mesh>
    </group>
  );
}

function SpotlightRig() {
  const keyLight = useRef();
  const rimLight = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    keyLight.current?.position.set(Math.sin(time * 0.55) * 5, 6, 4 + Math.cos(time * 0.55) * 3);
    rimLight.current?.position.set(Math.cos(time * 0.4) * 4, 2.5, -4 + Math.sin(time * 0.4) * 2);
  });

  return (
    <>
      <spotLight ref={keyLight} position={[5, 6, 7]} angle={0.38} penumbra={0.75} intensity={120} color="#fff1c2" castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
      <spotLight ref={rimLight} position={[-4, 3, -4]} angle={0.5} penumbra={1} intensity={90} color="#4f9dff" />
      <pointLight position={[0, 1.5, 3]} intensity={24} color="#ffd27a" />
      <Sparkles count={70} scale={[5, 3.5, 4]} size={1.2} speed={0.25} color="#b9d8ff" />
    </>
  );
}

const coins = [
  { modelPath: '/models/Coin_911.fbx', position: [-1.3, 1, -1] },
  { modelPath: '/models/Veteran_Coin.fbx', position: [0, 1, -1] },
  { modelPath: '/models/GCS_Coin.fbx', position: [1.3, 1, -1] },
  { modelPath: '/models/Coin_asd.fbx', position: [-1.3, 0, 0] },
  { modelPath: '/models/Coin_smo.fbx', position: [0, 0, 0] },
  { modelPath: '/models/Coin_asmo.fbx', position: [1.3, 0, 0] },
  { modelPath: '/models/cn_coin.fbx', position: [-1.3, -0.8, 1.2] },
  { modelPath: '/models/Coin_nosu.fbx', position: [0, -0.8, 1.2] },
  { modelPath: '/models/Coin_21Infantry.fbx', position: [1.3, -0.8, 1.2] },
];

export default function Coinstand() {
  return (
    <div className="relative h-[440px] w-full overflow-hidden rounded-xl border border-gray-700 bg-[#050b14]" aria-label="Interactive challenge coin collection">
      <Canvas
        fallback={<div className="flex h-full items-center justify-center px-6 text-center text-gray-300">The coin collection needs WebGL to load.</div>}
        camera={{ position: [0, 1, 8], fov: 45 }}
        dpr={[1, 1.5]}
        shadows
      >
        <color attach="background" args={['#050b14']} />
        <ambientLight intensity={0.2} />
        <SpotlightRig />
        <Suspense fallback={<LoadingFallback />}>
          <Pedestal />
          {coins.map((coin) => <Coin key={coin.modelPath} {...coin} scale={0.009} />)}
        </Suspense>
      </Canvas>
      <p className="pointer-events-none absolute bottom-3 left-0 right-0 text-center text-xs text-gray-400">Select a coin to inspect it</p>
    </div>
  );
}
