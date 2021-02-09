import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import useStyles from "./NavBarStyles";

const NavBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            PassApp
          </Typography>
          <Button color="inherit">Cerrar Sesion</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default NavBar;
