import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, Stack, TextField } from "@mui/material";
import { SetStateAction } from "react";
import { ReferentialTable } from "../../../referential/components/ReferentialTable";
import { ParamReferentialOrderViewModelProps } from "../../domain/parameter-referential-order.model";
import { ReferentialOrderViewModel } from "../../domain/referential-order.model";
import {
  ParameterReferentialEnum,
  UseCaseReferentialEnum,
} from "../../dtos/orders.dto.generated";

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

      <ReferentialTable<
        UseCaseReferentialEnum,
        ParameterReferentialEnum,
        ParamReferentialOrderViewModelProps,
        ReferentialOrderViewModel
      >
        data={referentialOrderList}
        path="orders"
      ></ReferentialTable>
    </>
  );
};
