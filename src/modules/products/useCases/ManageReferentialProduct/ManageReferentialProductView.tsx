import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, Stack, TextField } from "@mui/material";
import { SetStateAction } from "react";
import { ReferentialTable } from "../../../referential/components/ReferentialTable";
import { ReferentialProductViewModel } from "../../domain/referential-product.model";

export type ManageReferentialProductViewProps = {
  referentialProductList: ReferentialProductViewModel[];
  onSearch: (event: { target: { value: SetStateAction<string> } }) => void;
};

export const ManageReferentialProductView = ({
  referentialProductList = [],
  onSearch,
}: ManageReferentialProductViewProps) => {
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
        data={referentialProductList}
        path="products"
      ></ReferentialTable>
    </>
  );
};
