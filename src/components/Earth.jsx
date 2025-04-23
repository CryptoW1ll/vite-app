import React, { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

const planetScales = {
  earth: 6371 / 3000,
  moon: 1737 / 12000,
};

const Earth = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(new THREE.Scene());
  const earthMeshRef = useRef(null);
  const moonMeshRef = useRef(null);
  const atmosphereRef = useRef(null);

  

  useEffect(() => {

    if (!mountRef.current) return;

    // Setup scene, camera, and renderer
    const scene = sceneRef.current;
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 5);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const sunLight = new THREE.DirectionalLight(0xffffff, 1);
    sunLight.position.set(20, 15, 5);
    scene.add(sunLight);

    // Create Earth and Moon
    const earthMesh = createEarth(scene);
    const moonMesh = createMoon(scene, earthMesh);
    const atmosphere = createAtmosphere(scene);

    earthMeshRef.current = earthMesh;
    moonMeshRef.current = moonMesh;
    atmosphereRef.current = atmosphere;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      //updateMoonPosition();
      updateEarthRotation();
      updateMoonRotation();
      renderer.render(scene, camera);
    };

    animate();

return () => {
    if (mountRef.current && renderer.domElement) 
    {
        mountRef.current.removeChild(renderer.domElement);
    }
    scene.clear();
    renderer.dispose();
  };
}, []);  

  function createEarth(scene) {
    const earthGeometry = new THREE.SphereGeometry(planetScales.earth, 64, 64);
    const earthMaterial = new THREE.MeshPhongMaterial({
      map: new THREE.TextureLoader().load("./RenderData.png"),
      bumpMap: new THREE.TextureLoader().load(".//earthbump.jpg"),
      bumpScale: 1,
      specularMap: new THREE.TextureLoader().load("./specularmap.jpg"),
      specular: new THREE.Color("grey"),
    });
    const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);

    // set rotation.y :earthMeshRef.current.rotation.y
    earthMesh.rotation.x = -0.6;
    earthMesh.rotation.y = 2;
    scene.add(earthMesh);
    return earthMesh;
  }

  function createMoon(scene, earthMesh) {
    const moonGeometry = new THREE.SphereGeometry(planetScales.moon, 64, 64);
    const moonMaterial = new THREE.MeshPhongMaterial({
      map: new THREE.TextureLoader().load("./moonmap.jpg"),
    });
    const moonMesh = new THREE.Mesh(moonGeometry, moonMaterial);
    moonMesh.position.set(3, 1, 2.3);
    scene.add(moonMesh);
    return moonMesh;
  }

  function createAtmosphere(scene) {
    const geometry = new THREE.SphereGeometry(planetScales.earth, 64, 64);
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
    const atmosphere = new THREE.Mesh(geometry, atmosphereMaterial);
    atmosphere.scale.set(1.3, 1.3, 1);
    scene.add(atmosphere);
}

  function updateMoonPosition() {
    if (!moonMeshRef.current || !earthMeshRef.current) return;
    
    //const moonAngle = Date.now() * 0.000002664;
    const moonAngle = Date.now() * 0.0001;
    const orbitRadius = 5;
    const moonX = Math.cos(moonAngle) * orbitRadius;
    const moonZ = Math.sin(moonAngle) * orbitRadius;
    moonMeshRef.current.position.set(
      earthMeshRef.current.position.x + moonX,
      earthMeshRef.current.position.y,
      earthMeshRef.current.position.z + moonZ
    );
  }

  function updateEarthRotation(){
    if (!earthMeshRef.current) return;
    earthMeshRef.current.rotation.y += 0.0001
  }
  function updateMoonRotation(){
    if (!moonMeshRef.current) return;
    moonMeshRef.current.rotation.y += 0.0001
  }

    // window.addEventListener('resize', () => {
    //     renderer.setSize(window.innerWidth, window.innerHeight);
    //     camera.aspect = window.innerWidth / window.innerHeight;
    //     camera.updateProjectionMatrix();
    // });
  

  return <div ref={mountRef} />;
};

export default Earth;
