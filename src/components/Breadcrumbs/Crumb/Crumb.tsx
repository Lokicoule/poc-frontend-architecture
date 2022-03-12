import { Typography } from "@mui/material";
import { LinkRouter } from "../../Link";

export const Crumb = ({
  name,
  to,
  last = false,
}: {
  name: string;
  to: string;
  last: boolean;
}) =>
  last ? (
    <Typography color="text.primary">{name}</Typography>
  ) : (
    <LinkRouter underline="hover" color="inherit" to={to}>
      {name}
    </LinkRouter>
  );
