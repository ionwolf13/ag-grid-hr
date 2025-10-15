import type { ColDef } from "ag-grid-community";

export const defaultColumnDefProperties: ColDef = {
  minWidth: 164,
  width: 164,
  flex: 1,
  resizable: true,
  editable: true,
  cellClass: "ag-cell-allow-overflow",
  cellStyle: {
    overflow: "visible",
  },
};
