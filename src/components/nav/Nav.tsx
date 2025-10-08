import React from "react";
import { ReuseContainer } from "../container/ReuseContainer";

interface NavInterface {
  left?: React.ReactNode;
  middle?: React.ReactNode;
  right?: React.ReactNode;
  className?: string;
  bottomBorder?: boolean;
}

export const Nav: React.FC<NavInterface> = ({
  left,
  middle,
  right,
  className,
  bottomBorder = true
}) => {
  return (
    <ReuseContainer
      className={`w-full flex justify-center items-center left gap-x-2 ${
        bottomBorder ? "border-b-2 border-gray-400" : ""
      } ${className}`}
    >
      {left && <ReuseContainer className="w-full flex">{left}</ReuseContainer>}
      {middle && (
        <ReuseContainer className="flex-1 flex justify-center">
          {middle}
        </ReuseContainer>
      )}
      {right && (
        <ReuseContainer className="w-min left-auto">{right}</ReuseContainer>
      )}
    </ReuseContainer>
  );
};
