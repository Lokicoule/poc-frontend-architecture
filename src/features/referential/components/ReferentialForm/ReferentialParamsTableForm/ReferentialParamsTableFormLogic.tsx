import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import { Control, FormState, useFieldArray } from "react-hook-form";
import { ParameterReferentialEnum } from "../../../../../api/types/types.generated";
import { ColumnProps } from "../../../../../components";
import { FormInputText } from "../../../../../components/Form/FormInputs";
import { ReferentialViewModel } from "../../../../../view-models/referential";
import { SelectParamKey } from "./SelectParamKey";
import { ReferentialParamsTableFormView } from "./ReferentialParamsTableFormView";

export type ReferentialParamsTableFormLogicProps = {
  control: Control<any, any>;
  formState: FormState<ReferentialViewModel>;
};

export const ReferentialParamsTableFormLogic = ({
  control,
  formState,
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
        return (
          <SelectParamKey
            control={control}
            defaultValue=""
            error={
              formState?.errors?.parameters &&
              !!formState?.errors?.parameters[idx]?.key
            }
            helperText={
              formState?.errors?.parameters &&
              formState?.errors?.parameters[idx]?.key?.message
            }
            name={`parameters[${idx}].key`}
            values={Object.values(ParameterReferentialEnum)}
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
            error={
              formState?.errors?.parameters &&
              !!formState?.errors?.parameters[idx]?.value
            }
            helperText={
              formState?.errors?.parameters &&
              formState?.errors?.parameters[idx]?.value?.message
            }
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
