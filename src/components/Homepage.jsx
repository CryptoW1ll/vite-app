import React from "react";
import PlanetEarth from "./PlanetEarth";


export default function Homepage() {

    return(
        <>

        <div className="flex flex-col items-center justify-center px-8 pt-10 pb-12 sm:px-10 lg:pt-16 lg:pb-24">
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
        </div>

            <PlanetEarth />


      <div className="bg-gray-50 py-24 sm:py-32">
        {/* <h1 className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl"> Echelon Interactive Studio</h1> */}
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-center text-base/7 font-semibold text-indigo-600">Deploy faster</h2>
          <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl">
            Everything you need to deploy your app
          </p>
          
          <div className="mt-5 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-1">
            <div className="relative lg:row-span-2">
              {/* <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div> */}


              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                    Echelon
                  </p>

                  <div className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    The name Echelon reflects both its military and organisational origins. 
                    In a military context, it signifies levels of command or formation of units and in an organisational context, 
                    it represents ranks or levels within a system or organisation.
                    
                    Serving the people of New Zealand was and is the greatest privilege of my life.

                    My service installed values including Commitment, Courage, Comradeship, and Integrity.
                    Military serviceman instills a high level of discipline, leadership, and a fresh perspective to game development, 
                    all of which influence the studio's innovative approach to creating compelling and immersive gaming experiences.

                    
                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                        Vision and Goals
                    </p>
                    ES envisions building a small but dedicated team in Invercargill capable of delivering multiple game projects annually, with the profits funnelled into larger-scale, long-term projects. The studio will embrace cutting-edge technologies such as Artificial Intelligence (AI), cloud computing, and automation to enhance development efficiency and creativity, streamlined business processes to allow the team to focus on creating fun and engaging games.
                    By 2026, ES aims to:
                    <ul>
                    <li>Establish consistent revenue streams</li>
                    <li>Implement scalable operational systems to support growth</li>
                    <li>Expand our portfolio to include Augmented Reality (AR) </li>
                    <ul>
                        <li>Mixed Reality (MR)</li>
                        <li>Virtual Reality (VR)</li>
                        <li>Extended Reality (XR) experiences, making these technologies accessible to a broader audience.</li>
                    </ul>
                    </ul>
                  </div>
                </div>
                <div className="@container relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                  {/* <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                    <img
                      className="size-full object-cover object-top"
                      src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-mobile-friendly.png"
                      alt=""
                    />
                  </div> */}
                </div>
              </div>

              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-l-[2rem]"></div>
            </div>

            <div className="relative max-lg:row-start-1">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Our Mission</p>
                  <div className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Echelon Interactive Studio aims to establish a thriving game development studio in the 216, Invercargill, New Zealand, 
                    to provide an option for local software developers and game designers live and work in the region.
                    
                        <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Primary Objectives</p>
                    Develop and publish engaging games for PC, Android, and iOS platforms.
                    Utilise cutting-edge technologies to enhance game development processes.
                    Support local talent by providing job opportunities and mentorship.
                    Contribute to the local economy by establishing a sustainable business model.
                    Collaborate with the New Zealand Defence Force to develop software and tools for frontline operations.
                    Promote local culture and history through innovative gaming experiences.
                    Inspire and educate disadvantaged youth in technology and game development.

                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Long-Term Objectives</p>
                    Publish a virtual reality (VR) experience of Invercargill’s iconic water tower, celebrating local culture and history 
                    through cutting-edge technology.
                    Introduce augmented reality (AR), mixed reality (MR), and extended reality (XR) experiences within the next five years.
                  </div>
                </div>
                {/* <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                  <img
                    className="w-full max-lg:max-w-xs"
                    src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-performance.png"
                    alt=""
                  />
                </div> */}
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-t-[2rem]"></div>
            </div>

            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                    Powerful APIs
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget sem sodales gravida.
                  </p>
                </div>
                <div className="relative min-h-[30rem] w-full grow">
                  <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                    <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                      <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                        <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                          NotificationSetting.jsx
                        </div>
                        <div className="border-r border-gray-600/10 px-4 py-2">App.jsx</div>
                      </div>
                    </div>
                    <div className="px-6 pt-6 pb-14">{/* Your code example */}
                    <p className="">Echelon Interactive Studio is committed to fostering a culture of continuous learning and improvement, vowing to stay updated with 
                        the latest industry trends and technologies.<br></br> 
                        {/* This commitment to growth will enhance the skills and capabilities ensuring we're at the forefront of game development innovation. */}
                       Echelon Interactive Studio aims to create a dynamic and disciplined work environment that encourages creativity, collaboration, and excellence in game development.
                    </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            </div>
          </div>
        </div>
      </div>

        
        </>
    );
}
