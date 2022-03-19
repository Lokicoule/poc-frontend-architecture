import { SetStateAction, useState } from "react";
import {
  ManageReferentialProductsView,
  ManageReferentialProductsViewProps,
} from "./ManageReferentialProductsView";

type ManageReferentialProductsLogicProps = Pick<
  ManageReferentialProductsViewProps,
  "data"
>;

export const ManageReferentialProductsLogic = ({
  data,
}: ManageReferentialProductsLogicProps) => {
  const [search, setSearch] = useState("");

  const handleSearch = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearch(event.target.value);
  };

  const filteredDataVM = data?.filter((item) =>
    item.useCase.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ManageReferentialProductsView
      data={filteredDataVM}
      onSearch={handleSearch}
    ></ManageReferentialProductsView>
  );
};
