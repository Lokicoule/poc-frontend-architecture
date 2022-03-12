import { FetchResult } from "@apollo/client";
import { SetStateAction, useState } from "react";
import { RemoveProductsMutation } from "../../../api/hooks/products.generated";
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
    await onRemove(ids).catch((err) => console.error(err));
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
