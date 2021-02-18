import React from "react";
import Drawer from "@material-ui/core/Drawer";
import { useStyles } from "./NavigationDrawerStyles";
import Hidden from "@material-ui/core/Hidden";
import Menu from "../../layout/Menu/Menu";
import InboxIcon from "@material-ui/icons/MoveToInbox";
//import logo from "../../assets/img/logo.png";
import { useTheme } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import Box from "@material-ui/core/Box/Box";

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
  const desktopMenuItems = [
    {
      text: "Ingreso Manual",
      icon: <InboxIcon />,
      onClick: () => history.push("/dashboard/manualInput"),
    },
    {
      text: "Escanear Documento",
      icon: <InboxIcon />,
      onClick: () => history.push("/dashboard/scanDocument"),
    },
    {
      text: "Escanear QR",
      icon: <InboxIcon />,
      onClick: () => history.push("/dashboard/scanQR"),
    },
    {
      text: "Solicitudes Pendientes",
      icon: <InboxIcon />,
      onClick: () => history.push("/dashboard/awaitingRequest"),
    },
    {
      text: "Registrar salida",
      icon: <InboxIcon />,
      onClick: () => history.push("/dashboard/registerExit"),
    },
  ];
  const mobileMenuItems = [
    {
      text: "Idioma",
      icon: <InboxIcon />,
      onClick: () => history.push("/dashboard/manualInput"),
    },
    {
      text: "Cerrar Sesion",
      icon: <InboxIcon />,
      onClick: () => history.push("/dashboard/manualInput"),
    },
  ];

  return (
    <div aria-label="mailbox folders">
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
          <Menu items={mobileMenuItems} />
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          <Menu items={desktopMenuItems} />
          <Box className={classes.mobilemenu}>
            <Menu items={mobileMenuItems} />
          </Box>
        </Drawer>
      </Hidden>
    </div>
  );
};

export default NavigationDrawer;
