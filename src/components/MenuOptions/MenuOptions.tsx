import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import { useStyles } from "./MenuOptionsStyle";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import Slide from "@material-ui/core/Slide";
import { TransitionProps } from "@material-ui/core/transitions";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import LanguageIcon from '@material-ui/icons/Language';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';


const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const MenuOptions = () => {
  const [open, setOpen] = React.useState(false);
  const [openDialog, setOpenDialog] = React.useState(false);
  const classes = useStyles();
  const history = useHistory();

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const handleConfirm = () => {
    history.replace("/login");
    setOpenDialog(false);  
  }

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <List component="nav" aria-labelledby="nested-list-subheader">
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <LanguageIcon className={classes.icon} />
          </ListItemIcon>
          <ListItemText primary="Idioma" className={classes.text} />
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary="Español" className={classes.text} />
            </ListItem>
            <ListItem button>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary="English" className={classes.text} />
            </ListItem>
            <ListItem button>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary="Português" className={classes.text} />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button>
          <ListItemIcon>
            <PowerSettingsNewIcon className={classes.icon} />
          </ListItemIcon>
          <ListItemText
            primary="Cerrar sesion"
            className={classes.text}
            onClick={handleClickOpen}
          />
        </ListItem>
      </List>
      <Dialog
        open={openDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          <Typography variant="subtitle2" gutterBottom>
            {"Confirmar cierre de sesion"}
          </Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <Typography variant="body2" gutterBottom>
              ¿Esta Seguro que desea cerrar sesion?
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" variant="outlined">
            Cancelar
          </Button>

          <Button onClick={handleConfirm} color="primary">
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default MenuOptions;
