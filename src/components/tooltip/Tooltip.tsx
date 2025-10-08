import React from "react";
import { ReuseContainer } from "../container/ReuseContainer";

interface TooltipInterface {
  children: React.ReactNode;
}

export const Tooltip: React.FC<TooltipInterface> = ({ children }) => {
  return <ReuseContainer>{children}</ReuseContainer>;
};
