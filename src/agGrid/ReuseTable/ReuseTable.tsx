import React from "react";
import { AgGridReact } from "ag-grid-react";
import {
  columnDefs,
  defaultColumnDefProperties
} from "../columnDefs/columnDefs";
import { dataSetOne } from "../../data/dataSet";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "ag-grid-community/styles/ag-theme-balham.css";
import "ag-grid-community/styles/ag-theme-material.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

export const ReuseTable: React.FC = () => {
  const hrColumnDefs = columnDefs;

  return (
    <div style={{}}>
      <h2 className="text-lg border-2 border-purple-500">HR Table</h2>
      <div
        className={`ag-theme-quartz-dark`}
        style={{ width: "100%", height: "800px" }}
      >
        <AgGridReact
          rowData={dataSetOne}
          columnDefs={hrColumnDefs}
          defaultColDef={defaultColumnDefProperties}
          theme={`legacy`}
        />
      </div>
    </div>
  );
};
