import { FetchResult } from "@apollo/client";
import { SetStateAction, useState } from "react";
import { toast } from "react-toastify";
import { RemoveProductsMutation } from "../../operations/products.generated";
import {
  ManageProductsView,
  ManageProductsViewProps,
} from "./ManageProductsView";

type ManageProductsLogicProps = Pick<ManageProductsViewProps, "data"> & {
  onRemove: (
    ids: string[]
  ) => Promise<
    FetchResult<
      RemoveProductsMutation,
      Record<string, any>,
      Record<string, any>
    >
  >;
};

export const ManageProductsLogic = ({
  data,
  onRemove,
}: ManageProductsLogicProps) => {
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
          `Les produits sélectionnés ont étés supprimés avec succès.`
        );
      })
      .catch((error) =>
        toast.error(`La suppression des produits sélectionnés a échoué.`)
      );
  };

  const filteredDataVM = data?.filter(
    (item) =>
      item.label.toLowerCase().includes(search.toLowerCase()) ||
      item.code.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ManageProductsView
      data={filteredDataVM}
      onRemove={handleRemove}
      onSearch={handleSearch}
    ></ManageProductsView>
  );
};
