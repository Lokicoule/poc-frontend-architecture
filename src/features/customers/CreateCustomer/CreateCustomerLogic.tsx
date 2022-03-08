import { FetchResult } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { CreateCustomerMutation } from "../../../api/hooks/customers.generated";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import {
  CreateCustomerView,
  CreateCustomerViewProps,
} from "./CreateCustomerView";
import { CreateCustomerViewModel } from "../../../view-models/domain/customers";

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
  code: yup.string().required("Le code client est requis."),
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

  const handleSubmit = async (data: CreateCustomerViewModel) => {
    await onSubmit(data)
      .then(() => {
        //send snackbar success
        //wait 5 secondes before redirection
        //redirection
        //cancel redirection
        form.reset();
      })
      .catch((err) => {
        console.error(err);
        //send snackbar error
      });
  };

  const handleReset = () => form.reset();

  return (
    <CreateCustomerView
      form={form}
      onSubmit={handleSubmit}
      onReset={handleReset}
      errors={errors}
    ></CreateCustomerView>
  );
};
