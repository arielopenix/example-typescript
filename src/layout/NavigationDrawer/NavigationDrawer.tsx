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
import MenuOptions from '../../components/MenuOptions/MenuOptions';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import SettingsOverscanIcon from '@material-ui/icons/SettingsOverscan';
import CropFreeIcon from '@material-ui/icons/CropFree';
import PanToolIcon from '@material-ui/icons/PanTool';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

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
      icon: <KeyboardIcon className={classes.icon}/>,
      onClick: () => history.push("/dashboard/manualInput"),
    },
    {
      text: "Escanear Documento",
      icon: <SettingsOverscanIcon className={classes.icon}/>,
      onClick: () => history.push("/dashboard/scanDocument"),
    },
    {
      text: "Escanear QR",
      icon: <CropFreeIcon className={classes.icon}/>,
      onClick: () => history.push("/dashboard/scanQR"),
    },
    {
      text: "Solicitudes Pendientes",
      icon: <PanToolIcon className={classes.icon}/>,
      onClick: () => history.push("/dashboard/awaitingRequest"),
    },
    {
      text: "Registrar salida",
      icon: <ExitToAppIcon className={classes.icon}/>,
      onClick: () => history.push("/dashboard/registerExit"),
    },
  ];
  const mobileMenuItems = [
    {
      text: "Idioma",
      icon: <InboxIcon className={classes.icon}/>,
      onClick: () => history.push("/dashboard/manualInput"),
    },
    {
      text: "Cerrar Sesion",
      icon: <InboxIcon className={classes.icon}/>,
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
            <MenuOptions/>
          </Box>
        </Drawer>
      </Hidden>
    </div>
  );
};

export default NavigationDrawer;
