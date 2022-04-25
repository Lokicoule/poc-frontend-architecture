import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  GetCustomerQuery,
  useGetCustomerQuery,
  useRemoveCustomerMutation,
} from "../../../api/fdo/operations/customers.generated";
import { Loader } from "../../../components/Loaders/Loader";
import { CustomerViewModel } from "../../../viewModels/customers";
import { ManageCustomerLogic } from "./ManageCustomerLogic";

type ManageCustomerControllerProps = {
  customerId: string | undefined;
};

export const ManageCustomerController = ({
  customerId = "",
}: ManageCustomerControllerProps) => {
  const navigate = useNavigate();
  const [removeCustomer] = useRemoveCustomerMutation({
    update(cache, { data: removeCustomerData }) {
      cache.modify({
        fields: {
          getCustomers(existingCustomersRef, { readField }) {
            return existingCustomersRef.filter(
              (customerRef: any) =>
                removeCustomerData?.removeCustomer.id !==
                readField("id", customerRef)
            );
          },
        },
      });
    },
  });
  const { data, loading } = useGetCustomerQuery({
    variables: {
      getCustomerId: customerId,
    },
    onError: () => navigate("/backoffice/customers"),
  });

  const mapDtoToViewModel = (
    dataDto: GetCustomerQuery | undefined
  ): Readonly<CustomerViewModel> => {
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
  const handleRemove = (id: string) =>
    removeCustomer({
      variables: {
        removeCustomerId: id,
      },
      onCompleted: () => {
        toast.success(
          `${data?.getCustomer?.naming} a été supprimé(e) avec succès.`
        );
        navigate("/backoffice/customers");
      },
    });

  if (loading) return <Loader></Loader>;

  return (
    <ManageCustomerLogic
      defaultValues={mapDtoToViewModel(data)}
      onRemove={handleRemove}
    ></ManageCustomerLogic>
  );
};
