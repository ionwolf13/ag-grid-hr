import React from "react";

interface ChipInterface {
  name: string;
  color?:
    | "blue"
    | "green"
    | "red"
    | "yellow"
    | "purple"
    | "indigo"
    | "pink"
    | "gray"
    | "orange"
    | "brown";
}

const chipColors = {
  blue: "bg-blue-300 text-blue-800 border-1",
  green: "bg-green-300 text-green-800 border-1",
  red: "bg-red-300 text-red-800 border-1",
  yellow: "bg-yellow-300 text-yellow-800 border-1",
  purple: "bg-purple-300 text-purple-800 border-1",
  indigo: "bg-indigo-300 text-indigo-800 border-1",
  pink: "bg-pink-300 text-pink-800 border-1",
  gray: "bg-gray-300 text-gray-800 border-1",
  orange: "bg-orange-300 text-orange-800 border-1",
  brown: "bg-[#87603B] text-[#702F06] border-1"
};

export const Chip: React.FC<ChipInterface> = ({ name, color = "blue" }) => {
  const chipColor = chipColors[color];

  return (
    <span
      className={`inline-flex items-center bg- px-2 py-0.5 rounded-lg text-sm font-medium ${chipColor}`}
    >
      {name}
    </span>
  );
};
