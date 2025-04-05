import React from "react";
import PlanetEarth from "./PlanetEarth";


export default function Homepage() {

    return(
        <>
        {/* <RecipeSearch/> */}
        {/* <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
            <h1
                style={{
                position: "absolute",
                top: "10%",
                left: "50%",
                transform: "translateX(-50%)",
                color: "white",
                fontSize: "2rem",
                zIndex: 10, // Ensures text appears above canvas
                }}>
                Echelon Interactive Studio
            </h1> */}
        <div>
            {/* <h1 style={{ color: "white", fontSize: "2rem", textAlign: "center", zIndex: 10}}>
                Echelon Interactive Studio
            </h1> */}
            <PlanetEarth />
        </div>
        
        {/* <Earth/> */}
        {/* <Incremeter/> */}
        {/* <Slideshow /> */}
        </>
    );
}
