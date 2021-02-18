import React from "react";
import Drawer from "@material-ui/core/Drawer";
import { useStyles } from "./NavigationDrawerStyles";
import Hidden from "@material-ui/core/Hidden";
import Menu from "../../layout/Menu/Menu";
import InboxIcon from "@material-ui/icons/MoveToInbox";
//import logo from "../../assets/img/logo.png";
import { useTheme } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

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
  const history = useHistory();
  const menuItems = [
    {
      text: "Menu1",
      icon: <InboxIcon/>,
      onClick: () => history.push('/')
    },
    {
      text: "Menu2",
      icon: <InboxIcon/>,
      onClick: () => history.push('/')
    },
    {
      text: "Menu3",
      icon: <InboxIcon/>,
      onClick: () => history.push('/')
    },
    {
      text: "Menu4",
      icon: <InboxIcon/>,
      onClick: () => history.push('/')
    },
    {
      text: "Menu5",
      icon: <InboxIcon/>,
      onClick: () => history.push('/')
    },
    {
      text: "Menu6",
      icon: <InboxIcon/>,
      onClick: () => history.push('/')
    },
  ]
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
          <Menu items={menuItems}/>
        </Drawer>
      </Hidden>
      (/**Desktop */)
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          <Menu items={menuItems}/>
        </Drawer>
      </Hidden>
    </nav>
  );
};

export default NavigationDrawer;
