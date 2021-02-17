import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import React from "react";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import ListItemText from "@material-ui/core/ListItemText";
import DraftsIcon from "@material-ui/icons/Drafts";
import { useStyles } from "./MenuStyles";

const Menu = () => {
  const classes = useStyles();
  return (
    <>
      <div>
        <div className={classes.toolbar} />
        <List>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon className={classes.icon}/>
            </ListItemIcon>
            <ListItemText className={classes.text} primary="Ingreso Manual" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <DraftsIcon className={classes.icon}/>
            </ListItemIcon>
            <ListItemText className={classes.text} primary="Escanear Documento" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <DraftsIcon className={classes.icon}/>
            </ListItemIcon>
            <ListItemText className={classes.text} primary="Escanear QR" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <DraftsIcon className={classes.icon}/>
            </ListItemIcon>
            <ListItemText className={classes.text} primary="Solicitudes pendientes" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <DraftsIcon className={classes.icon}/>
            </ListItemIcon>
            <ListItemText className={classes.text} primary="Registrar salida" />
          </ListItem>
        </List>

        <List>
        <ListItem button>
            <ListItemIcon>
              <DraftsIcon className={classes.icon}/>
            </ListItemIcon>
            <ListItemText className={classes.text} primary="Idioma" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <DraftsIcon className={classes.icon}/>
            </ListItemIcon>
            <ListItemText className={classes.text} primary="Cerrar Sesion" />
          </ListItem>
        </List>
      </div>
    </>
  );
};

export default Menu;
