import { FetchResult } from "@apollo/client";
import { SetStateAction, useState } from "react";
import { toast } from "react-toastify";
import { RemoveOrdersMutation } from "../../operations/orders.generated";
import { ManageOrdersView, ManageOrdersViewProps } from "./ManageOrdersView";

type ManageOrdersLogicProps = Pick<ManageOrdersViewProps, "data"> & {
  onRemove: (
    ids: string[]
  ) => Promise<
    FetchResult<RemoveOrdersMutation, Record<string, any>, Record<string, any>>
  >;
};

export const ManageOrdersLogic = ({
  data,
  onRemove,
}: ManageOrdersLogicProps) => {
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
          `Les commandes sélectionné(e)s ont étés supprimé(e)s avec succès.`
        );
      })
      .catch((error) =>
        toast.error(`La suppression des commandes sélectionné(e)s a échouée.`)
      );
  };

  const filteredDataVM = data?.filter((item) =>
    item.code.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ManageOrdersView
      data={filteredDataVM}
      onRemove={handleRemove}
      onSearch={handleSearch}
    ></ManageOrdersView>
  );
};
