import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber";
import React, { useRef, useState, Suspense } from 'react';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { useErrorBoundary } from 'use-error-boundary';
import { PCFSoftShadowMap } from 'three';
import Coin from "./Coin.jsx";
import {ErrorFallback, LoadingFallback} from "./Coin.jsx"

// D.R.Y Violation: Found in Coin.jsx
/*function ErrorFallback({ error }) {
  return (
    <div>
      <h2>An error occurred:</h2>
      <p>{error.message}</p>
    </div>
  );
}*/

// D.R.Y Violation: Found in Coin.jsx
/*function LoadingFallback() {
    return (
      <mesh>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color="gray" />
      </mesh>
    );
  }*/


function Box(props) {
  const meshRef = useRef();
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  
  // useFrame((state, delta) => (meshRef.current.rotation.x += delta));
  
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
      castShadow>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
}

// function Shadows(props) {
//   const { viewport } = useThree();
//   return (
//     <mesh receiveShadow scale={[viewport.width, viewport.height, 1]} {...props}>
//       <planeGeometry />
//       <shadowMaterial transparent opacity={0.5} />
//     </mesh>
//   );
// }

function Stand(props) {
  const { ErrorBoundary } = useErrorBoundary();
  const {
    modelPath,
    position = [0, 0, 0],
    scale = 1,
    rotation = [0, 0, 0],
    retryCount = 0
  } = props;

  const [key, setKey] = useState(retryCount);
  //const [hovered, setHover] = useState(false);
  //const [active, setActive] = useState(false);

  if (!modelPath) {
    console.error("Coin component requires a modelPath prop");
    return null;
  }

  function StandModel({ modelPath, hovered, active, ...props }) {
    const fbx = useLoader(FBXLoader, modelPath).clone();
    
    return (
      <group {...props}>
        <primitive 
          object={fbx} 
          scale={active ? [1.2, 1.2, 1.2] : [1, 1, 1]}
          //onPointerOver={props.onPointerOver}
          //onPointerOut={props.onPointerOut}
          //onClick={props.onClick}
        />
        {/* {hovered && (
          <mesh position={[0, 0.5, 0]}>
            <sphereGeometry args={[0.3, 16, 16]} />
            <meshStandardMaterial color="hotpink" transparent opacity={0.5} />
          </mesh>
        )} */}
      </group>
    );
  }

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => setKey(prev => prev + 1)}
      resetKeys={[key]}
    >
      <Suspense fallback={<LoadingFallback />}>
        <StandModel
          key={key}
          modelPath={modelPath}
          position={position}
          scale={scale}
          rotation={rotation}
          //hovered={hovered}
          //active={active}
        />
      </Suspense>
    </ErrorBoundary>
  );
}

export default function Coinstand() {
  const { ErrorBoundary, didCatch, error } = useErrorBoundary();
  //const coinstand = "/models/coinstand.fbx";
  
  return didCatch ? (
    <ErrorFallback error={error} />
  ) : (
    <Canvas 
      fallback={<div>Sorry no WebGL supported!</div>}
      camera={{ position: [0, 2, 8], fov: 45 }}
      shadows={{
        type: PCFSoftShadowMap,
        bias: -0.0001
      }}
    >
      <ambientLight intensity={1} />
      <spotLight 
        position={[15, 15, 15]} 
        angle={0.15} 
        penumbra={1} 
        decay={0} 
        intensity={Math.PI}
        castShadow // Enable shadow casting
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      
      <mesh 
        rotation={[-Math.PI/2, 0, 0]} 
        position={[0, -2, 0]} 
        receiveShadow
      >
        <planeGeometry args={[20 , 20]} />
        <meshStandardMaterial color="white" />
      </mesh>

      <Stand
        modelPath="/models/Stand1.fbx"
        position={[0, -0.7, 0]}
        scale={0.03}
        rotation={[0, 0, 0]}
        />

        {/*Top Row  */}
        <Coin 
            modelPath="/models/Coin_911.fbx" 
            position={[-1.3, 1, -1]}
            scale={0.009}
        />      
      <Coin 
            modelPath="/models/Veteran_Coin.fbx" 
            position={[0, 1, -1]} 
            scale={0.009} 
        />
      <Coin 
            modelPath="/models/GCS_Coin.fbx" 
            position={[1.3, 1, -1]} 
            scale={0.009} 
        />
      

        {/*Middle Row  */}
        <Coin 
            // modelPath="/models/SM_Icon_Coin_01.fbx" 
            modelPath="/models/Coin_asd.fbx" 
            position={[-1.3, 0, 0]} 
            scale={0.009} 
        />      
      <Coin 
            // modelPath="/models/SM_Icon_Coin_01.fbx" 
            modelPath="/models/Coin_smo.fbx" 
            position={[0, 0, 0]} 
            scale={0.009} 
        />
      <Coin 
            modelPath="/models/Coin_asmo.fbx" 
            position={[1.3, 0, 0]} 
            scale={0.009} 
        />

        {/*Front Row  */}
        <Coin 
            modelPath="/models/Coin_otago.fbx" 
            position={[-1.3, -.7, 1.8]} 
            scale={0.009} 
        />      
      <Coin 
            modelPath="/models/Coin_nosu.fbx" 
            position={[0, -.7, 1.8]} 
            scale={0.009} 
        />
      <Coin 
            modelPath="/models/Coin_21Infantry.fbx" 
            position={[1.3, -.7, 1.8]} 
            scale={0.009} 
        />
      
    </Canvas>
  );
}

    {/* <Box position={[-1, 0, 0]} />
      <Box position={[0, 0, 0]} />
      <Box position={[1, 0, 0]} />
      <Box position={[-1, -1, 0]} />
      <Box position={[0, -1, 0]} />
      <Box position={[1, -1, 0]} />
      
      <Box position={[-1, 1, 0]} />
      <Box position={[0, 1, 0]} />
      <Box position={[1, 1, 0]} /> */}