import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useCreateCustomerMutation } from "../../../api/fdo/customers.generated";
import { CreateCustomerViewModel } from "../../../types/customers";
import { CreateCustomerLogic } from "./CreateCustomerLogic";

const defaultValues = {
  code: "",
  naming: "",
  zipCode: "",
  city: "",
  address: "",
} as Readonly<CreateCustomerViewModel>;

export const CreateCustomerController = () => {
  const navigate = useNavigate();
  const [createCustomer, { error }] = useCreateCustomerMutation({
    update(cache, { data: addedCustomer }) {
      cache.modify({
        fields: {
          getCustomer(existingCustomer, { toReference }) {
            return addedCustomer
              ? toReference(addedCustomer)
              : existingCustomer;
          },
          getCustomers: (existingItems = [], { toReference }) => {
            return (
              (addedCustomer?.createCustomer && [
                ...existingItems,
                toReference(addedCustomer.createCustomer),
              ]) ||
              existingItems
            );
          },
        },
      });
    },
  });

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
      onCompleted: ({ createCustomer }) => {
        toast.success(`${createCustomer.naming} a été ajouté(e) avec succès.`);
        navigate(`/backoffice/customers/view/${createCustomer.id}`);
      },
      onError: () => toast.error(`L'ajout du client ${data.naming} a échoué.`),
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
