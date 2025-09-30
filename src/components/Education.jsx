import React, { useEffect, useRef, useState } from 'react';
import Grades from './Grades.jsx';

const grades = [
  /*
  GD1J01BSE Game Design Principles                                20  Level 5 B 5
  GD1M01BSE Fundamental Mathematical and Engineering Principles   30  Level 5 C+ 3
  GD1M02 Mathematics for Graphical Games 0.1286                   15  Level 5 C- 1
  GD1P01 Introduction to Software Engineering for Games 0.1286    15  Level 5 B- 4
  GD1P02 Algorithms and Data Structures 0.1286                    15  Level 5 D 0
  GD1P03 2D Game Programming 0.1286                               15  Level 5 C- 1
  GD1S01A Introduction to Game Mechanics                          15  Level 5 B- 4
  GD2S01 Software Engineering Principles and Practices            15  Level 6 B 5
  */ 
  { name: "Game Design Principles", grade: 85 },
  { name: "Mathematical and Engineering Principles", grade: 75 },
  { name: "Mathematics for Graphical Games", grade: 70 },
  { name: "Introduction to Software Engineering for Games", grade: 75 },
  { name: "2D Game Programming", grade: 70 },
  { name: "Introduction to Game Mechanics", grade: 75 },
  { name: "Software Engineering Principles and Practices", grade: 85 },

  { name: "Fundamentals of Project Management", grade: 81 },
  { name: "Fundamentals of Programming and Problem Solving", grade: 75 },
  { name: "Fundamentals of Information Systems Development", grade: 90 },
  { name: "Information Technology Operations", grade: 75 },

  { name: "Introduction to Networks", grade: 84 },
  { name: "Operating Systems", grade: 69 },
  { name: "Web Application Implementation", grade: 90 },
  { name: "Programming", grade: 75 },

  { name: "Advancecd Programming", grade: 81 },
  { name: "Mobile Application Development", grade: 90 },
  { name: "Systems Analysis and Design", grade: 81 },
  { name: "Database Management", grade: 70 },

  { name: "Game Development 1", grade: 90 },
  { name: "Project Management", grade: 79 },
  { name: "Cloud Computing", grade: 79 },
  { name: "Web Services and Design Methodologies", grade: 70 },

  { name: "IT715 Embedded Systems", grade: 95 },
  { name: "IT709 Web Applications", grade: 95 },
  { name: "IT701 Project", grade: 0 },
  
  { name: "IT710 Game Development 2", grade: 0 },

];

const gameDevelopment = [
  { name: "Game Design Principles", grade: 85 },
  { name: "Mathematical and Engineering Principles", grade: 75 },
  { name: "Mathematics for Graphical Games", grade: 70 },
  { name: "Introduction to Software Engineering for Games", grade: 75 },
  { name: "2D Game Programming", grade: 70 },
  { name: "Introduction to Game Mechanics", grade: 75 },
  { name: "Game Development 1", grade: 90 },
  // { name: "IT710 Game Development 2", grade: 0 },
];

const webDevelopment = [
  { name: "Fundamentals of Web Development", grade: 90 },
  { name: "Web Application Implementation", grade: 90 },
  { name: "IT709 Web Applications", grade: 95 },
  { name: "Web Services and Design Methodologies", grade: 70 },
];

const programming = [
  { name: "Fundamentals of Programming and Problem Solving", grade: 75 },
  { name: "Programming", grade: 75 },
  { name: "Advanced Programming", grade: 81 },
  { name: "Mobile Application Development", grade: 90 },
];


function calculateAverageGrade(gameDevelopment) {
  const total = gameDevelopment.reduce((sum, course) => sum + course.grade, 0);
  return (total / gameDevelopment.length).toFixed(2);
}


export default function Education() {
  const [offset, setOffset] = useState(0);
  const sliderRef = useRef(null);
  const itemWidth = 160; 
  const visibleItems = 4; 
  const maxOffset = -itemWidth * (grades.length - visibleItems);

  // Calculate the average grade for game development courses
  const averageGrade = calculateAverageGrade(gameDevelopment);
  console.log("Average Grade for Game Development Courses:", averageGrade);

  // Calculate the average grade for web development courses
  const webAverageGrade = calculateAverageGrade(webDevelopment);
  console.log("Average Grade for Web Development Courses:", webAverageGrade);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => {
        const next = prev - itemWidth;
        return next < maxOffset ? 0 : next;
      });
    }, 3000); // change every 3 seconds

    return () => clearInterval(interval);
  }, [maxOffset]);

  return (
    <div className="w-full overflow-hidden mt-8">
      <h3 className="text-2xl font-bold mb-4">Grades</h3>
      <div className="w-full overflow-hidden">
        <div
          ref={sliderRef}
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(${offset}px)` }}
        >
          {grades.map((course, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center w-[160px] flex-shrink-0"
            >
              <Grades grade={course.grade} />
              <span className="text-sm text-center mt-2">{course.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
