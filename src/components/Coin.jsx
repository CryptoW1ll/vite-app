import { Suspense, useState } from 'react';
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
  const fbx = useLoader(FBXLoader, modelPath).clone();
  
  return (
    <group {...props}>
      <primitive 
        object={fbx} 
        // scale={active ? [1.2, 1.2, 1.2] : [1, 1, 1]}
        scale={active ? [1.4, 1.4, 1.4] : [1, 1, 1]}
        rotation={active ? [0,380, 0] : [0 , 0, 0]}
        onPointerOver={props.onPointerOver}
        onPointerOut={props.onPointerOut}
        onClick={props.onClick}
      />
      {hovered && (
        <mesh position={[0, 0.5, 0]}>
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshStandardMaterial color="hotpink" transparent opacity={0.5} />
        </mesh>
      )}
    </group>
  );
}

export function LoadingFallback() {
  return (
    <mesh>
      <boxGeometry args={[0.5, 0.5, 0.5]} />
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