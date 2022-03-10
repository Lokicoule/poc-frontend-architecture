import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useCreateCustomerMutation } from "../../../api/hooks/customers.generated";
import { CreateCustomerViewModel } from "../../../view-models/domain/customers";
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
      onCompleted: ({ createCustomer }) => {
        toast.success(`${createCustomer.naming} a été ajouté(e) avec succès.`);
        navigate(`/backoffice/customers/view/${createCustomer.id}`);
      },
      onError: () =>
        toast.error(`La suppression du client ${data.naming} a échouée.`),
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
