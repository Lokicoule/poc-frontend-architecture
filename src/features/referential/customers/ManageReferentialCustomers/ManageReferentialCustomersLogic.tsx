import { SetStateAction, useState } from "react";
import {
  ManageReferentialCustomersView,
  ManageReferentialCustomersViewProps,
} from "./ManageReferentialCustomersView";

type ManageReferentialCustomersLogicProps = Pick<
  ManageReferentialCustomersViewProps,
  "data"
>;

export const ManageReferentialCustomersLogic = ({
  data,
}: ManageReferentialCustomersLogicProps) => {
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
    <ManageReferentialCustomersView
      data={filteredDataVM}
      onSearch={handleSearch}
    ></ManageReferentialCustomersView>
  );
};
