import { FetchResult } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { isEqual } from "lodash";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { UpdateCustomerMutation } from "../../../api/hooks/customers.generated";
import { UpdateCustomerViewModel } from "../../../view-models/domain/customers";
import {
  UpdateCustomerView,
  UpdateCustomerViewProps,
} from "./UpdateCustomerView";

type UpdateCustomerLogicProps = Pick<UpdateCustomerViewProps, "errors"> & {
  defaultValues: UpdateCustomerViewModel;
  onSubmit: (
    data: UpdateCustomerViewModel
  ) => Promise<
    FetchResult<
      UpdateCustomerMutation,
      Record<string, any>,
      Record<string, any>
    >
  >;
};

const postalCodeRule = new RegExp(/^(?:0[1-9]|[1-8]\d|9[0-8])\d{3}$/);

const schema = yup.object().shape({
  code: yup
    .string()
    .required("Le code du client est requis.")
    .min(5, "Le code client doit contenir au moins 5 caractères."),
  naming: yup.string().required("Le nom du client est requis."),
  zipCode: yup
    .string()
    .matches(postalCodeRule, "Code postal FR attendu.")
    .required("Le code postal du client est requis."),
  city: yup.string().required("La ville du client est requise."),
  address: yup.string().required("L'adresse du client est requise."),
});

export const UpdateCustomerLogic = ({
  defaultValues,
  onSubmit,
  errors,
}: UpdateCustomerLogicProps) => {
  const form = useForm<UpdateCustomerViewModel>({
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (data: UpdateCustomerViewModel) => {
    if (!isEqual(defaultValues, data))
      await onSubmit(data).then(() => {
        form.reset();
      });
  };

  const handleReset = () => form.reset();

  return (
    <UpdateCustomerView
      form={form}
      onSubmit={handleSubmit}
      onReset={handleReset}
      errors={errors}
    ></UpdateCustomerView>
  );
};
