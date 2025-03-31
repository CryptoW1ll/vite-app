import {extend, useFrame } from '@react-three/fiber';
import { Suspense, useState, useRef, useEffect } from 'react';
import { useLoader } from '@react-three/fiber';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { useErrorBoundary } from 'use-error-boundary';

export function ErrorFallback({ error }) {
  return (
    <div>
      <h2>An error occurred:</h2>
      <p>{error.message}</p>
    </div>
  );
}

function CoinModel({ modelPath, hovered, active, ...props }) {
  //const fbx = useLoader(FBXLoader, modelPath).clone();

  const groupRef = useRef();
  const targetRotation = useRef(0);
  const flipSpeed = useRef(0);

  const autoRotate = useRef(true);

   // Reset animation when active changes
   useEffect(() => {
    if (active) {
      //targetRotation.current += Math.PI * 2; // (360°)
      targetRotation.current += Math.PI;       // (180°)
      flipSpeed.current = 0.05; 
    }
  }, [active]);

  useFrame(() => {

    if (!groupRef.current) return;

    if (groupRef.current && flipSpeed.current > 0) {
      groupRef.current.rotation.y += flipSpeed.current;
      
      // Slow down as we approach target
      const remaining = targetRotation.current - groupRef.current.rotation.y;
      flipSpeed.current = Math.min(flipSpeed.current, remaining * 0.2);
      
      if (Math.abs(remaining) < 0.01) {
        groupRef.current.rotation.y = targetRotation.current % (Math.PI * 2);
        flipSpeed.current = 0;
      }
    }

    // Hover effect
    // if (hovered) 
    // {
    //   groupRef.current.rotation.z = Math.sin(Date.now() * 0.01) * 0.1;
    // } else {
    //   groupRef.current.rotation.z = 0;
    // }
  });

  return (
    <group ref={groupRef} rotation={[Math.PI, 0, 0]} {...props}>
      <primitive object={useLoader(FBXLoader, modelPath).clone()} />
      {hovered && (
        <mesh position={[0, 0.5, 0]}>
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshStandardMaterial color="hotpink" transparent opacity={0.5} />
        </mesh>
      )}
    </group>
  );

  // return (
  //   <group ref={groupRef} rotation={[Math.PI, 0, 0]} {...props}>
  //     <primitive object={useLoader(FBXLoader, modelPath).clone()} />
  //   </group>
  // );

  
  // return (
  //   <group {...props}>
  //     <primitive 
  //       object={fbx} 
  //       // scale={active ? [1.2, 1.2, 1.2] : [1, 1, 1]}
  //       scale={active ? [1.4, 1.4, 1.4] : [1, 1, 1]}
  //       rotation={[Math.PI, 0, 0]} // 180 degrees around X-axis
  //       onPointerOver={props.onPointerOver}
  //       onPointerOut={props.onPointerOut}
  //       onClick={props.onClick}
  //     />
  //     {hovered && (
  //       <mesh position={[0, 0.5, 0]}>
  //         <sphereGeometry args={[0.3, 16, 16]} />
  //         <meshStandardMaterial color="hotpink" transparent opacity={0.5} />
  //       </mesh>
  //     )}
  //   </group>
  // );
}

export function LoadingFallback() {
  return (
    <mesh>
      <boxGeometry args={[0.1, 0.1, 0.1]} />
      <meshStandardMaterial color="gray" />
    </mesh>
  );
}

export default function Coin(props) {
  const { ErrorBoundary } = useErrorBoundary();
  const {
    modelPath,
    position = [0, 0, 0],
    scale = 1,
    rotation = [0, 0, 0],
    retryCount = 0
  } = props;

  const [key, setKey] = useState(retryCount);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  if (!modelPath) {
    console.error("Coin component requires a modelPath prop");
    return null;
  }

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => setKey(prev => prev + 1)}
      resetKeys={[key]}
    >
      <Suspense fallback={<LoadingFallback />}>
        <CoinModel
          key={key}
          modelPath={modelPath}
          position={position}
          scale={scale}
          rotation={rotation}
          hovered={hovered}
          active={active}
          onClick={() => setActive(!active)}
          onPointerOver={() => setHover(true)}
          onPointerOut={() => setHover(false)}
        />
      </Suspense>
    </ErrorBoundary>
  );
}