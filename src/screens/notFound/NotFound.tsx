import React from "react";
import { ReuseContainer } from "../../components/container/ReuseContainer";
import ReuseText from "../../components/text/ReuseText";
import { Construction } from "lucide-react";

export const NotFound: React.FC = () => {
  return (
    <ReuseContainer>
      <ReuseText variant="header1">Not Found</ReuseText>
      <Construction />
    </ReuseContainer>
  );
};
