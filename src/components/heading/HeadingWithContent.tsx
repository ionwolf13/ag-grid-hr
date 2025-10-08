import React from "react";
import { ReuseContainer } from "../container/ReuseContainer";
import { ReuseHeading } from "./ReuseHeading";
import type { LucideIconType } from "../../shared/types/globalTypes";

interface HeadingWithContentInterface {
  title?: string;
  subtitle?: string;
  content?: LucideIconType | "button" | "chip";
  leftSideContent?: boolean;
}

const contentElement = {
  icon: <></>,
  button: <>button</>,
  chip: <>chip</>
};

export const HeadingWithContent: React.FC<HeadingWithContentInterface> = ({
  title,
  subtitle,
  content,
  leftSideContent = false
}) => {
  const Icon = content !== "button" && content !== "chip" && content;

  return (
    <ReuseContainer>
      {leftSideContent && (
        <>
          {Icon && <Icon className="bg-gray-400 h-10 w-10 p-2 rounded-md" />}
          {!Icon && content && contentElement[content]}
        </>
      )}
      <ReuseHeading title={title} titleVariant="caption" subtitle={subtitle} />
      {!leftSideContent && (
        <>
          {Icon && <Icon className="bg-gray-400 h-10 w-10 p-2 rounded-md" />}
          {!Icon && content && contentElement[content]}
        </>
      )}
    </ReuseContainer>
  );
};
