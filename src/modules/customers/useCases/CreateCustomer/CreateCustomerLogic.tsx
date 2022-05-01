import { FetchResult } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import { CreateCustomerViewModelProps } from "../../domain/customers.model";
import { CreateCustomerMutation } from "../../operations/customers.generated";
import {
  CreateCustomerView,
  CreateCustomerViewProps,
} from "./CreateCustomerView";

type CreateCustomerLogicProps = Pick<CreateCustomerViewProps, "errors"> & {
  defaultValues: CreateCustomerViewModelProps;
  onSubmit: (
    data: CreateCustomerViewModelProps
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
  const navigate = useNavigate();
  const form = useForm<CreateCustomerViewModelProps>({
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });

  const handleReset = () => form.reset();
  const handleSubmit = async (data: CreateCustomerViewModelProps) => {
    await onSubmit(data)
      .then((result) => {
        toast.success(
          `${result.data?.createCustomer.naming} a été ajouté(e) avec succès.`
        );
        navigate(
          `/backoffice/customers/view/${result.data?.createCustomer.id}`
        );
      })
      .catch((error) =>
        toast.error(`L'ajout du client ${data.naming} a échoué.`)
      );
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
