import React from "react";
import PlanetEarth from "./PlanetEarth";
import Earth from "./Earth";
import Echelon from "./Echelon";


export default function Homepage() {

    return(
        <>
          {/* <div className="flex flex-col items-center justify-center px-8 pt-10 pb-12 sm:px-10 lg:pt-16 lg:pb-24">
              <h1 className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
                  Echelon Interactive Studio
              </h1>

              <div className="px-8 sm:px-10 sm:pt-10">
                  <h2 className="mt-2 max-w-lg text-lg text-gray-600 sm:text-center">
                      <span className="text-2xl font-semibold text-balance">EAT, SLEEP, CODE, REPEAT</span>
                  </h2>
              </div>

              <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                  <img className="w-1/4 h-1/4 max-lg:max-w-xs" src="./ESLogo.png" alt="" />
              </div>
          </div> */}
            <div className="relative h-screen w-screen bg-black">
              <PlanetEarth />
            </div>
            {/* <Earth /> */}
            {/* <Echelon /> */}
        </>
    );
}
