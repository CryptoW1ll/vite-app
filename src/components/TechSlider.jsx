import React, { useEffect, useRef, useState } from 'react';

// Confirm Technology Exposure information is accurate and up to dateKnown security vulnerabilities detected
const techIcons = [
  // Programming Languages
  { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
  { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  // { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },

  // Front-End
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" },
  //{ name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" },
  // { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain-wordmark.svg" },

  // Back-End
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" },
  { name: "npm", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg" },
  { name: "Nginx", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg" },
  // Databases
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-plain-wordmark.svg" },
  // { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg" },

  // Cloud / DevOps
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original-wordmark.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg" },
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original-wordmark.svg" },
  { name: "Nginx", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg" },

  // Game Development
  { name: "Unity", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original-wordmark.svg" },
  { name: "Unreal Engine", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unrealengine/unrealengine-original-wordmark.svg" },
  { name: "Three.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original-wordmark.svg" },

  // Mobile & Hardware
  { name: "Android", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original-wordmark.svg" },
  { name: "Arduino", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original-wordmark.svg" },
  { name: "Raspberry Pi", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/raspberrypi/raspberrypi-original.svg" },
  // Tools / IDEs
  { name: "Visual Studio", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-original.svg" },
  { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original-wordmark.svg" },

  // Version Control
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },

  // Project Management
  { name: "Jira", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original-wordmark.svg" },

  // Operating Systems
  // { name: "Linux", icon: "/icons/linux.svg" },
];


export default function TechSlider() {
  const [offset, setOffset] = useState(0);
  const sliderRef = useRef(null);
  const itemWidth = 112; 
  const cycleWidth = itemWidth * techIcons.length;

  useEffect(() => {
    let animationFrameId;
    let lastTimestamp;
    const speed = 40; // pixels per second

    const animate = (timestamp) => {
      if (lastTimestamp !== undefined) {
        const deltaTime = (timestamp - lastTimestamp) / 1000;
        setOffset((prev) => {
          const next = prev - speed * deltaTime;
          return next <= -cycleWidth ? next + cycleWidth : next;
        });
      }

      lastTimestamp = timestamp;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [cycleWidth]);

  return (
    <div className="w-full overflow-hidden mt-8">
      <h3 className="text-2xl font-bold mb-4 text-white drop-shadow-sm">Technology exposure</h3>
      <div className="w-full overflow-hidden">
        <div
          ref={sliderRef}
          className="flex will-change-transform"
          style={{ transform: `translateX(${offset}px)` }}
        >
          {[...techIcons, ...techIcons].map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="mx-2 flex h-[88px] w-[96px] flex-shrink-0 flex-col items-center justify-center rounded-xl border border-slate-200 bg-white/95 px-2 text-slate-800 shadow-md"
            >
              <img src={tech.icon} alt={tech.name} className="mb-1 h-8 w-8 drop-shadow-sm" />
              <span className="text-center text-xs font-semibold leading-tight">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
