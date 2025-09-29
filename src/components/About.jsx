import React from "react";
import Coinstand from "./Coinstand.jsx";
import SkillBalanceBar from "./SkillBalanceBar.jsx";
import '../index.css';

function AboutSummary() {
    return (
        <section className="flex flex-col md:flex-row gap-8 mb-8 items-center">
            <img src="/images/Avatar1.png" alt="Avatar" className="w-48 h-48 rounded-lg shadow-lg object-cover" />
            <div>
                <h1 className="text-4xl font-bold mb-2 text-white">About Me</h1>
                <p className="mb-2">Hi, I'm <strong>Will Fowlds</strong>, a <strong>Developer</strong> with a passion for <strong>Game Development</strong>. With a background in <strong>C#, Unity Engine</strong>, I love creating <strong>unique gaming experiences</strong>.</p>
                <div className="flex flex-wrap gap-2 mt-2">
                    <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-xs">Leadership</span>
                    <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-xs">Communication</span>
                    <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-xs">Mentorship</span>
                    <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-xs">Resiliency</span>
                    <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-xs">Building Relationships</span>
                </div>
            </div>
        </section>
    );
}

function PersonalitySection() {
    return (
        <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2 text-white">Personality & Strengths</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
                                <div className="bg-gray-800 rounded p-4">
                                    <b>INTP:</b> Introverted, Analytic, and Strategic.
                                    <div className="mt-2 space-y-2">
                                        <SkillBalanceBar LeftSkill="Extrovert" RightSkill="Introvert" value={80} />
                                        <SkillBalanceBar LeftSkill="Sensing" RightSkill="Intuitive" value={60} />
                                        <SkillBalanceBar LeftSkill="Thinking" RightSkill="Feeling" value={20} />
                                        <SkillBalanceBar LeftSkill="Judging" RightSkill="Perceiving" value={70} />
                                    </div>
                                </div>
                                <div className="bg-gray-800 rounded p-4">
                                    <b>Unconventional Leadership Style:</b> Promote "think smart", innovation and open communication. Empower teams with responsibility and a long-term strategic vision. Build trust and rapport with team members.
                                    <div className="mt-2 space-y-2">
                                        <SkillBalanceBar LeftSkill="Technical" RightSkill="Non-Technical" value={70} />
                                        <SkillBalanceBar LeftSkill="Groups" RightSkill="One-on-One" value={70} />
                                        <SkillBalanceBar LeftSkill="Creative" RightSkill="Analytical" value={50} />
                                        <SkillBalanceBar LeftSkill="Small talk" RightSkill="Deep talk" value={80} />
                                    </div>
                                </div>
                                <div className="bg-gray-800 rounded p-4">
                                    <b>Strengths:</b>
                                    <ul className="list-disc ml-5 mt-2">
                                        <li>Creative problem solver</li>
                                        <li>Analytical thinking</li>
                                        <li>Objective decision making</li>
                                    </ul>
                                </div>
                                <div className="bg-gray-800 rounded p-4">
                                    <b>Weaknesses:</b>
                                    <ul className="list-disc ml-5 mt-2">
                                        <li>Social awkwardness</li>
                                        <li>Struggle to verbally articulate ideas</li>
                                        <li>Overanalysis (analysis paralysis)</li>
                                    </ul>
                                </div>
                            </div>
        </section>
    );
}


