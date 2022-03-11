import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  GetCustomerQuery,
  useGetCustomerQuery,
  useUpdateCustomerMutation,
} from "../../../api/hooks/customers.generated";
import { Loader } from "../../../components";
import { UpdateCustomerViewModel } from "../../../view-models/domain/customers";
import { UpdateCustomerLogic } from "./UpdateCustomerLogic";

type UpdateCustomerControllerProps = {
  customerId: string;
};

export const UpdateCustomerController = ({
  customerId,
}: UpdateCustomerControllerProps) => {
  const navigate = useNavigate();
  const { data, loading } = useGetCustomerQuery({
    variables: {
      getCustomerId: customerId,
    },
  });
  const [updateCustomer, { error }] = useUpdateCustomerMutation({
    update(cache, { data: updatedCustomer }) {
      cache.modify({
        fields: {
          getCustomer(existingCustomer, { toReference }) {
            return updatedCustomer
              ? toReference(updatedCustomer)
              : existingCustomer;
          },
        },
      });
    },
  });

  const mapViewModelToDto = (dataVM: UpdateCustomerViewModel) => {
    return {
      address: dataVM.address,
      city: dataVM.city,
      code: dataVM.code,
      naming: dataVM.naming,
      zipCode: dataVM.zipCode,
    };
  };

  const mapDtoToViewModel = (
    dataDto: GetCustomerQuery | undefined
  ): UpdateCustomerViewModel => {
    const customer = dataDto?.getCustomer;
    return {
      address: customer?.address || "",
      city: customer?.city || "",
      code: customer?.code || "",
      naming: customer?.naming || "",
      zipCode: customer?.zipCode || "",
    };
  };

  const handleSubmit = (dataVM: UpdateCustomerViewModel) => {
    return updateCustomer({
      variables: {
        updateCustomerId: customerId,
        updateCustomerInput: mapViewModelToDto(dataVM),
      },
      onCompleted: ({ updateCustomer }) => {
        toast.success(`${updateCustomer.naming} a été modifié(e) avec succès.`);
        navigate(`/backoffice/customers/view/${updateCustomer.id}`);
      },
      onError: () =>
        toast.error(
          `La modification du client ${data?.getCustomer?.naming} a échouée.`
        ),
    });
  };

  if (loading) return <Loader></Loader>;
  return (
    <UpdateCustomerLogic
      defaultValues={mapDtoToViewModel(data)}
      onSubmit={handleSubmit}
      errors={error?.graphQLErrors}
    ></UpdateCustomerLogic>
  );
};
