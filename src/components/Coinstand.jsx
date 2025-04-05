import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import React, { useRef, useState, useEffect, Suspense } from 'react';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { Color } from "three"; //import * as THREE from 'three';
import * as THREE from 'three';
import { useErrorBoundary } from 'use-error-boundary';
import { PCFSoftShadowMap } from 'three';
import Coin from "./Coin.jsx";
import {ErrorFallback, LoadingFallback} from "./Coin.jsx"

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
  
// Synty Animated Character Test
function FBXModel({ modelPath, scale, position, rotation }) {
  const [model, setModel] = useState(null)
  const [error, setError] = useState(null)
  const group = useRef()
  const mixer = useRef()

  useEffect(() => {
    let isMounted = true;
    const loader = new FBXLoader();
    loader.load(
      modelPath,
      (fbx) => {
        if (!isMounted) return;
  
        console.log("Available Animations:", fbx.animations.map(a => a.name));
  
        const box = new THREE.Box3().setFromObject(fbx);
        const center = box.getCenter(new THREE.Vector3());
        fbx.position.set(-center.x, -center.y, -center.z);
  
        // fbx.traverse((child) => {
        //   if (child.isMesh) {
        //     child.material = child.material || new THREE.MeshStandardMaterial({
        //       color: 0xcccccc,
        //       roughness: 0.7,
        //       metalness: 0.1,
        //     });
        //     child.castShadow = true;
        //     child.receiveShadow = true;
        //   }
        // });

        // fbx.traverse((child) => {
        //   if (child.isMesh && child.name === "SM_Chr_Leader_Male_01_1") {
        //     console.log("Applying animation to:", child.name);
        //     mixer.current = new THREE.AnimationMixer(child);
        //     mixer.current.clipAction(fbx.animations[0]).play();
        //   }
        // });

        // fbx.traverse((child) => {
        //   if (child.isSkinnedMesh) {
        //     mixer.current = new THREE.AnimationMixer(child);
        //     const action = mixer.current.clipAction(fbx.animations[0]);  
        //     action.setEffectiveWeight(1.0);  
        //     action.play();
        //   }
        // });
  
        if (fbx.animations.length > 0) {
          const clip = THREE.AnimationClip.findByName(fbx.animations, "maximo.com") || fbx.animations[0];
          mixer.current = new THREE.AnimationMixer(fbx);
          mixer.current.clipAction(clip).play();
          //console.log("Playing: " , clip.name);
        }
  
        setModel(fbx);
      },
      undefined,
      (err) => isMounted && setError(err)
    );
  
    return () => {
      isMounted = false;
      if (mixer.current) mixer.current.stopAllAction();
    };
  }, [modelPath]);

  useFrame((_, delta) => mixer.current?.update(delta))

  if (error) return <ErrorFallback error={error} />
  if (!model) return null

  return (
    <group ref={group} scale={scale} position={position} rotation={rotation}>
      <primitive object={model} />
    </group>
  )
}



export default function Coinstand() {
  const { ErrorBoundary, didCatch, error } = useErrorBoundary();
  //const coinstand = "/models/coinstand.fbx";
  
  return didCatch ? (
    <ErrorFallback error={error} />
  ) : (
    <>
    <Canvas 
      fallback={<div>Sorry no WebGL supported!</div>}
      scene={{ background: new Color(0x000000) }} 
      camera={{ position: [0, 2, 8], fov: 45 }}
      shadows={{
        type: PCFSoftShadowMap,
        bias: -0.0001
      }}
    >
      <ambientLight intensity={0.2} />

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

      <spotLight 
              position={[-15, 15, 15]} 
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

      {/* <Stand
        modelPath="/models/Stand1.fbx"
        position={[0, -0.7, 0]}
        receiveShadow
        scale={0.03}
        rotation={[0, 0, 0]}
        /> */}

      <StandModel
          modelPath="/models/Stand1.fbx"
          position={[0, -0.7, 0]}
          scale={0.03}
          rotation={[0, 0, 0]}
          //hovered={hovered}
          //active={active}
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
            modelPath="/models/Coin_asd.fbx" 
            position={[-1.3, 0, 0]} 
            scale={0.009} 
        />      
      <Coin 
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

        {/* <FBXModel 
          modelPath="/models/SM_Chr_Leader_Male_01.fbx"
          scale={0.01}
          position={[-4,-1, 0]}
          rotation={[0, 0, 0]}
          castShadow
        /> */}

      <FBXModel 
          modelPath="/models/Salute.fbx"
          scale={0.01}
          position={[-2.2,-1, 2.6]}
          rotation={[0, 13.5, 0]}
          castShadow
              />
    </Canvas>

    {/* <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translateX(-50%)',
                color: 'white',
                fontSize: '2rem',
                zIndex: 1
            }}>
                <div className="flex flex-col items-center justify-center h-full">
                  <h1 className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-black sm:text-5xl"> Meshy AI</h1>
                </div>
      </div> */}
    </>
  );
}