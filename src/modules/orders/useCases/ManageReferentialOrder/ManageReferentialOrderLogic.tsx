import { SetStateAction, useState } from "react";
import {
  ManageReferentialOrderView,
  ManageReferentialOrderViewProps,
} from "./ManageReferentialOrderView";

type ManageReferentialOrderLogicProps = Pick<
  ManageReferentialOrderViewProps,
  "referentialOrderList"
>;

export const ManageReferentialOrderLogic = ({
  referentialOrderList,
}: ManageReferentialOrderLogicProps) => {
  const [search, setSearch] = useState("");

  const handleSearch = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearch(event.target.value);
  };

  const filteredDataVM = referentialOrderList?.filter((item) =>
    item.useCase.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ManageReferentialOrderView
      referentialOrderList={filteredDataVM}
      onSearch={handleSearch}
    ></ManageReferentialOrderView>
  );
};
