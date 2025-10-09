import React from "react";
import { ReuseContainer } from "../container/ReuseContainer";
import ReuseText from "../text/ReuseText";
import { TextVariantEnum } from "../../shared/enums/globalEnums";

interface TooltipInterface {
  children: React.ReactNode;
  tooltipTitle?: string;
}

export const Tooltip: React.FC<TooltipInterface> = ({
  children,
  tooltipTitle
}) => {
  return (
    <ReuseContainer className="relative group w-min inline-block">
      <ReuseContainer className="absolute z-9999 invisible left-1/2 -translate-x-1/2 pointer-events-none group-hover:visible top-10 mb-1 bg-[#182230] w-min px-2 py-1 rounded-lg">
        <ReuseText
          className="text-shadow-yellow-300 whitespace-nowrap"
          variant={TextVariantEnum.tooltip}
        >
          {tooltipTitle}
        </ReuseText>
      </ReuseContainer>
      {children}
    </ReuseContainer>
  );
};