function EducationMilitaryGrid() {
    return (
        <section className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Education */}
                <div className="bg-gray-800 rounded p-6">
                    <h2 className="text-2xl font-semibold mb-2 text-white">Education</h2>
                    <ul className="list-disc ml-5 text-white">
                        <li>2005: First year student in Bachelors of Information Technology at Otago Polytechnic</li>
                        <li>2009 - 2019: Numerous Military and Leadership Courses
                            <ul className="list-disc ml-5">
                                <li>Blanchards Leadership Development Framework</li>
                                <li>NZDF Lead Self/Teams/Leaders Development Programmes</li>
                            </ul>
                        </li>
                        <li>2021: Level 4 Certificate in Small Business Management at Southern Institute of Technology</li>
                        <li>2022: Level 5, 6 papers from a Software Engineering Degree at Media Design School</li>
                        <li>2023-2025: Bachelors of Information Technology at Southern Institute of Technology</li>
                    </ul>
                </div>
                {/* Military */}
                <div className="bg-gray-800 rounded p-6">
                    <h2 className="text-2xl font-semibold mb-2 text-white">Military Experience</h2>
                    <ul className="list-disc ml-5 text-white">
                        <li>2009: Joined The Royal New Zealand Navy as a Communications Analyst/Electronic Warfare Specialist</li>
                        <li>2014: Promoted to Leading Communications Analyst</li>
                        <li>2016: Received High Duties Acknowledgement</li>
                    </ul>
                    <div className="mt-2 text-base text-white">
                        <p>Operation deployments to the Middle East, supporting NZDF and Coalition Forces. UNCLASS assignments included:</p>
                        <ul className="list-disc ml-5">
                            <li><strong>Counter Piracy and Narcotics</strong> <a href="https://www.nzdf.mil.nz/media-centre/news/patrolling-the-seas/" className="text-blue-400" target="_blank" rel="noopener noreferrer">Operation TIKI</a></li>
                            <li><a href="https://www.nzdf.mil.nz/media-centre/news/patrolling-the-seas/" className="text-blue-400" target="_blank" rel="noopener noreferrer">Operation TAKAPU</a></li>
                            <li><strong>Counter Terrorism</strong> <a href="https://www.defence.gov.au/defence-activities/operations/global-operations/okra" className="text-blue-400" target="_blank" rel="noopener noreferrer">Operation OKRA</a></li>
                            <li><a href="https://www.defence.govt.nz/assets/publications/NZ-Military-Contribution-to-Defeat-ISIS-in-Iraq.pdf" className="text-blue-400" target="_blank" rel="noopener noreferrer">Operation MANAWA</a></li>
                            <li><strong>Hostage Recovery</strong> Operation RAUPO</li>
                        </ul>
                        <p className="mt-2">While proud of my service, I am grateful to those who gave the ultimate sacrifice. Peace in the Middle East! Inshallah.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function CoinCollectionSection() {
        return (
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2 text-white">Coin Collection</h2>
                                <div className="mt-4"><Coinstand /></div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                    <div className="bg-gray-700 p-4 rounded">
                        <p>United States Pentagon September 11 Challenge Coin. Sparked my interest in Military and Intelligence.</p>
                    </div>
                    <div className="bg-gray-700 p-4 rounded">
                        <p>New Zealand Defence Force Veteran Challenge Coin. Design matches the official veteran pin.</p>
                    </div>
                    <div className="bg-gray-700 p-4 rounded">
                        <p>Government Communications Security Bureau Challenge Coin. Presented by colleagues.</p>
                    </div>
                    <div className="bg-gray-700 p-4 rounded">
                        <p>Director Support to Military Operations Australia Challenge Coin. Presented by Unit Commander for Operation OKRA.</p>
                    </div>
                    <div className="bg-gray-700 p-4 rounded">
                        <p>Director Support to Military Operations New Zealand Challenge Coin. Presented by the Unit Commander.</p>
                    </div>
                    <div className="bg-gray-700 p-4 rounded">
                        <p>Australian Signals Directorate Challenge Coin. Presented at the end of my Tour of Duty for Operation OKRA.</p>
                    </div>
                    <div className="bg-gray-700 p-4 rounded">
                        <p>Rear Admiral John Martin Chief of Navy Challenge Coin. Presented after briefing on NZDF's counter narcotics operations.</p>
                    </div>
                    <div className="bg-gray-700 p-4 rounded">
                        <p>Naval Operations Support Unit Challenge Coin. Presented by the Unit Commander.</p>
                    </div>
                    <div className="bg-gray-700 p-4 rounded">
                        <p>1st Infantry Battalion Challenge Coin. Purchased to commemorate personnel Killed in Action in Afghanistan.</p>
                    </div>
                </div>
            </section>
        );
}

function HobbiesSection() {
    return (
        <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-2 text-white">Interests & Hobbies</h2>
            <p>A short section about hobbies, interests, or what drives you. Helps visitors connect with you on a personal level.</p>
        </section>
    );
}

export default function About() {
    return (
        <div className="max-w-5xl mx-auto px-4 py-8">
            <AboutSummary />
            <PersonalitySection />
            <EducationMilitaryGrid />
            <CoinCollectionSection />
            {/* <HobbiesSection /> */}
        </div>
    );
}

            <div className="app-container">

                <div className="scene-container relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8" id="">
                    {/* <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">About Me</h1> */}
                    <h1 className="mt-2 max-w-lg text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
                        About me
                    </h1>
                    <p> Hi, I'm <strong>Will Fowlds</strong>, a <strong>Developer</strong> with a passion for <strong>Game Development</strong>.
                        With a background in <strong>C#, Unity Engine</strong>, I love creating <strong>unique gaming experiences.</strong>.</p>
                </div>

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
