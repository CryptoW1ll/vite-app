import React from "react";

export default function Project() {
  const projectDetails = [
    {
      id: 1,
      name: "Farm Watch",
      description:
        "Farm Watch is a 2D top-down tower defense game where you must defend against waves of mutated pests who have come to attack you and destroy your home along with your crops.",
      image: "./Project_FarmWatch.png",
      link: "https://defendable-potato.itch.io/farm-watch",
    },
    {
      id: 2,
      name: "Bricktastic",
      description:
        "Bricktastic is a fun and engaging block-breaking game with unique power-ups and levels.",
      image: "/Project_Bricktastic.png",
      link: "https://cryptow1ll.itch.io/bricktastic",
    },
    {
      id: 3,
      name: "Fugitive Apprehension Task Force",
      description:
        "An action-packed game where you track and capture fugitives in high-intensity missions.",
      image: "/images/Project_FugitiveApprehensionTaskForce(WIP).png",
      link: "https://example.com/project3",
    },
    {
      id: 4,
      name: "",
      description: "",
      image: "",
      link: "",
    }
  ];

  return (
    // tailwind::Centered 2x2 grid
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold text-indigo-600">Our Projects</h2>
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
              <h2 className="text-xl font-bold">{project.name}</h2>
              <p className="text-lg text-gray-600 mt-2">{project.description}</p>
              <img
                src={project.image}
                alt={project.name}
                className="mt-4 w-full h-48 object-cover rounded-lg"
              />
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-4 block font-semibold"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
