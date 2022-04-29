import { SetStateAction, useState } from "react";
import {
  ManageReferentialCustomerView,
  ManageReferentialCustomerViewProps,
} from "./ManageReferentialCustomerView";

type ManageReferentialCustomerLogicProps = Pick<
  ManageReferentialCustomerViewProps,
  "data"
>;

export const ManageReferentialCustomerLogic = ({
  data,
}: ManageReferentialCustomerLogicProps) => {
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
    <ManageReferentialCustomerView
      data={filteredDataVM}
      onSearch={handleSearch}
    ></ManageReferentialCustomerView>
  );
};
