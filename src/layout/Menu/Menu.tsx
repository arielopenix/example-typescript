import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import React from "react";
import ListItemText from "@material-ui/core/ListItemText";
import { useStyles } from "./MenuStyles";

type menuProps = {
  items: any[];
};

const Menu = ({ items }: menuProps) => {
  const classes = useStyles();
  return (
    <>
      <div>
        <div className={classes.toolbar} />
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
