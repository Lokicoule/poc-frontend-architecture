import { FetchResult } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import {
  CustomerViewModel,
  UpdateCustomerViewModelProps,
} from "../../domain/customers.model";
import { customersNavigationHelper } from "../../helpers/customers-navigation.helper";
import { UpdateCustomerMutation } from "../../operations/customers.generated";
import {
  UpdateCustomerView,
  UpdateCustomerViewProps,
} from "./UpdateCustomerView";

type UpdateCustomerLogicProps = Pick<UpdateCustomerViewProps, "errors"> & {
  defaultValues: CustomerViewModel;
  onSubmit: (
    updatedCustomer: UpdateCustomerViewModelProps
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

const areEqual = (
  defaultValues: CustomerViewModel,
  updatedCustomer: UpdateCustomerViewModelProps
) => {
  const customer = CustomerViewModel.create({
    id: defaultValues.id,
    ...updatedCustomer,
  });
  return defaultValues.equals(customer);
};

export const UpdateCustomerLogic = ({
  defaultValues,
  onSubmit,
  errors,
}: UpdateCustomerLogicProps) => {
  const navigate = useNavigate();

  const form = useForm<UpdateCustomerViewModelProps>({
    defaultValues: defaultValues.props,
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (
    updatedCustomer: UpdateCustomerViewModelProps
  ) => {
    if (areEqual(defaultValues, updatedCustomer)) {
      toast.info("Nothing to save");
      return;
    }
    await onSubmit(updatedCustomer)
      .then((result) => {
        const { id, naming } = result.data?.updateCustomer ?? {
          id: undefined,
          naming: "",
        };
        if (id) {
          toast.success(`${naming} a été modifié(e) avec succès.`);
          navigate(customersNavigationHelper.view(id));
        } else {
          toast.warn(`Le client retourné par le serveur n'est pas valide.`);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error(
          `La modification du client ${updatedCustomer.naming} a échouée.`
        );
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
