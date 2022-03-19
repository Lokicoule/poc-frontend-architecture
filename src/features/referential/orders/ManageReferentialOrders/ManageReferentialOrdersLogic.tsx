import { SetStateAction, useState } from "react";
import {
  ManageReferentialOrdersView,
  ManageReferentialOrdersViewProps,
} from "./ManageReferentialOrdersView";

type ManageReferentialOrdersLogicProps = Pick<
  ManageReferentialOrdersViewProps,
  "data"
>;

export const ManageReferentialOrdersLogic = ({
  data,
}: ManageReferentialOrdersLogicProps) => {
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
    <ManageReferentialOrdersView
      data={filteredDataVM}
      onSearch={handleSearch}
    ></ManageReferentialOrdersView>
  );
};
