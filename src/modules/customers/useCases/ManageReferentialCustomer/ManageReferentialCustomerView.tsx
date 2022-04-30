import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, Stack, TextField } from "@mui/material";
import { SetStateAction } from "react";
import { ReferentialTable } from "../../../referential/components/ReferentialTable";
import { ReferentialCustomerViewModel } from "../../domain/ReferentialCustomerViewModel";

export type ManageReferentialCustomerViewProps = {
  referentialCustomerList: ReferentialCustomerViewModel[];
  onSearch: (event: { target: { value: SetStateAction<string> } }) => void;
};

export const ManageReferentialCustomerView = ({
  referentialCustomerList = [],
  onSearch,
}: ManageReferentialCustomerViewProps) => {
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

      <ReferentialTable
        data={referentialCustomerList}
        path="customers"
      ></ReferentialTable>
    </>
  );
};
