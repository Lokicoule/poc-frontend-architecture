import { FetchResult } from "@apollo/client";
import { SetStateAction, useState } from "react";
import { RemoveOrdersMutation } from "../../../api/fdo/operations/orders.generated";
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
    await onRemove(ids).catch((err) => console.error(err));
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
