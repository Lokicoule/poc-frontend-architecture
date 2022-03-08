import _ from "lodash";
import {
  TableBody as MuiTableBody,
  TableCell,
  TableRow,
  useTheme,
} from "@mui/material";
import { ColumnProps } from "..";

interface DataProps {
  id: string;
}

interface TableBodyProps {
  columns: ColumnProps[];
  data: DataProps[];
}

export const TableBody = ({ data, columns }: TableBodyProps) => {
  const theme = useTheme();

  const createKey = (item: DataProps, column: ColumnProps) => {
    return item.id + (column.path || column.key);
  };

  const renderCell = (item: DataProps, column: ColumnProps) => {
    if (column.content) return column.content(item);
    if (column.path) return _.get(item, column.path);
    throw new Error("Content or path should be defined.");
  };

  return (
    <MuiTableBody>
      {data?.map((item) => (
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
          key={item.id}
        >
          {columns?.map((column) => (
            <TableCell align="center" key={createKey(item, column)}>
              {renderCell(item, column)}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </MuiTableBody>
  );
};
