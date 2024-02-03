import { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Experience from './components/Experience';

export default function App() {
    return (
        <section className='w-full h-screen relative'>
            <Canvas shadows camera={{ position: [2, 2, 2], fov: 70 }}>
                <color attach='background' args={['lightblue']} />
                <Experience />
            </Canvas>
        </section>
    );
}
