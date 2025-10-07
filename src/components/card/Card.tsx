import React from "react";
import { ReuseContainer } from "../container/ReuseContainer";

interface CardInterface {
  header?: React.ReactNode;
  body?: React.ReactNode;
  footer?: React.ReactNode;
}

export const Card: React.FC<CardInterface> = ({ header, body, footer }) => {
  return (
    <ReuseContainer className="flex-col w-xs border-2 border-gray-500 rounded-xl p-4 gap-8 shadow-[0_0_8px] shadow-gray-600">
      {header && (
        <ReuseContainer className="justify-start">{header}</ReuseContainer>
      )}
      {body && (
        <ReuseContainer className="justify-start">{body}</ReuseContainer>
      )}
      {footer && (
        <ReuseContainer className="justify-start">{footer}</ReuseContainer>
      )}
    </ReuseContainer>
  );
};
