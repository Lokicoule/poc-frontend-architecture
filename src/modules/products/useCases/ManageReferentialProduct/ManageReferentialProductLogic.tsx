import { SetStateAction, useState } from "react";
import {
  ManageReferentialProductView,
  ManageReferentialProductViewProps,
} from "./ManageReferentialProductView";

type ManageReferentialProductsLogicProps = Pick<
  ManageReferentialProductViewProps,
  "data"
>;

export const ManageReferentialProductLogic = ({
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
    <ManageReferentialProductView
      data={filteredDataVM}
      onSearch={handleSearch}
    ></ManageReferentialProductView>
  );
};
