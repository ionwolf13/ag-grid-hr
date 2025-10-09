import React from "react";
import { ReuseContainer } from "../container/ReuseContainer";

interface CardInterface {
  header?: React.ReactNode;
  body?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardInterface> = ({
  header,
  body,
  footer,
  className
}) => {
  return (
    <ReuseContainer
      className={`flex-col w-min whitespace-nowrap border-2 border-gray-500 rounded-xl p-4 gap-6 shadow-[0_0_8px] shadow-gray-600 ${className}`}
    >
      {header && (
        <ReuseContainer className="justify-start">{header}</ReuseContainer>
      )}
      {body && (
        <ReuseContainer className="justify-start flex-col gap-4">
          {body}
        </ReuseContainer>
      )}
      {footer && (
        <ReuseContainer className="justify-start">{footer}</ReuseContainer>
      )}
    </ReuseContainer>
  );
};
