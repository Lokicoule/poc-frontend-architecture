import { Paper, Typography } from "@mui/material";
import { FC } from "react";

export type FeatureLayoutProps = {
  title: string;
};

export const FeatureLayout: FC<FeatureLayoutProps> = ({ title, children }) => {
  return (
    <Paper
      sx={{
        mt: 2,
        padding: 2,
      }}
    >
      <Typography variant="h5">{title}</Typography>
      {children}
    </Paper>
  );
};
