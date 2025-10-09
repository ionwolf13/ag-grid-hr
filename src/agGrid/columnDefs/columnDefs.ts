import type { ColDef } from "ag-grid-community";
import type { ValueFormatterParams } from "ag-grid-community";
import { ButtonCell } from "../ReuseCells/ButtonCell";
import { ChipCell } from "../ReuseCells/ChipCells";

export const columnDefs: ColDef[] = [
  { field: "employeeId", colId: "employeeId", sort: "asc", editable: false },
  {
    field: "firstName",
    colId: "firstName",
    valueFormatter: (params: ValueFormatterParams) => {
      return `${params.data.name.first}`;
    }
  },
  {
    field: "lastName",
    colId: "lastName",
    valueFormatter: (params: ValueFormatterParams) => {
      return `${params.data.name.last}`;
    }
  },
  {
    field: "department",
    colId: "department",
    cellEditor: "agSelectCellEditor",
    cellEditorParams: {
      values: ["Marketing", "HR", "Finance", "Sales", "Design", "Engineering"]
    },
    cellRenderer: ChipCell
  },
  {
    field: "position",
    colId: "position",
    valueFormatter: (params: ValueFormatterParams) => {
      return `${params.data.position.title}`;
    }
  },
  {
    field: "status",
    colId: "status",
    cellEditor: "agSelectCellEditor",
    cellEditorParams: {
      values: ["active", "inactive"]
    },
    cellRenderer: ChipCell,
    width: 100,
    minWidth: 100
  },
  {
    field: "supervisor",
    colId: "supervisor",
    valueFormatter: (params: ValueFormatterParams) => {
      return `${params.data.position.reportsTo}`;
    }
  },
  {
    field: "email",
    colId: "email",
    width: 200,
    minWidth: 200,
    valueFormatter: (params: ValueFormatterParams) => {
      return `${params.data.contact.email}`;
    }
  },
  {
    field: "phone",
    width: 120,
    minWidth: 120,
    colId: "phone",
    valueFormatter: (params: ValueFormatterParams) => {
      return `${params.data.contact.phone}`;
    }
  },
  {
    field: "Profile",
    width: 100,
    minWidth: 100,
    editable: false,
    cellRenderer: ButtonCell
  },
  {
    field: "Delete",
    width: 100,
    minWidth: 100,
    editable: false,
    cellRenderer: ButtonCell
  }
];

export const defaultColumnDefProperties: ColDef = {
  minWidth: 164,
  width: 164,
  flex: 1,
  resizable: true,
  editable: true,
  cellClass: "ag-cell-allow-overflow",
  cellStyle: {
    overflow: "visible"
  }
};
