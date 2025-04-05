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

    // textures
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
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>

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
          aspect={window.innerWidth / window.innerHeight} 
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

      <div style={{
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
                    {/* <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Performance</p> */}
                    <p className="mt-2 max-w-lg text-xlg text-gray-600 sm:text-center md:text-center max-lg:text-center">
                      EAT, SLEEP, CODE, REPEAT
                    </p>
                  </div>
                  <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                    <img
                      // className="max-lg:max-w-xs"
                      className="w-1/2 h-1/2 max-lg:max-w-xs"
                      // src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-performance.png"
                      // src="./images/Logo.png"
                      src="./ESLogo.png"
                      alt=""
                    />
                  </div>
              </div>
      </div>

      <div className="bg-gray-50 py-24 sm:py-32">
        {/* <h1 className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl"> Echelon Interactive Studio</h1> */}
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-center text-base/7 font-semibold text-indigo-600">Deploy faster</h2>
          <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl">
            Everything you need to deploy your app
          </p>
          <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                    Mobile friendly
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                  </p>
                </div>
                <div className="@container relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                  <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                    <img
                      className="size-full object-cover object-top"
                      src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-mobile-friendly.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-l-[2rem]"></div>
            </div>
            <div className="relative max-lg:row-start-1">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Performance</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit maiores impedit.
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                  <img
                    className="w-full max-lg:max-w-xs"
                    src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-performance.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-t-[2rem]"></div>
            </div>
            <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
              <div className="absolute inset-px rounded-lg bg-white"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Security</p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi.
                  </p>
                </div>
                <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                  <img
                    className="h-[min(152px,40cqw)] object-cover"
                    src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-security.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5"></div>
            </div>
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                    Powerful APIs
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget sem sodales gravida.
                  </p>
                </div>
                <div className="relative min-h-[30rem] w-full grow">
                  <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                    <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                      <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                        <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                          NotificationSetting.jsx
                        </div>
                        <div className="border-r border-gray-600/10 px-4 py-2">App.jsx</div>
                      </div>
                    </div>
                    <div className="px-6 pt-6 pb-14">{/* Your code example */}</div>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            </div>
          </div>
        </div>
      </div>

    </div>
    </>
  );
}
