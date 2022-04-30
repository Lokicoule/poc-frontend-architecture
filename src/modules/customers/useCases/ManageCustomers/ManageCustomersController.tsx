import { toast } from "react-toastify";
import { Loader } from "../../../../components/Loader";
import { useGetCustomersFacade } from "../../hooks/useGetCustomersFacade";
import { useRemoveCustomersMutation } from "../../operations/customers.generated";
import { ManageCustomersLogic } from "./ManageCustomersLogic";

export const ManageCustomersController = () => {
  const { customers, loading } = useGetCustomersFacade();
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

  if (loading) return <Loader></Loader>;
  return (
    <ManageCustomersLogic
      data={customers}
      onRemove={handleRemove}
    ></ManageCustomersLogic>
  );
};
