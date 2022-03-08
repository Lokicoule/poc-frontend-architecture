import { TableCell, TableHead, TableRow, useTheme } from "@mui/material";
import { FC } from "react";
import { ColumnProps } from "..";

interface TableHeaderProps {
  columns: ColumnProps[];
}

export const TableHeader: FC<TableHeaderProps> = ({ columns }) => {
  const theme = useTheme();
  return (
    <TableHead>
      <TableRow
        sx={{
          root: {
            "&:nth-of-type(odd)": {
              backgroundColor: theme.palette.action.hover,
            },
            "&:last-child td, &:last-child th": {
              border: 0,
            },
          },
        }}
      >
        {columns?.map((column: ColumnProps) => (
          <TableCell
            sx={{
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.common.white,
              fontSize: 16,
            }}
            align="center"
            key={column.path || column.key}
          >
            {column.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
