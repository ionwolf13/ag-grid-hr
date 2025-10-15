import type { ColDef } from "ag-grid-community";
import type { ValueFormatterParams } from "ag-grid-community";
import { ButtonCell } from "../ReuseCells/ButtonCell";
import { ChipCell } from "../ReuseCells/ChipCells";

export const jobColumnDefs: ColDef[] = [
  { field: "id", colId: "id", sort: "asc", editable: false },
  {
    field: "title",
    colId: "title",
    valueFormatter: (params: ValueFormatterParams) => {
      return `${params.data.name.first}`;
    },
  },
  {
    field: "department",
    colId: "department",
    valueFormatter: (params: ValueFormatterParams) => {
      return `${params.data.name.last}`;
    },
  },
  {
    field: "location",
    colId: "location",
    cellEditor: "agSelectCellEditor",
    cellEditorParams: {
      values: ["Marketing", "HR", "Finance", "Sales", "Design", "Engineering"],
    },
    cellRenderer: ChipCell,
  },
  {
    field: "employmentType",
    colId: "employmentType",
    valueFormatter: (params: ValueFormatterParams) => {
      return `${params.data.position.title}`;
    },
  },
  {
    field: "salaryRange",
    colId: "salaryRange",
    cellEditor: "agSelectCellEditor",
    cellEditorParams: {
      values: ["active", "inactive"],
    },
    cellRenderer: ChipCell,
    width: 100,
    minWidth: 100,
  },
];
