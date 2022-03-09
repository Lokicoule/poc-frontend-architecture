import { FetchResult } from "@apollo/client";
import { SetStateAction, useState } from "react";
import { RemoveCustomersMutation } from "../../../api/hooks/customers.generated";
import { ManageCustomersView, Props as ViewProps } from "./ManageCustomersView";

interface Props extends Pick<ViewProps, "data"> {
  onRemove: (
    ids: string[]
  ) => Promise<
    FetchResult<
      RemoveCustomersMutation,
      Record<string, any>,
      Record<string, any>
    >
  >;
}

export const ManageCustomersLogic = ({ data, onRemove }: Props) => {
  const [search, setSearch] = useState("");
  const handleSearch = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearch(event.target.value);
  };
  const handleRemove = async (ids: string[]) => {
    await onRemove(ids).catch((err) => console.error(err));
  };

  const filteredDataVM = data.filter(
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
