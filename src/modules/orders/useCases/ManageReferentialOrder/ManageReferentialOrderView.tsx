import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, Stack, TextField } from "@mui/material";
import { SetStateAction } from "react";
import { ReferentialTable } from "../../../referential/components/ReferentialTable";
import { ReferentialOrderViewModel } from "../../domain/referential-order.model";

export type ManageReferentialOrderViewProps = {
  referentialOrderList: ReferentialOrderViewModel[];
  onSearch: (event: { target: { value: SetStateAction<string> } }) => void;
};

export const ManageReferentialOrderView = ({
  referentialOrderList = [],
  onSearch,
}: ManageReferentialOrderViewProps) => {
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
        data={referentialOrderList}
        path="orders"
      ></ReferentialTable>
    </>
  );
};
