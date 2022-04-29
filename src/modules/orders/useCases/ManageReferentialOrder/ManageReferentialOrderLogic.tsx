import { SetStateAction, useState } from "react";
import {
  ManageReferentialOrderView,
  ManageReferentialOrderViewProps,
} from "./ManageReferentialOrderView";

type ManageReferentialOrderLogicProps = Pick<
  ManageReferentialOrderViewProps,
  "data"
>;

export const ManageReferentialOrderLogic = ({
  data,
}: ManageReferentialOrderLogicProps) => {
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
    <ManageReferentialOrderView
      data={filteredDataVM}
      onSearch={handleSearch}
    ></ManageReferentialOrderView>
  );
};
