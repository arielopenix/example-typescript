import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import React from "react";
import ListItemText from "@material-ui/core/ListItemText";
import { useStyles } from "./MenuStyles";
import logo from "../../assets/img/logo.png";


type menuProps = {
  items: any[];
};

const Menu = ({ items }: menuProps) => {
  const classes = useStyles();
  console.log(items);
  return (
    <>
      <div>
        <div className={classes.toolbar} >
          <img alt="Web Logo" className={classes.logo} src={logo} />
        </div>
        <List>
          {items.map((item, index) => {
            const { text, icon, onClick } = item;
            return (
              <ListItem button key={index} onClick={onClick}>
                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                <ListItemText className={classes.text} primary={text} />
              </ListItem>
            );
          })}
        </List>
      </div>
    </>
  );
};

export default Menu;
