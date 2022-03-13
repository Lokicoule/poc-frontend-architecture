import SearchIcon from "@mui/icons-material/Search";
import { Button, InputAdornment, Stack, TextField } from "@mui/material";
import { SetStateAction } from "react";
import { Link } from "react-router-dom";
import {
  CustomersTable,
  CustomersTableProps,
} from "./components/CustomersTable";

export type ManageCustomersViewProps = Pick<
  CustomersTableProps,
  "data" | "onRemove"
> & {
  onSearch: (event: { target: { value: SetStateAction<string> } }) => void;
};

export const ManageCustomersView = ({
  data = [],
  onRemove,
  onSearch,
}: ManageCustomersViewProps) => {
  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={5}
        mt={3}
      >
        <TextField
          label="Rechercher"
          onChange={onSearch}
          variant="standard"
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        ></TextField>
        <Button
          component={Link}
          variant="contained"
          style={{ textTransform: "none" }}
          to="/backoffice/customers/create"
        >
          Ajouter un nouveau client
        </Button>
      </Stack>

      <CustomersTable data={data} onRemove={onRemove}></CustomersTable>
    </>
  );
};
