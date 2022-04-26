import { GraphQLErrors } from "@apollo/client/errors";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { FC } from "react";

export type FormProps = {
  errors?: GraphQLErrors | undefined;
  onReset: () => void;
  onSubmit: (data: any) => Promise<void>;
};

export const Form: FC<FormProps> = ({
  onSubmit,
  onReset,
  errors,
  children,
}) => {
  const theme = useTheme();

  return (
    <Box component="form" onSubmit={onSubmit} sx={{ mt: 3 }}>
      {children}
      {errors && (
        <Typography
          color={theme.palette.error.main}
          sx={{ mt: 3 }}
          align="left"
        >
          {errors.map(({ message }, i) => (
            <span key={`create-customer-error${i}`}>{message}</span>
          ))}
        </Typography>
      )}

      <Grid
        container
        justifyContent={"flex-end"}
        sx={{ mt: 3, mb: 2 }}
        spacing={3}
      >
        <Grid item>
          <Button onClick={onReset} variant={"outlined"}>
            Reset
          </Button>
        </Grid>
        <Grid item>
          <Button type="submit" variant="contained">
            Enregistrer
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
