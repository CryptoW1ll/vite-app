import React from "react";
import Coinstand from "./Coinstand";
import '../index.css';
import SkillBalanceBar from "./SkillBalanceBar";

export default function About() {
    return (

        <div className="grid grid-cols-5 grid-rows-5 gap-4">
            <div className="row-span-5">
                <img src="/images/Avatar.png" alt="Coin Stand" className="w-full h-auto rounded-lg shadow-lg" />

                <b>Skills</b>
                <ul className="list-disc ml-5">
                    <li>Leadership</li>
                    <li>Communication</li>
                    <li>Mentorship</li>
                    <li>Resiliency</li>
                    <li>Building Relationships</li>

                    {/* <li>Unity</li>
                    <li>C#</li>
                    <li>Game Development</li>
                    <li>Game Design</li>
                    <li>Game Mechanics</li>
                    <li>Game Programming</li>
                    <li>Game Art</li>
                    <li>Game Animation</li>
                    <li>Game Audio</li> */}
                </ul>

                <p><b>Personality</b></p>
                <p><b>INTP: Intoverted, Analytic, and Strategic.</b></p>
                <SkillBalanceBar LeftSkill="Extrovert" RightSkill="Introvert" value={80} />
                <SkillBalanceBar LeftSkill="Sensing" RightSkill="Intuitive" value={60} /> 
                <SkillBalanceBar LeftSkill="Thinking" RightSkill="Feeling" value={20} />
                <SkillBalanceBar LeftSkill="Judging" RightSkill="Perceiving" value={70} />

                <p><b>Unconventional Leadership Style</b></p>
                <p>Promote "think smart", innovation and open communication.</p>
                <p>Influencing others and empowering teams with responsibility, and a long-term strategic vision.</p>
                <p>Building trust and rapport with individual team members.</p>
                <p></p>
                
                <SkillBalanceBar LeftSkill="Technical" RightSkill="Non-Technical" value={70} />     
                <SkillBalanceBar LeftSkill="Groups" RightSkill="One-on-One" value={70} />             
                <SkillBalanceBar LeftSkill="Creative" RightSkill="Analytical" value={50} />
                <SkillBalanceBar LeftSkill="Small talk" RightSkill="Deep talk" value={80} />       

                <p><b>Strengths</b></p>
                <p>Creative problem solver.</p>
                <p>Analytical thinking.</p>
                <p>Objective decision making.</p>

                <p><b>Weaknesses</b></p>
                <p>Social Awkwardness.</p>
                <p>Struggle to verbally articulate ideas well.</p>
                <p>Overanalysis. analysis paralysis.</p>
            </div>
            <div className="col-span-4 row-span-5">

            <div className="app-container">

                <div className="scene-container relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8" id="">
                    {/* <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">About Me</h1> */}
                    <h1 className="mt-2 max-w-lg text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
                        About me
                    </h1>
                    <p> Hi, I'm <strong>Will Fowlds</strong>, a <strong>Developer</strong> with a passion for <strong>Game Development</strong>.
                        With a background in <strong>C#, Unity Engine</strong>, I love creating <strong>unique gaming experiences.</strong>.</p>
                </div>
                {/* <div className="scene-container" id="">
                    <Coinstand/>
                </div> */}

                {/* Experience Section */}
                <div className="scene-container relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8 pointer-events-auto" id="">
                    {/* <h2 className="text-2xl font-semibold mb-4">Experience</h2> */}
                    

                    <h2 className="text-2xl font-semibold mb-4">Education</h2>
                    <ul className="list-disc ml-5">
                        <li>2005: First year student in Bachelors of Information Technology at Otago Polytechnic</li>
                        <li>2009 - 2019: Numerous Military and Leadership Courses</li>  
                            <ul>
                                <li>Blanchards Leadership Development Framework</li>
                                <li>NZDF Lead Self Development Programme</li>
                                <li>NZDF Lead Teams Development Programme</li>
                                <li>NZDF Lead Leaders Development Programme</li>
                            </ul>
                        <li>2021: Level 4 Certificate in Small Business Management at the Southern Institute of Technology</li>
                        <li>2022: Level 5, 6 papers from a Software Engineering Degree at Media Design School</li>
                        <li>2023: First year student in Bachelors of Information Technology at the Southern Institute of Technology</li>
                        <li>2024: Second year student in Bachelors of Information Technology at the Southern Institute of Technology</li>
                        <li>2025: Third year student in Bachelors of Information Technology at the Southern Institute of Technology</li>
                    </ul>
                    
                </div>

                <div className="scene-container relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8" id="">
                    <h2 className="text-2xl font-semibold mb-4">Military</h2>

                    <ul className="list-disc ml-5">
                        <li>2009: Joined The Royal New Zealand Navy as a Communications Analyst/ Electronic Warfare Specialist</li>
                        <li>2014: Promoted to Leading Communications Analyst</li>
                        <li>2016: Received High Duties Acknowledgement</li>
                    </ul>


                    <div className="mt-2 text-lg tracking-tight text-white">    
                  
                        While you swear and oath to the Monarchy, your oath is firmly to those men and woman standing beside you. 
                        They to have sworn an oath to protect the people of New Zealand and the Commonwealth.
                        My sevice included an operation deployment to the Middle East, supporting to the New Zealand Defence Force and 
                        Coalition Forces. 
                        UNCLASS assignments included:
                        <ul>
                            <li><strong>Counter Piracy and Narcotics </strong><a href="https://www.nzdf.mil.nz/media-centre/news/patrolling-the-seas/">Operation TIKI</a></li>
                            <li><a href="https://www.nzdf.mil.nz/media-centre/news/patrolling-the-seas/">Operation TAKAPU</a></li>
                            <li><strong>Counter Terrorism </strong><a href="https://www.defence.gov.au/defence-activities/operations/global-operations/okra">Operation OKRA</a> </li>
                            <li><a href="https://www.defence.govt.nz/assets/publications/NZ-Military-Contribution-to-Defeat-ISIS-in-Iraq.pdf">Operation MANAWA</a></li>
                            <li><strong>Hostage Recovery</strong>  Operation RAUPO</li>
                            <li></li>
                        </ul>                                                                                  
            
                        <p>While I am proud of my service and extremely grateful to those who gave the ultimate sacrifice in the line of duty, I will 
                            never hide my distain for those in power who are influenced by lobbists for the military industial complex. Peace in the Middle East! Inshallah.
                            
                        </p>
                    </div>

                    <Coinstand/>

                    {/* Show/ Hide */}
                    <h2>Coin Descriptions</h2>
                    <div className="grid grid-cols-3 gap-4 lg:grid-cols-3 lg:gap-8">
                        <div className="h-32 rounded bg-gray-700">
                        <p>Purchased <strong>United States Pentagon September 11</strong> Challenge Coin. 
                        These events laid the seed for me to want to pursue a career in Military and Intelligence.</p>
                        </div>
                        <div className="h-32 rounded bg-gray-700">
                            <p>Purchased <strong>New Zealand Defence Force Veteran</strong> Challenge Coin. The design is identical to the commemorative veteran pin the government issues veterans.</p>
                        </div>
                        <div className="h-32 rounded bg-gray-700">
                            <p>Presented <strong>Government Communications Security Bureau</strong> Challenge Coin.</p>
                        </div>
                        <div className="h-32 rounded bg-gray-700">
                            <p><strong>Director Support to Military Operations Australia</strong> Challenge Coin. Presented by Unit Commander at the end of my Tour of Duty for Operation OKRA.</p>
                        </div>
                        <div className="h-32 rounded bg-gray-700">
                            <p><strong>Director Support to Military Operations New Zealand</strong> Challenge Coin. Presented bu the Unit Commander</p>
                        </div>
                        <div className="h-32 rounded bg-gray-700">
                            <p><strong>Australian Signals Directorate</strong> Challenge Coin. Presented at the end of my Tour of Duty for Operation OKRA</p>
                        </div>
                        <div className="h-32 rounded bg-gray-700">
                            <p><strong>Rear Admiral John Martin Chief of Navy</strong> Challenge Coin. Presented by the Chief of Navy after a briefing him about the NZDF's contributions to Combined Task Forces (CMF 150) counter narcotics operations.</p>
                        </div>
                        <div className="h-32 rounded bg-gray-700">
                            <p><strong>Naval Operations Support Unit</strong> Challenge Coin. Presented by the Unit Commander.</p>
                        </div>
                        <div className="h-32 rounded bg-gray-700">
                            <p><strong>1st Infantry Battalion</strong> Challenge Coin. Purchased as a reminder of the sacrifices of personnel Killed in Action in Afghanistan. Onwards</p>
                        </div>
                    </div>

                    <p><br/>
                    echelon [ esh-uh-lon ]\n
                i.  a level of command, authority, or rank.\n
                ii. a formation of troops, ships, or aircraft.\n
                iii.codename ECHELON. Homage to my previous career.\n\n

                The significance to the term for me, reflects\n 
                both its hierarchical and operational meanings. 


                echelon [ esh-uh-lon ]
                i.  a level of command, authority, or rank.
                ii. a formation of troops, ships, or aircraft.
                iii.codename ECHELON. Homage to my previous career.

                The significance to the term for me, reflects 
                both its hierarchical and operational meanings. 


                An echelon is a separate level of command. 

                In addition, there is also a separate echelon known as a non-echelon command. 
                A non-echelon command is a unit or units, an organization, or an area under the command of one individual. It does not correspond to any of the other echelons

                Echelon formation
                Groups/contacts/formation with wingman displaced approximately 45 degrees behind leader's 3/9 (o'clock) line

                X
                X
                X
                X


                Division
                An echelon of command and tactical formation that employs brigade combat teams, multi-functional brigades, and functional brigades to achieve objectives on land.

                Corps
                An echelon of command and tactical formation that employs divisions, multi-functional brigades, and functional brigades to achieve objectives on land.

                    </p>

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

                {/* <div className="scene-container relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8" id="">

                    <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
                    <p>
                        Interested in working together? Feel free to reach out via:
                    </p>
                    <ul className="list-disc ml-5">
                        <li>Email: <a href="mailto:your.email@example.com" className="text-blue-500">your.email@example.com</a></li>
                        <li>LinkedIn: <a href="https://linkedin.com/in/yourprofile" className="text-blue-500">linkedin.com/in/yourprofile</a></li>
                    </ul>
                </div> */}


                {/* <div className="relative overflow-hidden bg-white">
                    <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
                        
                    </div>
                </div> */}

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