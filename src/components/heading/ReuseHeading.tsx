import React from "react";
import { ReuseContainer } from "../container/ReuseContainer";
import { TextVariantEnum } from "../../shared/enums/globalEnums";
import type { TextVariantType } from "../../shared/types/globalTypes";
import ReuseText from "../text/ReuseText";

interface ReuseHeadingInterface {
  title?: string;
  titleVariant?: TextVariantType;
  subtitle?: string;
  caption?: string;
}

export const ReuseHeading: React.FC<ReuseHeadingInterface> = ({
  title,
  subtitle,
  titleVariant = TextVariantEnum.header2,
  caption
}) => {
  return (
    <ReuseContainer className="flex-col items-start">
      {title && <ReuseText variant={titleVariant}> {title}</ReuseText>}
      {subtitle && <ReuseText variant="subtitle2">{subtitle}</ReuseText>}
      {caption && <ReuseText variant="tooltip"> {caption}</ReuseText>}
    </ReuseContainer>
  );
};
