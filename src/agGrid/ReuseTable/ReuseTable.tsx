import React from "react";
import { AgGridReact } from "ag-grid-react";
import { defaultColumnDefProperties } from "../columnDefs/defaultColumnDefs";
import type { ColDef } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "ag-grid-community/styles/ag-theme-balham.css";
import "ag-grid-community/styles/ag-theme-material.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

interface ReuseTableInterface {
  data: any[];
  columnDefs: ColDef[];
}

export const ReuseTable: React.FC<ReuseTableInterface> = ({
  data,
  columnDefs,
}) => {
  return (
    <div
      className={`ag-theme-quartz-dark`}
      style={{ width: "100%", height: "800px" }}
    >
      <AgGridReact
        rowData={data}
        columnDefs={columnDefs}
        defaultColDef={defaultColumnDefProperties}
        theme={`legacy`}
        groupTotalRow={"top"}
      />
    </div>
  );
};
