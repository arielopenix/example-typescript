import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import useStyles from "./NavBarStyles";
import Avatar from "@material-ui/core/Avatar";
import avatar from "../../assets/img/guardia.jpg";
import Badge from "@material-ui/core/Badge";
import { withStyles, Theme, createStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";

const StyledBadge = withStyles((theme: Theme) =>
  createStyles({
    badge: {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "$ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  })
)(Badge);

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
            color="primary"
            aria-label="open drawer"
            edge="start"
            onClick={onclick}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <List className={classes.list}>
            <ListItem className={classes.listItem}>
              <ListItemAvatar>
                <StyledBadge
                  overlap="circle"
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  variant="dot"
                >
                  <Avatar alt="Guard" src={avatar} />
                </StyledBadge>
              </ListItemAvatar>
              <ListItemText className={classes.data} primary="Juan Perez" secondary="Complejo Los Ceibos"/>
            </ListItem>
          </List>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default NavBar;
