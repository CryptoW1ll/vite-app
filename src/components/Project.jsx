import React from "react";
import { Link } from "react-router-dom";

export default function Project() {
  const projectDetails = [
    {
      id: 1,
      name: "Farm Watch",
      description:
        "Farm Watch is a 2D top-down tower defense game where you must defend against waves of mutated pests who have come to attack you and destroy your home along with your crops.",
      image: "./Project_FarmWatch.png",
      link: "https://defendable-potato.itch.io/farm-watch",
      responsibility: "I was the Lead Developer alongside one other developer. I concentrated on the core mechanics where the other developer worked on the UI. The team collectively worked on game design, level design. I worked closely with the Artist's Team Lead, and project manager to ensure that the game was being developed in a timely manner.",
      team: "2 Developers, 3 Artists, 1 Project Manager",
      length: "3 months",
    },
    {
      id: 2,
      name: "Bricktastic",
      description:
        "Bricktastic is a fun and engaging block-breaking game with unique power-ups and levels.",
      image: "/Project_Bricktastic.png",
      link: "https://cryptow1ll.itch.io/bricktastic",
      responsibility: "I Project Managed this project, which was an entry level game development paper. We chose a relatively simple concept to work on a limited the scope of the project. I managed the project schedule and the documentation. A lesson learned from this project not skip technical design documentation no matter how simple the project is.",
      team: "2 Developers",
      length: "4 months",
    },
    {
      id: 3,
      name: "Fugitive Apprehension Task Force",
      description:
        "An action-packed game where you track and capture fugitives in high-intensity missions.",
      image: "/images/Project_FugitiveApprehensionTaskForce(WIP).png",
      link: "/fatf",
      responsibility: "I have chosen to understake the project as a solo developer. Please click the link below to see the project in its current state.",
      team: "Solo Developer",
      length: "9 months"

    }
    
  ];

  return (
    // tailwind::Centered 2x2 grid
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold text-white bg-gray-900 px-3 py-1 rounded">Our Projects</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Explore Our Work
          </p>
          <p className="mt-6 text-lg text-gray-600">
            Take a look at some of the exciting projects we have worked on.
          </p>
        </div>

        {/* Project List */}
        <div className="mt-16 mx-auto max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center">
          {projectDetails.map((project) => (
            <div key={project.id} className="border p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold text-white bg-gray-900 px-3 py-1 rounded">{project.name}</h2>
              <p className="text-lg text-gray-600 mt-2">Team: {project.team}</p>
              <p className="text-lg text-gray-600 mt-2">Length: {project.length}</p>
              <p className="text-lg text-gray-600 mt-2">{project.description}</p>
            
              <img
                src={project.image}
                alt={project.name}
                className="mt-4 w-full h-48 object-cover rounded-lg"
              />
              
              
              <p className="text-lg text-gray-600 mt-2">What I did: {project.responsibility}</p>

              {project.link.startsWith("/") ? (
                <Link
                  to={project.link}
                  className="mt-4 inline-block bg-gray-900 text-white px-4 py-2 rounded shadow hover:bg-gray-800 transition-colors font-semibold text-center"
                  aria-label={`View ${project.name} project`}
                >
                  View Project
                </Link>
              ) : (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-gray-900 text-white px-4 py-2 rounded shadow hover:bg-gray-800 transition-colors font-semibold text-center"
                  aria-label={`View ${project.name} project`}
                >
                  View Project
                </a>
              )}
            </div>
          ))}
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* GitHub Contributions Section */}
          <div className="mt-24">
            <h2 className="text-3xl font-bold text-white text-center mb-4">
              GitHub Contributions
            </h2>
            <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
              Here's a snapshot of my coding activity over the past year.
            </p>

          <div className="grid grid-cols-1 gap-8">
            {/* Contribution Calendar spans full width */}
            <div className="bg-gray-800 p-6 rounded-xl shadow-md border border-gray-700 max-w-4xl mx-auto">
              <h3 className="text-white text-lg font-semibold mb-4 text-center">
                Contribution Calendar
              </h3>
              <img
                src="https://ghchart.rshah.org/cryptow1ll"
                alt="GitHub contribution calendar"
                loading="lazy"
                className="w-full object-contain"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* GitHub Streak Stats */}
              <div className="bg-gray-800 p-6 rounded-xl shadow-md border border-gray-700">
                <h3 className="text-white text-lg font-semibold mb-4 text-center">
                  Coding Streak
                </h3>
                <img
                  src="https://github-readme-streak-stats.herokuapp.com/?user=cryptow1ll"
                  alt="GitHub Streak"
                  loading="lazy"
                  className="w-full object-contain"
                />
              </div>

              {/* GitHub Repo/Contributions Stats */}
              <div className="bg-gray-800 p-6 rounded-xl shadow-md border border-gray-700">
                <h3 className="text-white text-lg font-semibold mb-4 text-center">
                  GitHub Stats
                </h3>
                <img
                  src="https://github-readme-stats.vercel.app/api?username=cryptow1ll&show_icons=true&theme=default"
                  alt="GitHub stats"
                  loading="lazy"
                  className="w-full object-contain"
                />
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
