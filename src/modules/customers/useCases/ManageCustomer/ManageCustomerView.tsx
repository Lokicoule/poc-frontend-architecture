import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { Button, Grid, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { FeatureLayout } from "../../../../layouts";
import { CustomerViewModel } from "../../domain/customers.model";
import { customersNavigationHelper } from "../../helpers/customers-navigation.helper";

export type ManageCustomerViewProps = {
  defaultValues: CustomerViewModel;
  onRemove: () => Promise<void>;
};

export const ManageCustomerView = ({
  defaultValues,
  onRemove,
}: ManageCustomerViewProps) => {
  return (
    <FeatureLayout title="Informations client">
      <Grid mt={2} container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Code client"
            fullWidth
            disabled
            defaultValue={defaultValues.code}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Nom client"
            fullWidth
            disabled
            defaultValue={defaultValues.naming}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            label="Code postal"
            fullWidth
            disabled
            defaultValue={defaultValues.zipCode}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            label="Ville"
            fullWidth
            disabled
            defaultValue={defaultValues.city}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Adresse"
            fullWidth
            disabled
            defaultValue={defaultValues.address}
          />
        </Grid>
      </Grid>

      <Grid container mt={3} spacing={3} justifyContent="flex-end">
        <Grid item>
          <Button
            component={Link}
            variant="outlined"
            to={customersNavigationHelper.update(defaultValues.id)}
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
