import { CreateCustomerViewModel } from "../../domain/customers.model";
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
  const { createCustomer } = useCreateCustomerFacade();

  const handleSubmit = (data: CreateCustomerViewModel) => {
    return createCustomer.onCreate(data);
  };

  return (
    <CreateCustomerLogic
      defaultValues={defaultValues}
      onSubmit={handleSubmit}
      errors={createCustomer.error?.graphQLErrors}
    ></CreateCustomerLogic>
  );
};
