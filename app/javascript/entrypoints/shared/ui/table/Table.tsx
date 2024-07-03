import React from "react";
import {
  DataTable,
  DataTableProps,
  DataTableValue,
} from "primereact/datatable";

import { Column, ColumnProps } from "primereact/column";

export type TableColumn = ColumnProps;

export type TableProps = DataTableProps<DataTableValue[]> & {
  columns: TableColumn[];
};

export const Table: React.FC<TableProps> = ({ columns, ...tableProps }) => {
  return (
    <DataTable {...tableProps}>
      {columns.map((col) => (
        <Column {...col} />
      ))}
    </DataTable>
  );
};
