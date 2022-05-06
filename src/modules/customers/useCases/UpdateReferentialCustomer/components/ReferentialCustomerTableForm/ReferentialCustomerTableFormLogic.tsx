import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, MenuItem } from "@mui/material";
import { Control, FormState, useFieldArray } from "react-hook-form";
import {
  FormInputSelect,
  FormInputText,
} from "../../../../../../components/Form/FormInput";
import { ColumnProps } from "../../../../../../components/Tables";
import { ReferentialCustomerViewModelProps } from "../../../../domain/referential-customer.model";
import { ParameterReferentialEnum } from "../../../../dtos/customers.dto.generated";
import { ReferentialCustomerTableFormView } from "./ReferentialCustomerTableFormView";

export type ReferentialCustomerTableFormLogicProps = {
  control: Control<any, any>;
  formState: FormState<ReferentialCustomerViewModelProps>;
};

export const ReferentialCustomerTableFormLogic = ({
  control,
  formState,
}: ReferentialCustomerTableFormLogicProps) => {
  const { fields, append, remove } = useFieldArray({
    name: "parameters",
    control,
  });

  const columns: ColumnProps[] = [
    {
      key: "key",
      label: "Clé",
      content: (item, idx) => {
        return (
          <FormInputSelect
            label="Type du paramètre"
            name={`parameters[${idx}].key`}
            control={control}
            error={!!getParameter(formState, idx)?.key}
            helperText={getParameter(formState, idx)?.key?.message}
          >
            {Object.values(ParameterReferentialEnum)?.map((item, idx) => (
              <MenuItem
                key={`menu-item-parameter-referential-customer-${idx}`}
                value={item}
              >
                {item}
              </MenuItem>
            ))}
          </FormInputSelect>
        );
      },
    },
    {
      key: "value",
      label: "Valeur",
      content: (_item, idx) => {
        return (
          <FormInputText
            name={`parameters[${idx}].value`}
            control={control}
            label="Valeur"
            fullWidth
            error={!!getParameter(formState, idx)?.value}
            helperText={getParameter(formState, idx)?.value?.message}
          />
        );
      },
    },
    {
      key: "actions",
      label: "Action",
      content: (_item, idx) => {
        if (!idx || (!!idx && idx <= 0)) return;
        return (
          <IconButton color="secondary" onClick={() => remove(idx)}>
            <DeleteIcon />
          </IconButton>
        );
      },
    },
  ];

  const getParameter = (
    formState: FormState<ReferentialCustomerViewModelProps>,
    idx: number
  ) => formState?.errors?.parameters?.[idx];

  const handleAppend = () =>
    append({
      key: "",
      value: "",
    });
  return (
    <ReferentialCustomerTableFormView
      columns={columns}
      fields={fields}
      onAppend={handleAppend}
    ></ReferentialCustomerTableFormView>
  );
};
