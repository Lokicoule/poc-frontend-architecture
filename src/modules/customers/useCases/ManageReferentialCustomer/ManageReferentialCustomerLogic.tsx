import { SetStateAction, useState } from "react";
import {
  ManageReferentialCustomerView,
  ManageReferentialCustomerViewProps,
} from "./ManageReferentialCustomerView";

type ManageReferentialCustomerLogicProps = Pick<
  ManageReferentialCustomerViewProps,
  "referentialCustomerList"
>;

export const ManageReferentialCustomerLogic = ({
  referentialCustomerList,
}: ManageReferentialCustomerLogicProps) => {
  const [search, setSearch] = useState("");

  const handleSearch = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearch(event.target.value);
  };

  const filteredDataVM = referentialCustomerList?.filter((item) =>
    item.useCase.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ManageReferentialCustomerView
      referentialCustomerList={filteredDataVM}
      onSearch={handleSearch}
    ></ManageReferentialCustomerView>
  );
};
