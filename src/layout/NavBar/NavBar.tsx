import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import useStyles from "./NavBarStyles";
import Button from "@material-ui/core/Button";

type NavbarProps = {
  onclick: any;
};

const NavBar = ({ onclick }: NavbarProps) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={onclick}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Button variant="contained">Default</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default NavBar;
