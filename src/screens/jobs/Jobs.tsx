import React from "react";
import { ReuseContainer } from "../../components/container/ReuseContainer";

interface JobsInterface {}

export const Jobs: React.FC<JobsInterface> = () => {
  return (
    <ReuseContainer>
      <div>Jobs lol</div>
    </ReuseContainer>
  );
};
