import { Paper, Table as MuiTable, TableContainer } from "@mui/material";
import { ColumnProps } from "..";
import { TableBody } from "./TableBody";
import { TableHeader } from "./TableHeader";

interface DataProps {
  id: string;
}

interface TableProps {
  columns: ColumnProps[];
  data: DataProps[];
}

export const Table = ({ columns, data }: TableProps) => {
  return (
    <TableContainer component={Paper}>
      <MuiTable>
        <TableHeader columns={columns}></TableHeader>
        <TableBody data={data} columns={columns}></TableBody>
      </MuiTable>
    </TableContainer>
  );
};
