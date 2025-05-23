import * as THREE from "three";
import { Color } from "three";
import React, { useEffect } from "react";
import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

function ImportModel({ modelPath, position, scale, rotation, ...props }) {
    const fbx = useLoader(FBXLoader, modelPath, (loader) => {
        loader.setPath("/models/");
    });

    return (
        <group position={position} scale={scale} rotation={rotation} {...props}>
            <primitive object={fbx} />
        </group>
    );
}

function SceneSetup() {
    const { scene } = useThree();
    useEffect(() => {
        scene.background = new Color(0x000000); // Dark blue to resemble the sea
    }, [scene]);
    return null;
}

export default function LighthouseScene() {
    return (
        <div className="h-screen w-screen flex items-center justify-center relative">
              <Canvas className="w-full h-full" style={{ pointerEvents: "none" }} camera={{ position: [0, 50, 200], fov: 75, near:0.1, far:2000 }}>
        {/* <Canvas camera={{ position: [0, 50, 200], fov: 75, near:0.1, far:2000 }} >*/}
                 
        
            <SceneSetup />
            <ambientLight intensity={0.1} />
            <directionalLight 
                position={[10, 20, 10]} 
                intensity={0.8} 
            />

            {/* Lighthouse in bottom-left */}
            <ImportModel
                modelPath="SM_Bld_Lighthouse_01.fbx"
                position={[-250, -150, 0]}
                scale={[0.1, 0.1, 0.1]}
                rotation={[0, 0, 0]}
            />

            {/* Ship on the horizon */}
            <ImportModel
                modelPath="SM_Prop_Ship_01.fbx"
                position={[100, 10, -1750]}
                scale={[0.08, 0.08, 0.08]}
                rotation={[0, -20, 0]}
            />
        </Canvas>
        </div>
    );
}
