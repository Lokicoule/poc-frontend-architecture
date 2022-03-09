import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { Customer } from "../../../api/types/types.generated";
import { ColumnProps, EnhancedTable } from "../../../components/Tables";
import { CustomerViewModel } from "../../../view-models/domain/customers";

export interface Props {
  data: CustomerViewModel[];
  onRemove: (ids: string[]) => Promise<void>;
}

export const ManageCustomersView = ({ data = [], onRemove }: Props) => {
  const columns: ColumnProps[] = [
    {
      label: "Code client",
      key: "code",
      sortable: true,
      content: (item: Customer) => (
        <Link to={`/backoffice/customers/view/${item.id}`}>{item.code}</Link>
      ),
    },
    {
      label: "Nom",
      path: "naming",
      key: "naming",
      sortable: true,
    },
    {
      label: "Address",
      path: "address",
      key: "address",
      sortable: true,
    },
    {
      label: "Modifier",
      path: "",
      key: "update",
      content: (item: Customer) => (
        <Link to={`/backoffice/customers/update/${item.id}`}>
          <IconButton>
            <EditIcon />
          </IconButton>
        </Link>
      ),
    },
  ];

  return (
    <EnhancedTable
      columns={columns}
      data={data}
      title="Customers Table"
      onRemove={onRemove}
    ></EnhancedTable>
  );
};
