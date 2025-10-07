import React from "react";
import { ReuseContainer } from "../container/ReuseContainer";

interface NavInterface {
  left?: React.ReactNode;
  middle?: React.ReactNode;
  right?: React.ReactNode;
}

export const Nav: React.FC<NavInterface> = ({ left, middle, right }) => {
  return (
    <div className=" w-full flex justify-between items-center left">
      {left && (
        <ReuseContainer className="w-full flex items-center">
          {left}
        </ReuseContainer>
      )}
      {middle && (
        <ReuseContainer className="flex-1 flex justify-center">
          {middle}
        </ReuseContainer>
      )}
      {right && (
        <ReuseContainer className="w-min left-auto">{right}</ReuseContainer>
      )}
    </div>
  );
};
