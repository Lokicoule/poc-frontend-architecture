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
  const { data, loading } = useGetCustomerQuery({
    variables: {
      filter: { id: customerId },
    },
    fetchPolicy: "no-cache",
  });
  const [updateCustomer, { error }] = useUpdateCustomerMutation({});

  const mapViewModelToDto = (dataVM: UpdateCustomerViewModel) => ({
    address: dataVM.address,
    city: dataVM.city,
    code: dataVM.code,
    naming: dataVM.naming,
    zipCode: dataVM.zipCode,
    id: customerId,
  });

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
        updateCustomerInput: mapViewModelToDto(dataVM),
      },
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
