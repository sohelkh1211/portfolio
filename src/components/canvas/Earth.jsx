import React, { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from '../Loader';

const Earth = () => {
    const earth = useGLTF('./planet/scene.gltf');
    const useMediaQuery = (query) => {
        const [matches,setMatches] = useState(false);

        useEffect(() => {
            const media = window.matchMedia(query);
            if(media.matches !== matches){
                setMatches(media.matches);
            }
    
            const listener = () => {
                setMatches(media.matches);
            }
    
            window.addEventListener('change',listener);
            return () => {
                window.removeEventListener('change',listener);
            }
        }, [matches,query]);
        return matches;
    }
    const isLarge = useMediaQuery("(min-width: 1024px)");
    const isMedium = useMediaQuery("(min-width: 915px)");
    console.log(isMedium);
    const isSmall = useMediaQuery("(min-width: 650px)");

    return (
        <primitive object={earth.scene} scale={`${isLarge ? 3.2 : isMedium ? 2.5 : 0 }`} position-y={0} rotation-y={0} />
    )
}

const EarthCanvas = () => {
    return (
        <Canvas
            shadows
            frameloop='demand'
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true }}
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [-4, 3, 6],
            }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    autoRotate
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Earth />

                <Preload all />
            </Suspense>
        </Canvas>
    )
}

export default EarthCanvas