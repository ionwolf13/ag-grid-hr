import React from "react";
import { ReuseContainer } from "../container/ReuseContainer";
import { MetricCard } from "./MetricCard";
import type { LucideIconType } from "../../shared/types/globalTypes";

type data = { title: string; icon: LucideIconType; value: string | number };

interface MetricCardRowInterface {
  keys: string[];
  data: Record<string, data>;
}

export const MetricCardRow: React.FC<MetricCardRowInterface> = ({
  keys,
  data
}) => {
  return (
    <ReuseContainer className="justify-evenly">
      {keys.map((key) => (
        <MetricCard
          key={`metric-card-${key}`}
          title={data[key].title}
          icon={data[key].icon}
          value={
            key === "departments"
              ? data[key].value.length
              : Number(data[key].value).toLocaleString()
          }
        />
      ))}
    </ReuseContainer>
  );
};
