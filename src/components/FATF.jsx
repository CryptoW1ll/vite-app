//import React from "react";

export default function FATF() {
  return (
        // <div className="min-h-screen flex flex-col items-center justify-centerp-4">
        <div> 
            <p className="text-3xl font-bold mb-4 pt-4">
                <strong>Fugitive Apprehension Task Force</strong>
            </p>

        <div className="grid grid-cols-5 grid-rows-5">
            <div className="col-span-5 border-2 border-gray-500 rounded-lg ">
                <strong>Spare Row for Activities</strong>
            </div>
            <div className="col-span-3 row-span-4 row-start-2 border-2 border-gray-500 p-4 rounded-lg">

               <div className="carousel w-full">
                    <div id="item1" className="carousel-item w-full">
                        <img
                        src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
                        className="w-full" />
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <img
                        src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                        className="w-full" />
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <img
                        src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                        className="w-full" />
                    </div>
                    <div id="item4" className="carousel-item w-full">
                        <img
                        src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                        className="w-full" />
                    </div>
                    </div>
                    <div className="flex w-full justify-center gap-2 py-2">
                        <a href="#item1" className="btn btn-xs">1</a>
                        <a href="#item2" className="btn btn-xs">2</a>
                        <a href="#item3" className="btn btn-xs">3</a>
                        <a href="#item4" className="btn btn-xs">4</a>
                    </div> 
            </div>
            <div className="col-span-2 row-span-2 col-start-4 row-start-2 ">
                <img
                    // className="w-1/2 h-1/2 max-lg:max-w-xs"
                    className=" border-2 border-gray-500 rounded-lg"
                    src="./images/Project_FugitiveApprehensionTaskForce(WIP).png"
                    alt="FATF Logo"
                />
            </div>
            <div className="col-span-2 row-span-2 col-start-4 row-start-4 border-2 border-gray-500 p-4 rounded-lg">
                <p>
                    The Fugitive Apprehension Task Force (FATF) is a specialized law enforcement unit dedicated to locating and apprehending fugitives who are wanted for serious crimes. The task force collaborates with local, state, and federal agencies to track down individuals who have evaded capture, ensuring that justice is served and public safety is maintained. Through advanced investigative techniques, intelligence sharing, and community engagement, the FATF plays a crucial role in reducing crime and enhancing the effectiveness of law enforcement efforts.
                    <br />
                </p>
            </div>
            
        </div>
 
            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                    <h1>Section 1</h1>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
                    <div>
                        <div className="max-w-lg md:max-w-none">
                        <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </h2>

                        <p className="mt-4 text-gray-700">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloremque saepe
                            architecto maiores repudiandae amet perferendis repellendus, reprehenderit voluptas
                            sequi.
                        </p>
                        </div>
                    </div>

                    <div>
                        <img
                        // src="https://images.unsplash.com/photo-1731690415686-e68f78e2b5bd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        src="./images/Agents.png"
                        className="rounded"
                        alt=""
                        />
                    </div>
                    </div>
                </div>
            </section>
        </div>
    
    );
}