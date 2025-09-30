import { CircularProgressBar } from "@tomickigrzegorz/react-circular-progress-bar";
import { useMemo } from "react";

export default function Grades({ grade }) {

    const getLetterGrade = (grade) => {
        if (grade >= 90) return "A+";
        if (grade >= 85) return "A";
        if (grade >= 80) return "A-";
        if (grade >= 75) return "B+";
        if (grade >= 70) return "B";
        if (grade >= 65) return "B-";
        if (grade >= 60) return "C+";
        if (grade >= 55) return "C";
        if (grade >= 50) return "C-";
        return "F";
    };

    const getRandomColor = (grade) => {
        const colors = [
            "#FF6B6B", // Red
            "#4ECDC4", // Teal
            "#45B7D1", // Blue
            "#96CEB4", // Green
            "#FFEAA7", // Yellow
            "#DDA0DD", // Plum
            "#98D8C8", // Mint
            "#F7DC6F", // Light Yellow
            "#BB8FCE", // Light Purple
            "#85C1E9", // Light Blue
            "#F8C471", // Orange
            "#82E0AA", // Light Green
            "#F1948A", // Light Red
            "#85929E", // Gray
            "#D7BDE2"  // Lavender
        ];
        
        // Use grade as seed for consistent color per grade
        const index = Math.floor((grade * 7) % colors.length);
        return colors[index];
    };

    const letter = useMemo(() => getLetterGrade(grade), [grade]);
    const color = useMemo(() => getRandomColor(grade), [grade]);

    return (
        <div className="flex flex-col items-center">
            <div className="relative">
                <CircularProgressBar
                    key={grade}
                    percent={grade}
                    number={false}
                    size={100}
                    colorSlice={color}
                    colorCircle="#D3D3D3"
                    fontColor="#000000"
                    fontSize="4rem"
                    fontWeight={600}
                    stroke={12}
                    strokeBottom={12}
                    speed={60}
                    cut={0}
                    rotation={-90}
                    fill="transparent"
                    textPosition="0.35em"
                    animationOff={false}
                    styles={{
                        borderRadius: "50%",
                        boxShadow: "inset 0 0 25px 5px #FFFFFF"
                    }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-bold text-gray-700">{letter}</span>
                </div>
            </div>
        </div>
    );
}
