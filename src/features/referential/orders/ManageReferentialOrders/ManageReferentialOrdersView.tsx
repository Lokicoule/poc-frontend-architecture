import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, Stack, TextField } from "@mui/material";
import { SetStateAction } from "react";
import {
  ReferentialTable,
  ReferentialTableProps,
} from "../../components/ReferentialTable";

export type ManageReferentialOrdersViewProps = Pick<
  ReferentialTableProps,
  "data"
> & {
  onSearch: (event: { target: { value: SetStateAction<string> } }) => void;
};

export const ManageReferentialOrdersView = ({
  data = [],
  onSearch,
}: ManageReferentialOrdersViewProps) => {
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

      <ReferentialTable data={data} path="orders"></ReferentialTable>
    </>
  );
};
