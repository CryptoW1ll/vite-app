import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import PlanetEarth from './PlanetEarth.jsx';
import TagManager from 'react-gtm-module';



function Homepage() {
    useEffect(() => {
        TagManager.initialize({ gtmId: 'GTM-TKLPNP4W' });
      }, []);
    return (
        <div className="flex flex-col min-h-screen bg-black">
            <main className="flex-grow relative">
                <PlanetEarth />
                {/* <CCAttribution/> */}
                
                {/* Test URLs still accessible:
                    /kick-integration - Kick OAuth Test
                    /backend-test - Backend Test
                */}
            </main>
            <Footer />
        </div>
    );
} export default Homepage;
