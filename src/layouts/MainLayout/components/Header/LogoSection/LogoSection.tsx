import { ButtonBase, Toolbar } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { DEFAULT_PATH } from "../../../../../constants/globals";

type LogoSectionProps = {
  to?: string;
};

export const LogoSection = ({ to = DEFAULT_PATH }: LogoSectionProps) => {
  return (
    <Toolbar>
      <ButtonBase disableRipple component={Link} to={to}>
        <Typography
          fontFamily="fantasy"
          variant="h5"
          noWrap
          sx={{ flexGrow: 1 }}
          component="div"
        >
          Fruits d'orient
        </Typography>
      </ButtonBase>
    </Toolbar>
  );
};
