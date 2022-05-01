import { SetStateAction, useState } from "react";
import {
  ManageReferentialProductView,
  ManageReferentialProductViewProps,
} from "./ManageReferentialProductView";

type ManageReferentialProductsLogicProps = Pick<
  ManageReferentialProductViewProps,
  "referentialProductList"
>;

export const ManageReferentialProductLogic = ({
  referentialProductList,
}: ManageReferentialProductsLogicProps) => {
  const [search, setSearch] = useState("");

  const handleSearch = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearch(event.target.value);
  };

  const filteredDataVM = referentialProductList?.filter((item) =>
    item.useCase.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ManageReferentialProductView
      referentialProductList={filteredDataVM}
      onSearch={handleSearch}
    ></ManageReferentialProductView>
  );
};
