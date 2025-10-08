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
    | "gray";
}

const chipColors = {
  blue: "bg-blue-100 text-blue-800",
  green: "bg-green-100 text-green-800",
  red: "bg-red-100 text-red-800",
  yellow: "bg-yellow-100 text-yellow-800",
  purple: "bg-purple-100 text-purple-800",
  indigo: "bg-indigo-100 text-indigo-800",
  pink: "bg-pink-100 text-pink-800",
  gray: "bg-gray-200 text-gray-800"
};

export const Chip: React.FC<ChipInterface> = ({ name, color = "blue" }) => {
  const chipColor = chipColors[color];

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-xl text-sm font-medium ${chipColor}`}
    >
      {name}
    </span>
  );
};
