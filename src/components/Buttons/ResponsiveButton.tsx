import {
  Button,
  Fab,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";

export type ResponsiveLinkButtonProps = {
  to: string;
  label: string;
  iconComponent: JSX.Element;
};

export const ResponsiveLinkButton = ({
  to,
  label,
  iconComponent,
}: ResponsiveLinkButtonProps) => {
  const theme = useTheme();
  const matchUpSM = useMediaQuery(theme.breakpoints.up("sm"));
  const buttonComponent = matchUpSM ? (
    <Button
      component={Link}
      variant="contained"
      style={{ textTransform: "none" }}
      to={to}
    >
      {label}
    </Button>
  ) : (
    <IconButton size="medium" component={Link} to={to}>
      <Fab color="primary">{iconComponent}</Fab>
    </IconButton>
  );
  return buttonComponent;
};
