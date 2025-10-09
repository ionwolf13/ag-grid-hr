import React from "react";
import { Chip } from "../../components/chips/chip";
import type { ICellRendererParams } from "ag-grid-community";
import { ReuseContainer } from "../../components/container/ReuseContainer";

export const ChipCell: React.FC<ICellRendererParams> = (props) => {
  const colorsObject = {
    Active: "green",
    Inactive: "gray",
    Marketing: "orange",
    HR: "brown",
    Finance: "yellow",
    Sales: "pink",
    Design: "purple",
    Engineering: "blue",
    error: "red"
  };

  const colDef = props.colDef.colId || "error";
  const value =
    colDef === "status"
      ? props.data?.position.status
      : props.data.position.department || "error";

  const color = colorsObject[value];

  return (
    <ReuseContainer className="h-full">
      <Chip name={value} color={color} />
    </ReuseContainer>
  );
};
