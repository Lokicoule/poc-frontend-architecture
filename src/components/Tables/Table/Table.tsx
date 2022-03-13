import { Paper, Table as MuiTable, TableContainer } from "@mui/material";
import { TableBody, TableBodyProps } from "./TableBody";
import { TableHeader } from "./TableHeader";

type TableProps = TableBodyProps;

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
