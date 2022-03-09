import { useCreateCustomerMutation } from "../../../api/hooks/customers.generated";
import { CreateCustomerViewModel } from "../../../view-models/domain/customers";
import { CreateCustomerLogic } from "./CreateCustomerLogic";

const defaultValues = {
  code: "",
  naming: "",
  zipCode: "",
  city: "",
  address: "",
} as CreateCustomerViewModel;

export const CreateCustomerController = () => {
  const [createCustomer, { error }] = useCreateCustomerMutation({});

  const mapViewModelToDto = (data: CreateCustomerViewModel) => ({
    address: data.address,
    city: data.city,
    code: data.code,
    naming: data.naming,
    zipCode: data.zipCode,
  });

  const handleSubmit = (data: CreateCustomerViewModel) => {
    return createCustomer({
      variables: {
        createCustomerInput: mapViewModelToDto(data),
      },
    });
  };

  return (
    <CreateCustomerLogic
      defaultValues={defaultValues}
      onSubmit={handleSubmit}
      errors={error?.graphQLErrors}
    ></CreateCustomerLogic>
  );
};
