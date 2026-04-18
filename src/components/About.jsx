import React from "react";
import Coinstand from "./Coinstand.jsx";
import SkillBalanceBar from "./SkillBalanceBar.jsx";
import Education from "../components/Education.jsx";
import TechSlider from "../components/TechSlider.jsx";
import '../index.css';

function AboutSummary() {
    return (
        // <section className="flex flex-col md:flex-row gap-8 mb-8 items-center">
        //     <img src="/images/Avatar.png" alt="Avatar" className="w-48 h-48 rounded-full shadow-lg object-cover" />
        //     <div>
        //         <h1 className="text-4xl font-bold mb-2 text-white">About Me</h1>
        //         <p className="mb-2 text-white">Hi, I'm <strong>Will Fowlds</strong>, a <strong>Developer</strong> with a passion for <strong>Game Development</strong>. With a background in <strong>C#, Unity Engine</strong>, I love creating <strong>unique gaming experiences</strong>.</p>
        //         <div className="flex flex-wrap gap-2 mt-2">
        //             <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-xs">Leadership</span>
        //             <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-xs">Communication</span>
        //             <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-xs">Mentorship</span>
        //             <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-xs">Resiliency</span>
        //             <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-xs">Building Relationships</span>
        //         </div>
        //     </div>
        // </section>

        <section className="flex flex-col md:flex-row gap-8 mb-8 items-center">
            <img src="/images/Avatar.png" alt="Avatar" className="w-48 h-48 rounded-full shadow-lg object-cover" />
            <div>
                <h1 className="text-4xl font-bold mb-2 text-white">About Me</h1>

                <p className="mb-4 text-white">
                    Hi, I’m <strong>Will Fowlds</strong> — an <strong>Operator for Lockheed Martin Space</strong> By day, I operate in a high-responsibility environment where <strong>precision, system awareness, and decision-making under pressure</strong> are critical, shaping how I approach problem-solving and performance.
                </p>

                <p className="mb-4 text-white">
                    Alongside my primary role, I am a Developer with a strong technical foundation and a growing focus on <strong>game development as a secondary career</strong>. Specialising in C# and the Unity Engine, I build interactive experiences through my studio, Echelon Interactive. Game development has evolved from a passion into a disciplined secondary career, where I focus on creating unique, systems-driven gameplay experiences with an emphasis on structure, scalability, and player engagement.
                </p>

                <p className="mb-4 text-white">
                    I place strong emphasis on continuous growth, both professionally and personally, ensuring I develop not just technically, but as a well-rounded operator and developer.
                </p>

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
                                <div className="bg-gray-800 rounded p-4 text-white">
                                    <b>INTP:</b> Introverted, Analytic, and Strategic.
                                    <div className="mt-2 space-y-2">
                                        <SkillBalanceBar LeftSkill="Extrovert" RightSkill="Introvert" value={80} />
                                        <SkillBalanceBar LeftSkill="Sensing" RightSkill="Intuitive" value={60} />
                                        <SkillBalanceBar LeftSkill="Thinking" RightSkill="Feeling" value={20} />
                                        <SkillBalanceBar LeftSkill="Judging" RightSkill="Perceiving" value={70} />
                                    </div>
                                </div>
                                <div className="bg-gray-800 rounded p-4 text-white">
                                    <b>Unconventional Leadership Style:</b> Promote "think smart", innovation and open communication. Empower teams with responsibility and a long-term strategic vision. Build trust and rapport with team members.
                                    <div className="mt-2 space-y-2">
                                        <SkillBalanceBar LeftSkill="Technical" RightSkill="Non-Technical" value={70} />
                                        <SkillBalanceBar LeftSkill="Groups" RightSkill="One-on-One" value={70} />
                                        <SkillBalanceBar LeftSkill="Creative" RightSkill="Analytical" value={50} />
                                        <SkillBalanceBar LeftSkill="Small talk" RightSkill="Deep talk" value={80} />
                                    </div>
                                </div>
                                <div className="bg-gray-800 rounded p-4 text-white">
                                    <b>Strengths:</b>
                                    <ul className="list-disc ml-5 mt-2">
                                        <li>Creative problem solver</li>
                                        <li>Analytical thinking</li>
                                        <li>Objective decision making</li>
                                    </ul>
                                </div>
                                <div className="bg-gray-800 rounded p-4 text-white">
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

// Update about me with Current job/ Title, 
// Moved to TechSlider: Confirm Technology Exposure information is accurate and up to date
// Determine if Grades is appropriate to include

function EducationMilitaryGrid() {
    return (
        <section className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Education */}
                <div className="bg-gray-800 rounded p-6">
                    <h2 className="text-2xl font-semibold mb-2 text-white">Education</h2>
                    <ul className="list-disc ml-5 text-white">
                        {/* <li>2005: First year student in Bachelors of Information Technology at Otago Polytechnic</li> */}
                        {/* <li>2009 - 2019: Numerous Military and Leadership Courses
                            <ul className="list-disc ml-5">
                                <li>Blanchards Leadership Development Framework</li>
                                <li>NZDF Lead Self/Teams/Leaders Development Programmes</li>
                            </ul>
                        </li> */}
                        <li>2012: Blanchards Leadership Development Framework</li>
                        <li>2017: NZDF Lead Self/Teams/Leaders Development Programmes</li>
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
                        <p className="mt-2">While I am proud of my service, I remain deeply grateful to those who made the ultimate sacrifice in the line of duty. 
                            Their courage and commitment will never be forgotten. May peace prevail in the Middle East. Inshallah.</p>
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
            <div className="flex justify-center items-center w-full py-4">
                <div className="w-full max-w-2xl md:max-w-3xl lg:max-w-4xl px-2 md:px-6">
                    <Coinstand />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="bg-gray-700 p-4 rounded text-white">
                    <p>United States Pentagon September 11 Challenge Coin. Sparked my interest in Military and Intelligence.</p>
                </div>
                <div className="bg-gray-700 p-4 rounded text-white">
                    <p>New Zealand Defence Force Veteran Challenge Coin. Design matches the official veteran pin.</p>
                </div>
                <div className="bg-gray-700 p-4 rounded text-white">
                    <p>Government Communications Security Bureau Challenge Coin. Presented by colleagues.</p>
                </div>
                <div className="bg-gray-700 p-4 rounded text-white">
                    <p>Director Support to Military Operations Australia Challenge Coin. Presented by Unit Commander for Operation OKRA.</p>
                </div>
                <div className="bg-gray-700 p-4 rounded text-white">
                    <p>Director Support to Military Operations New Zealand Challenge Coin. Presented by the Unit Commander.</p>
                </div>
                <div className="bg-gray-700 p-4 rounded text-white">
                    <p>Australian Signals Directorate Challenge Coin. Presented at the end of my Tour of Duty for Operation OKRA.</p>
                </div>
                <div className="bg-gray-700 p-4 rounded text-white">
                    <p>Rear Admiral John Martin Chief of Navy Challenge Coin. Presented after briefing on NZDF's counter narcotics operations.</p>
                </div>
                <div className="bg-gray-700 p-4 rounded text-white">
                    <p>Naval Operations Support Unit Challenge Coin. Presented by the Unit Commander.</p>
                </div>
                <div className="bg-gray-700 p-4 rounded text-white">
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
            <p className="text-white">A short section about hobbies, interests, or what drives you. Helps visitors connect with you on a personal level.</p>
        </section>
    );
}

export default function About() {
    return (
        <div className="max-w-5xl mx-auto px-4 py-8">
            <AboutSummary />
            <a 
                href="/documents/Resume.docx" 
                download 
                className="inline-block"
              >
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
                  Download Resume
                </button>
            </a>

            {/* <TechSlider />
            <Education /> */}

            <PersonalitySection />
            <EducationMilitaryGrid />
            {/* <a 
                href="/documents/Resume.docx" 
                download 
                className="inline-block"
              >
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
                  Download Resume
                </button>
              </a> */}
            <CoinCollectionSection />
            {/* <HobbiesSection /> */}
        </div>
    );
}
