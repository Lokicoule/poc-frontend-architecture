import { ButtonBase, Toolbar } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { DEFAULT_PATH } from "../../../../../constants/globals";

export const LogoSection = () => {
  return (
    <Toolbar>
      <ButtonBase disableRipple component={Link} to={DEFAULT_PATH}>
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
