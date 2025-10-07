import React from "react";
import { ReuseContainer } from "../container/ReuseContainer";
import { ReuseHeading } from "./ReuseHeading";
import type { LucideIconType } from "../../shared/types/globalTypes";

interface HeadingWithContentInterface {
  title?: string;
  subtitle?: string;
  content: LucideIconType | "button" | "chip";
}

const contentElement = {
  icon: <></>,
  button: <>button</>,
  chip: <>chip</>
};

export const HeadingWithContent: React.FC<HeadingWithContentInterface> = ({
  title,
  subtitle,
  content
}) => {
  const Icon = content !== "button" && content !== "chip" && content;

  return (
    <ReuseContainer>
      <ReuseHeading title={title} subtitle={subtitle} />
      {Icon && <Icon />}
      {!Icon && contentElement[content]}
    </ReuseContainer>
  );
};
