import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";


const planetScales = {
    earth: 6371 / 3000,
    moon: 1737 / 12000,
  };

const Moon = () => {
    const moonRef = useRef();
    const moonmap = useLoader(THREE.TextureLoader, "./texture/moonmap.jpg");

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

const Earth = () => {
  const earthRef = useRef();

   // Load textures
   const colorMap = useLoader(THREE.TextureLoader, "./texture/RenderData.png");
   const bumpMap = useLoader(THREE.TextureLoader, "./texture/earthbump.jpg");
   const specularMap = useLoader(THREE.TextureLoader, "./texture/specularmap.jpg");
 

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
        shininess={7}
      />
    </mesh>
  );
};


export default function PlanetEarth() {

  return (
    <>
    {/* <div style={{ position: 'relative', width: '100vw', height: '100vh' }}> */}
    <div>

      <Canvas style={{
              //position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 0,
              pointerEvents: "none", // allows clicks to pass through
            }}

            scene={{ background: new THREE.Color(0x000000) }}> 

        <PerspectiveCamera 
          makeDefault 
          fov={75} 
          near={0.1} 
          far={1000} 
          position={[0, 0, 5]} 
        />
        <ambientLight intensity={0} />
        {/* <directionalLight 
          position={[20, 15, 5]} 
          intensity={3} 
          color={0xffffff}/> */}

          <directionalLight
              position={[20, 15, 5]}
              intensity={3}
              color={0xffffff}
              castShadow
              shadow-mapSize-width={2048}  // Higher resolution for better shadows
              shadow-mapSize-height={2048}
              shadow-camera-near={0.5}
              shadow-camera-far={50}
              shadow-camera-left={-30}   // Widen the light's spread
              shadow-camera-right={30}
              shadow-camera-top={30}
              shadow-camera-bottom={-30}
          />
        <Moon/>
        <Earth />
        <Atmosphere/>
      </Canvas>

      {/* <div style={{
                position: 'absolute',
                top: '10%',
                left: '50%',
                transform: 'translateX(-50%)',
                color: 'white',
                fontSize: '2rem',
                zIndex: 1
            }}>
                <div className="flex flex-col items-center justify-center h-full">
                  <h1 className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl"> Echelon Interactive Studio</h1>
                </div>
                
                <div className="flex h-full flex-col items-center justify-center">
                  <div className="px-8 pt-8 sm:px-10 sm:pt-10 ">
                    <p className="mt-2 max-w-lg text-xlg text-gray-600 sm:text-center md:text-center max-lg:text-center">
                      EAT, SLEEP, CODE, REPEAT
                    </p>
                  </div>
                  <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                    <img
                      className="w-1/2 h-1/2 max-lg:max-w-xs"
                      src="./ESLogo.png"
                      alt=""
                    />
                  </div>
              </div>
      </div> */}

      

      
    </div>
    </>
  );
}
