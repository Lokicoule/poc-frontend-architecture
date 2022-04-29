import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import { Control, FormState, useFieldArray } from "react-hook-form";
import { ColumnProps } from "../../../../../components/Tables";
import { FormInputText } from "../../../../../components/Form/FormInput";
import { ReferentialViewModel } from "../../../../../viewModels/referential";
import { SelectParamKey } from "./SelectParamKey";
import { ReferentialParamsTableFormView } from "./ReferentialParamsTableFormView";

export type ReferentialParamsTableFormLogicProps = {
  control: Control<any, any>;
  formState: FormState<ReferentialViewModel>;
  parameterReferentialEnum: any;
};

export const ReferentialParamsTableFormLogic = ({
  control,
  formState,
  parameterReferentialEnum,
}: ReferentialParamsTableFormLogicProps) => {
  const { fields, append, remove } = useFieldArray({
    name: "parameters",
    control,
  });

  const columns: ColumnProps[] = [
    {
      key: "key",
      label: "Clé",
      content: (item, idx) => {
        console.log(item);
        console.log(`parameters[${idx}].key`);
        return (
          <SelectParamKey
            control={control}
            defaultValue=""
            error={!!getParameter(formState, idx)?.key}
            helperText={getParameter(formState, idx)?.key?.message}
            name={`parameters[${idx}].key`}
            values={Object.values(parameterReferentialEnum)}
          ></SelectParamKey>
        );
      },
    },
    {
      key: "value",
      label: "Valeur",
      content: (item, idx) => {
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
      content: (item, idx) => {
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
    _formState: FormState<ReferentialViewModel>,
    idx: number
  ) => _formState?.errors?.parameters?.[idx];

  const handleAppend = () =>
    append({
      key: "",
      value: "",
    });

  return (
    <ReferentialParamsTableFormView
      columns={columns}
      data={fields}
      onAppend={handleAppend}
    ></ReferentialParamsTableFormView>
  );
};
