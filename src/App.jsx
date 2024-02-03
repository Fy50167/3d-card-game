import { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';

export default function App() {
    return (
        <section className='w-full h-screen relative'>
            <Canvas
                shadows
                camera={{
                    position: [0, 0, 0],
                    fov: 70,
                }}
            >
                <color attach='background' args={['lightblue']} />
            </Canvas>
        </section>
    );
}
