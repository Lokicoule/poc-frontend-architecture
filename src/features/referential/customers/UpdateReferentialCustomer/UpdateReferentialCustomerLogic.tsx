import { FetchResult } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { isEqual } from "lodash";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { UpdateReferentialCustomerMutation } from "../../../../api/hooks/referentialCustomer.generated";
import { ParameterReferentialEnum } from "../../../../api/types/types.generated";
import { ReferentialCustomerViewModel } from "../../../../view-models/referential/customers/ReferentialCustomerViewModel";
import {
  UpdateReferentialCustomerView,
  UpdateReferentialCustomerViewProps,
} from "./UpdateReferentialCustomerView";

type UpdateReferentialCustomerLogicProps = Pick<
  UpdateReferentialCustomerViewProps,
  "errors"
> & {
  defaultValues: ReferentialCustomerViewModel;
  onSubmit: (
    data: ReferentialCustomerViewModel
  ) => Promise<
    FetchResult<
      UpdateReferentialCustomerMutation,
      Record<string, any>,
      Record<string, any>
    >
  >;
};

const schema = yup.object().shape({
  useCase: yup.string().required("Le cas d'usagex est requis."),
  parameters: yup
    .array()
    .of(
      yup.object().shape({
        key: yup.string().required("Une clé doit être sélectionnée."),
        value: yup
          .string()
          //.mixed()
          .required("Une valeur doit être renseignée.")
          .when("key", {
            is: (keyValue: string) =>
              keyValue === ParameterReferentialEnum.Counter,
            then: yup
              .string()
              .matches(/^[0-9]+$/, "Doit contenir des chiffres"),
          }),
      })
    )
    .test("unique_key", "La clé doit être unique.", (parameters, ctx) => {
      const { createError } = ctx;
      const stack = new Set();
      const errors: yup.ValidationError[] = [];
      //TODO to improve with reduce
      parameters?.forEach((param, idx) => {
        if (stack.has(param["key"]))
          errors.push(
            new yup.ValidationError(
              `La clé ${param["key"]} est déjà utilisée.`,
              parameters[idx].key,
              `parameters[${idx}].key`
            )
          );
        else stack.add(param["key"]);
      });
      if (errors && errors.length > 0) {
        return createError({
          message: () => errors,
        });
      }
      return true;
    }),
});

export const UpdateReferentialCustomerLogic = ({
  defaultValues,
  onSubmit,
  errors,
}: UpdateReferentialCustomerLogicProps) => {
  const form = useForm<ReferentialCustomerViewModel>({
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (data: ReferentialCustomerViewModel) => {
    if (!isEqual(defaultValues, data)) await onSubmit(data);
  };

  const handleReset = () => form.reset();

  return (
    <UpdateReferentialCustomerView
      form={form}
      onSubmit={handleSubmit}
      onReset={handleReset}
      errors={errors}
    ></UpdateReferentialCustomerView>
  );
};
