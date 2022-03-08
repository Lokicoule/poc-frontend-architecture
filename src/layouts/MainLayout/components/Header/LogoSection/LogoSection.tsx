import { ButtonBase, Toolbar } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { routesConfiguration } from "../../../../../constants/routesConfiguration";

export const LogoSection = () => {
  return (
    <Toolbar>
      <ButtonBase
        disableRipple
        component={Link}
        to={routesConfiguration.defaultPath}
      >
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
