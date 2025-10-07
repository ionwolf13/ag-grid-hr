import React from "react";
import { Card } from "./Card";
import { ReuseHeading } from "../heading/ReuseHeading";
import type { LucideIconType } from "../../shared/types/globalTypes";
import ReuseText from "../text/ReuseText";
import { TextVariantEnum } from "../../shared/enums/globalEnums";

interface MetricCardInterface {
  title?: string;
  subtitle?: string;
  icon: LucideIconType;
  value: number | string;
}

export const MetricCard: React.FC<MetricCardInterface> = ({
  title,
  subtitle,
  icon,
  value
}) => {
  const Icon = icon;
  return (
    <Card
      header={[
        <ReuseHeading
          title={title}
          subtitle={subtitle}
          titleVariant={TextVariantEnum.header3}
        />,
        <Icon />
      ]}
      body={[<ReuseText variant="header2"> {value}</ReuseText>]}
    />
  );
};
