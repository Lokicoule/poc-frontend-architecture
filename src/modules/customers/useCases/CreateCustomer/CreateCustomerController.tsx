import { CreateCustomerViewModel } from "../../domain/CreateCustomerViewModel";
import { useCreateCustomerFacade } from "../../hooks/useCreateCustomerFacade";
import { CreateCustomerLogic } from "./CreateCustomerLogic";

const defaultValues = {
  code: "",
  naming: "",
  zipCode: "",
  city: "",
  address: "",
} as Readonly<CreateCustomerViewModel>;

export const CreateCustomerController = () => {
  const { createCustomer, error } = useCreateCustomerFacade();

  const handleSubmit = (data: CreateCustomerViewModel) => {
    return createCustomer(data);
  };

  return (
    <CreateCustomerLogic
      defaultValues={defaultValues}
      onSubmit={handleSubmit}
      errors={error?.graphQLErrors}
    ></CreateCustomerLogic>
  );
};
