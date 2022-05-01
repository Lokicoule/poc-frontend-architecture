import { Stack, TextField, InputAdornment } from "@mui/material";
import { SetStateAction } from "react";
import { ResponsiveLinkButton } from "../../../../components/ResponsiveButton";
import {
  CustomersTableProps,
  CustomersTable,
} from "./components/CustomersTable";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";

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

        <ResponsiveLinkButton
          label="Ajouter un nouveau client"
          to="/backoffice/customers/create"
          iconComponent={<AddIcon></AddIcon>}
        ></ResponsiveLinkButton>
      </Stack>

      <CustomersTable data={data} onRemove={onRemove}></CustomersTable>
    </>
  );
};
