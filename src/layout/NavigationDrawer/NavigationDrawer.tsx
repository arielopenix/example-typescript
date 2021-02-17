import React from "react";
import Drawer from "@material-ui/core/Drawer";
import { useStyles } from "./NavigationDrawerStyles";
import Hidden from "@material-ui/core/Hidden";
import Menu from "../../layout/Menu/Menu";
import logo from "../../assets/img/logo.png";
import { useTheme } from "@material-ui/core/styles";

type NavigationDrawerProps = {
  container: any;
  onclose: any;
  open: any;
};

const NavigationDrawer = ({
  container,
  onclose,
  open,
}: NavigationDrawerProps) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      (/**Mobile */)
      <Hidden smUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={open}
          onClose={onclose}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <Menu />
        </Drawer>
      </Hidden>
      (/**Desktop */)
      <Hidden xsDown implementation="css">
        <img alt="Web Logo" className={classes.logo} src={logo} />
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          <Menu />
        </Drawer>
      </Hidden>
    </nav>
  );
};

export default NavigationDrawer;
