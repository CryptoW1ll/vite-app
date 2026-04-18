import React, { useEffect } from 'react';
import Footer from './Footer';
import PlanetEarth from './PlanetEarth.jsx';
import Echelon from './Echelon.jsx';

function Homepage() {
    useEffect(() => {
        console.log('Google Tag Manager can be initialized here.');
    }, []);

    return (
        <div className="flex flex-col min-h-screen bg-canvas text-primary">
            <main className="flex-grow relative">
                <PlanetEarth />
                <Echelon />
            </main>
            <Footer />
        </div>
    );
}

export default Homepage;
