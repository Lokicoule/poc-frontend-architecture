import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { Button, Grid, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { FeatureLayout } from "../../../../layouts";
import { ProductViewModel } from "../../../../viewModels/products";

export type ManageProductViewProps = {
  defaultValues: ProductViewModel;
  onRemove: () => Promise<void>;
};

export const ManageProductView = ({
  defaultValues,
  onRemove,
}: ManageProductViewProps) => {
  return (
    <FeatureLayout title="Informations client">
      <Grid mt={2} container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Code produit"
            fullWidth
            disabled
            defaultValue={defaultValues.code}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Label produit"
            fullWidth
            disabled
            defaultValue={defaultValues.label}
          />
        </Grid>
      </Grid>

      <Grid container mt={3} spacing={3} justifyContent="flex-end">
        <Grid item>
          <Button
            component={Link}
            variant="outlined"
            to={`/backoffice/products/update/${defaultValues.id}`}
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
