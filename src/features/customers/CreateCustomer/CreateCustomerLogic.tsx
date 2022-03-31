import { FetchResult } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { CreateCustomerMutation } from "../../../api/fdo/customers.generated";
import { CreateCustomerViewModel } from "../../../types/customers";
import {
  CreateCustomerView,
  CreateCustomerViewProps,
} from "./CreateCustomerView";

type CreateCustomerLogicProps = Pick<CreateCustomerViewProps, "errors"> & {
  defaultValues: CreateCustomerViewModel;
  onSubmit: (
    data: CreateCustomerViewModel
  ) => Promise<
    FetchResult<
      CreateCustomerMutation,
      Record<string, any>,
      Record<string, any>
    >
  >;
};

const postalCodeRule = new RegExp(/^(?:0[1-9]|[1-8]\d|9[0-8])\d{3}$/);

const schema = yup.object().shape({
  naming: yup.string().required("Le nom du client est requis."),
  zipCode: yup
    .string()
    .matches(postalCodeRule, "Code postal FR attendu.")
    .required("Le code postal du client est requis."),
  city: yup.string().required("La ville du client est requise."),
  address: yup.string().required("L'adresse du client est requise."),
});

export const CreateCustomerLogic = ({
  defaultValues,
  onSubmit,
  errors,
}: CreateCustomerLogicProps) => {
  const form = useForm<CreateCustomerViewModel>({
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });

  const handleReset = () => form.reset();
  const handleSubmit = async (data: CreateCustomerViewModel) => {
    await onSubmit(data);
  };

  return (
    <CreateCustomerView
      form={form}
      onSubmit={handleSubmit}
      onReset={handleReset}
      errors={errors}
    ></CreateCustomerView>
  );
};
