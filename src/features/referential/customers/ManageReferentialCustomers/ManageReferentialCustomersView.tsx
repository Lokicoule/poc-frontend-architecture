import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, Stack, TextField } from "@mui/material";
import { SetStateAction } from "react";
import {
  ReferentialCustomersTable,
  ReferentialCustomersTableProps,
} from "./components/ReferentialCustomersTable";

export type ManageReferentialCustomersViewProps = Pick<
  ReferentialCustomersTableProps,
  "data"
> & {
  onSearch: (event: { target: { value: SetStateAction<string> } }) => void;
};

export const ManageReferentialCustomersView = ({
  data = [],
  onSearch,
}: ManageReferentialCustomersViewProps) => {
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
      </Stack>

      <ReferentialCustomersTable data={data}></ReferentialCustomersTable>
    </>
  );
};
