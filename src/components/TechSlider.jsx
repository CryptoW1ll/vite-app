import React, { useEffect, useRef, useState } from 'react';

const techIcons = [
  // Programming Languages
  { name: "Language", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
  { name: "Language", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" },
  { name: "Language", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  // { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },

  // Front-End
  { name: "Front-End", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { name: "Front-End", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { name: "Front-End", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" },
  //{ name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" },
  // { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain-wordmark.svg" },

  // Back-End
  { name: "Back-End", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" },
  { name: "Back-End", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg" },
  { name: "Back-End", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg" },
  // Databases
  { name: "Database", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-plain-wordmark.svg" },
  // { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg" },

  // Cloud / DevOps
  { name: "Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original-wordmark.svg" },
  { name: "Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg" },
  { name: "DevOps", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original-wordmark.svg" },
  { name: "DevOps", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg" },

  // Game Development
  { name: "Game Dev", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original-wordmark.svg" },
  { name: "Game Dev", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unrealengine/unrealengine-original-wordmark.svg" },
  { name: "Three.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original-wordmark.svg" },

  // Mobile & Hardware
  { name: "Mobile", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original-wordmark.svg" },
  { name: "Embedded Systems", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original-wordmark.svg" },
  { name: "Raspberry Pi", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/raspberrypi/raspberrypi-original.svg" },
  // Tools / IDEs
  { name: "IDE", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-original.svg" },
  { name: "IDE", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original-wordmark.svg" },

  // Version Control
  { name: "Versioning", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },

  // Project Management
  { name: "Project Management", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original-wordmark.svg" },

  // Operating Systems
  // { name: "Linux", icon: "/icons/linux.svg" },
];


export default function TechSlider() {
  const [offset, setOffset] = useState(0);
  const sliderRef = useRef(null);
  const itemWidth = 160; 
  const visibleItems = 4; 
  const maxOffset = -itemWidth * (techIcons.length - visibleItems);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => {
        const next = prev - itemWidth;
        return next < maxOffset ? 0 : next;
      });
    }, 2000); // change every 2 seconds

    return () => clearInterval(interval);
  }, [maxOffset]);

  return (
    <div className="w-full overflow-hidden mt-8">
      <h3 className="text-2xl font-bold mb-4">Technology exposure</h3>
      <div className="w-full overflow-hidden">
        <div
          ref={sliderRef}
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(${offset}px)` }}
        >
          {techIcons.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center w-[160px] flex-shrink-0"
            >
              <img src={tech.icon} alt={tech.name} className="w-12 h-12 mb-2" />
              <span className="text-sm text-center">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
