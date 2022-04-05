import FormControlLabel from "@mui/material/FormControlLabel";
import Paper from "@mui/material/Paper";
import Switch from "@mui/material/Switch";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import { sortBy } from "lodash";
import { EnhancedTableBody, EnhancedTableBodyProps } from "./EnhancedTableBody";
import { EnhancedTableHeader } from "./EnhancedTableHeader";
import { EnhancedTableToolbar } from "./EnhancedTableToolbar";
import { useDense } from "./hooks/useDense";
import { usePagination } from "./hooks/usePagination";
import { useTableSelect } from "./hooks/useTableSelect";
import { useTableSort } from "./hooks/useTableSort";

type TableProps = Pick<EnhancedTableBodyProps, "columns" | "data"> & {
  title: string;
  onRemove: (ids: string[]) => void;
};

const ROWS_PER_PAGE = [5, 10, 25, 50, 100];

export const EnhancedTable = ({
  columns,
  data,
  title,
  onRemove,
}: TableProps) => {
  const { sort, handleSort, handleResetSort } = useTableSort();
  const { selected, handleSelect, handleSelectAll, handleDeselectAll } =
    useTableSelect();
  const { dense, handleChangeDense } = useDense(false);
  const {
    page,
    rowsPerPage,
    emptyRows,
    handleChangePage,
    handleChangeRowsPerPage,
  } = usePagination(data.length);

  const handleRemove = () => {
    onRemove([...selected]);
    handleChangePage(undefined, 0);
    handleDeselectAll();
  };

  const sortedList = sort.isReverse
    ? sortBy(data, sort.property).reverse()
    : sortBy(data, sort.property);

  return (
    <>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <EnhancedTableToolbar
          numSelected={selected.length}
          title={title}
          onRemove={handleRemove}
          onFilter={handleResetSort}
        />
        <TableContainer>
          <Table
            aria-labelledby={title.replace(" ", "-")}
            size={dense ? "small" : "medium"}
          >
            <EnhancedTableHeader
              numSelected={selected.length}
              order={sort.isReverse}
              orderBy={sort.property}
              onSelectAll={handleSelectAll(data)}
              onSort={handleSort}
              columns={columns}
              rowCount={data.length}
            />
            <EnhancedTableBody
              data={sortedList.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              )}
              columns={columns}
              emptyRows={emptyRows}
              dense={dense}
              onSelect={handleSelect}
              selected={selected}
            ></EnhancedTableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={ROWS_PER_PAGE}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </>
  );
};
