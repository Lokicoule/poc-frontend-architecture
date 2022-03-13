import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { Button, Grid, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { FeatureLayout } from "../../../layouts";
import { OrderViewModel } from "../../../view-models/orders";
import { OrderItemTable } from "./components/OrderItemTable";

export type ManageOrderViewProps = {
  defaultValues: OrderViewModel;
  onRemove: () => Promise<void>;
};

export const ManageOrderView = ({
  defaultValues,
  onRemove,
}: ManageOrderViewProps) => {
  return (
    <FeatureLayout title="Détails commande">
      <Grid mt={2} container spacing={2}>
        <Grid item xs={12} sm={3}>
          <TextField
            label="Code commande"
            fullWidth
            disabled
            defaultValue={defaultValues.code}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Client"
            fullWidth
            disabled
            //defaultValue={defaultValues.code}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Date commande "
            fullWidth
            disabled
            defaultValue={defaultValues?.billingDate}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Date échéance"
            fullWidth
            disabled
            defaultValue={defaultValues?.dueDate}
          />
        </Grid>
        <Grid item xs={12}>
          <OrderItemTable data={defaultValues.items}></OrderItemTable>
        </Grid>
      </Grid>

      <Grid container mt={3} spacing={3} justifyContent="flex-end">
        <Grid item>
          <Button
            component={Link}
            variant="outlined"
            to={`/backoffice/orders/update/${defaultValues.id}`}
            endIcon={<ModeEditIcon />}
          >
            Modifier
          </Button>
        </Grid>
        <Grid item sx={{ mt: 1 }}>
          ou
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            color="secondary"
            endIcon={<DeleteIcon />}
            onClick={onRemove}
          >
            Supprimer
          </Button>
        </Grid>
      </Grid>
    </FeatureLayout>
  );
};
