import React, { lazy, Suspense } from 'react';
import Echelon from './Echelon.jsx';

const PlanetEarth = lazy(() => import('./PlanetEarth.jsx'));



function Homepage() {
    return (
        <div className="flex flex-col min-h-screen bg-black">
            <main className="flex-grow relative">
                <Suspense fallback={<div className="flex min-h-[55vh] items-center justify-center bg-black text-gray-300">Loading interactive visual…</div>}>
                    <PlanetEarth />
                </Suspense>
                <Echelon/>
                
            </main>
        </div>
    );
} export default Homepage;
