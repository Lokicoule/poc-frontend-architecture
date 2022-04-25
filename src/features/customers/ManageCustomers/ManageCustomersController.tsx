import { toast } from "react-toastify";
import {
  GetCustomersQuery,
  useGetCustomersQuery,
  useRemoveCustomersMutation,
} from "../../../api/fdo/operations/customers.generated";
import { Loader } from "../../../components/Loaders/Loader";
import { CustomerViewModel } from "../../../viewModels/customers";
import { ManageCustomersLogic } from "./ManageCustomersLogic";

export const ManageCustomersController = () => {
  const { data, loading } = useGetCustomersQuery({
    fetchPolicy: "cache-first", //default
    pollInterval: 300000,
  });
  const [removeCustomers] = useRemoveCustomersMutation({
    refetchQueries: ["GetCustomers"],
  });

  const handleRemove = (ids: string[]) => {
    return removeCustomers({
      variables: {
        ids,
      },
      onCompleted: () => {
        toast.success(
          `Les clients sélectionné(e)s ont étés supprimé(e)s avec succès.`
        );
      },
      onError: () =>
        toast.error(`La suppression des clients sélectionné(e)s a échouée.`),
    });
  };

  const mapDtoToViewModel = (
    dataDto: GetCustomersQuery | null | undefined
  ): CustomerViewModel[] => {
    return dataDto?.getCustomers?.map(
      (customer) =>
        ({
          id: customer?.id,
          code: customer?.code,
          naming: customer?.naming,
          address: customer?.address,
          city: customer?.city,
          zipCode: customer?.zipCode,
        } as CustomerViewModel)
    ) as CustomerViewModel[];
  };

  if (loading) return <Loader></Loader>;
  return (
    <ManageCustomersLogic
      data={mapDtoToViewModel(data)}
      onRemove={handleRemove}
    ></ManageCustomersLogic>
  );
};
