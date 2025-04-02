import React from "react";
import Coinstand from "./Coinstand";
import '../App.css';

export default function About() {
    return (

        <div className="app-container">

            <div className="scene-container relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8" id="">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">About Me</h1>
                <p> Hi, I'm <strong>Will Fowlds</strong>, a <strong>Developer</strong> with a passion for <strong>Game Development</strong>.
                    With a background in <strong>C#, Unity Engine</strong>, I love creating <strong>unique gaming experiences.</strong>.</p>
            </div>
            {/* <div className="scene-container" id="">
                <Coinstand/>
            </div> */}

            {/* Experience Section */}
            <div className="scene-container relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8 pointer-events-auto" id="">
                <h2 className="text-2xl font-semibold mb-4">Experience</h2>
                <p>A brief career overview or relevant experience. Mention key projects, achievements, or skills.</p>

                <h3>Military</h3>

                <h3>Education</h3>
                <p>2021: Level 4 Certificate in Small Business Management at the Southern Institute of Technology</p>
                <p>2022: Level 5, 6 papers from a Software Engineering Degree at Media Design School</p>
                <p>2023: First year student in Bachelors of Information Technology at the Southern Institute of Technology</p>
                <p>2024: Second year student in Bachelors of Information Technology at the Southern Institute of Technology</p>
                <p>2025: Third year student in Bachelors of Information Technology at the Southern Institute of Technology</p>
                <Coinstand/>
            </div>

            <div className="scene-container relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8" id="">
                <h2 className="text-2xl font-semibold mb-4">Skills and Tools</h2>
                <ul className="list-disc ml-5">
                    <li>Technology 1</li>
                    <li>Technology 2</li>
                    <li>Soft Skill 1</li>
                </ul>            
            </div>

            <div className="scene-container relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8" id="">
                <h2 className="text-2xl font-semibold mb-4">Interests and Hobbies</h2>
                <p>A short section about hobbies, interests, or what drives you. Helps visitors connect with you on a personal level.</p>           
            </div>

            <div className="scene-container relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8" id="">

                <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
                <p>
                    Interested in working together? Feel free to reach out via:
                </p>
                <ul className="list-disc ml-5">
                    <li>Email: <a href="mailto:your.email@example.com" className="text-blue-500">your.email@example.com</a></li>
                    <li>LinkedIn: <a href="https://linkedin.com/in/yourprofile" className="text-blue-500">linkedin.com/in/yourprofile</a></li>
                </ul>
            </div>


            <div className="relative overflow-hidden bg-white">
                <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
                    
                </div>
            </div>

        </div>
    );
}

//<ul>
//             <li>Coin 1: name here</li>
//             <li>New Zealand Defence Force Veteran Coin. Purchased from creator.</li>
//             <li>Gov Comms Sec B Challenge Coin. Unofficially presented by colleagues.</li>
//             <li>Director Support to Military Operations Australia. Issued by CDR _name.</li>
//             <li>Director Support to Military Operations New Zealand. Issued by CDR Gavin Birrell.</li>
//             <li>Australian Signals Directorate Challenge Coin</li>
//             <li>HMNZS Otago Challenge Coin: Issued to Intelligence Team by Ships Captain.</li>
//             <li>Naval Operations Support Unit: Royal New Zaland Navy: Issued by unit Commander.</li>
//             <li>1 New Zealand Infantry Regiment: Purchased to commemorate personnel killed in action in Afghanistan.</li>
//         </ul>