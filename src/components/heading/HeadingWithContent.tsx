import React from "react";
import { ReuseContainer } from "../container/ReuseContainer";
import { ReuseHeading } from "./ReuseHeading";
import type {
  LucideIconType,
  TextVariantType
} from "../../shared/types/globalTypes";
import { TextVariantEnum } from "../../shared/enums/globalEnums";

interface HeadingWithContentInterface {
  title?: string;
  subtitle?: string;
  icon?: LucideIconType;
  content?: React.ReactNode;
  leftSideContent?: boolean;
  titleVariant?: TextVariantType;
  caption?: string;
}

export const HeadingWithContent: React.FC<HeadingWithContentInterface> = ({
  title,
  subtitle,
  icon,
  content,
  leftSideContent = false,
  titleVariant = TextVariantEnum.caption,
  caption
}) => {
  const Icon = icon;

  return (
    <ReuseContainer>
      {leftSideContent && (
        <>
          {Icon && <Icon className="bg-gray-400 h-10 w-10 p-2 rounded-md" />}
          {!Icon && content && content}
        </>
      )}
      <ReuseHeading
        title={title}
        titleVariant={titleVariant}
        subtitle={subtitle}
        caption={caption}
      />
      {!leftSideContent && (
        <>
          {Icon && <Icon className="bg-gray-400 h-10 w-10 p-2 rounded-md" />}
          {!Icon && content && content}
        </>
      )}
    </ReuseContainer>
  );
};
