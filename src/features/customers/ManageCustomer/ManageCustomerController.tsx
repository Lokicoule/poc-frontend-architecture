import { useNavigate } from "react-router-dom";
import {
  GetCustomerQuery,
  useGetCustomerQuery,
  useRemoveCustomerMutation,
} from "../../../api/hooks/customers.generated";
import { Loader } from "../../../components";
import { CustomerViewModel } from "../../../view-models/domain/customers";
import { ManageCustomerLogic } from "./ManageCustomerLogic";

type ManageCustomerControllerProps = {
  customerId: string | undefined;
};

export const ManageCustomerController = ({
  customerId = "",
}: ManageCustomerControllerProps) => {
  let navigate = useNavigate();
  const [removeCustomer] = useRemoveCustomerMutation();
  const { data, loading } = useGetCustomerQuery({
    variables: {
      filter: { id: customerId },
    },
    fetchPolicy: "no-cache",
  });

  const mapDtoToViewModel = (
    dataDto: GetCustomerQuery | undefined
  ): CustomerViewModel => {
    const customer = dataDto?.getCustomer;
    return {
      address: customer?.address || "",
      city: customer?.city || "",
      code: customer?.code || "",
      naming: customer?.naming || "",
      zipCode: customer?.zipCode || "",
      id: customerId,
    };
  };

  const handleRemove = () =>
    removeCustomer({
      variables: {
        removeCustomerId: customerId,
      },
      onCompleted: () =>
        window.setTimeout(() => {
          navigate("/backoffice/customers");
        }, 500),
    });

  if (loading) return <Loader></Loader>;
  return (
    <ManageCustomerLogic
      defaultValues={mapDtoToViewModel(data)}
      onRemove={handleRemove}
    ></ManageCustomerLogic>
  );
};
