import { FetchResult } from "@apollo/client";
import { SetStateAction, useState } from "react";
import { toast } from "react-toastify";
import { RemoveCustomersMutation } from "../../operations/customers.generated";
import {
  ManageCustomersView,
  ManageCustomersViewProps,
} from "./ManageCustomersView";

type ManageCustomersLogicProps = Pick<ManageCustomersViewProps, "data"> & {
  onRemove: (
    ids: string[]
  ) => Promise<
    FetchResult<
      RemoveCustomersMutation,
      Record<string, any>,
      Record<string, any>
    >
  >;
};

export const ManageCustomersLogic = ({
  data,
  onRemove,
}: ManageCustomersLogicProps) => {
  const [search, setSearch] = useState("");

  const handleSearch = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearch(event.target.value);
  };

  const handleRemove = async (ids: string[]) => {
    await onRemove(ids)
      .then((result) => {
        toast.success(
          `Les clients sélectionné(e)s ont étés supprimé(e)s avec succès.`
        );
      })
      .catch((error) =>
        toast.error(`La suppression des clients sélectionné(e)s a échouée.`)
      );
  };

  const filteredDataVM = data?.filter(
    (item) =>
      item.naming.toLowerCase().includes(search.toLowerCase()) ||
      item.code.toLowerCase().includes(search.toLowerCase()) ||
      item.zipCode.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ManageCustomersView
      data={filteredDataVM}
      onRemove={handleRemove}
      onSearch={handleSearch}
    ></ManageCustomersView>
  );
};
