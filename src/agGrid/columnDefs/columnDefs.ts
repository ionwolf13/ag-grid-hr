import type { ColDef } from "ag-grid-community";
import type { ValueFormatterParams } from "ag-grid-community";

export const columnDefs: ColDef[] = [
  { field: "employeeId", colId: "employeeId", sort: "asc" },
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
    valueFormatter: (params: ValueFormatterParams) => {
      return `${params.data.position.department}`;
    }
  },
  {
    field: "position",
    colId: "position",
    valueFormatter: (params: ValueFormatterParams) => {
      return `${params.data.position.title}`;
    }
  },
  {
    field: "dateOfHire",
    colId: "dateOfHire",
    valueFormatter: (params: ValueFormatterParams) => {
      return `${params.data.position.dateOfHire}`;
    }
  },
  {
    field: "status",
    colId: "status",
    valueFormatter: (params: ValueFormatterParams) => {
      return `${params.data.position.status}`;
    }
  },
  {
    field: "email",
    colId: "email",
    valueFormatter: (params: ValueFormatterParams) => {
      return `${params.data.contact.email}`;
    }
  },
  {
    field: "employmentType",
    colId: "employmentType",
    valueFormatter: (params: ValueFormatterParams) => {
      return `${params.data.position.employmentType}`;
    }
  },
  {
    field: "supervisor",
    colId: "supervisor",
    valueFormatter: (params: ValueFormatterParams) => {
      return `${params.data.position.reportsTo}`;
    }
  },
  {
    field: "username",
    colId: "username",
    valueFormatter: (params: ValueFormatterParams) => {
      return `${params.data.position.employmentType}`;
    }
  },
  {
    field: "phone",
    colId: "phone",
    valueFormatter: (params: ValueFormatterParams) => {
      return `${params.data.contact.phone}`;
    }
  }
];

export const defaultColumnDefProperties: ColDef = {
  minWidth: 170,
  width: 170,
  flex: 1,
  resizable: true,
  editable: true
};
