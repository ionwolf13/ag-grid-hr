import React from "react";
import { AgGridReact } from "ag-grid-react";
import {
  columnDefs,
  defaultColumnDefProperties
} from "../columnDefs/columnDefs";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "ag-grid-community/styles/ag-theme-balham.css";
import "ag-grid-community/styles/ag-theme-material.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

interface ReuseTable {
  data: any[];
}

export const ReuseTable: React.FC = ({ data }) => {
  const hrColumnDefs = columnDefs;

  return (
    <div
      className={`ag-theme-quartz-dark`}
      style={{ width: "100%", height: "800px" }}
    >
      <AgGridReact
        rowData={data}
        columnDefs={hrColumnDefs}
        defaultColDef={defaultColumnDefProperties}
        theme={`legacy`}
        groupTotalRow={"top"}
      />
    </div>
  );
};
