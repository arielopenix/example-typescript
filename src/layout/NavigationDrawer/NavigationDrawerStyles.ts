import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
const drawerWidth = 253;

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
      
    },
    icon: {
      height: "17px",
      weight: "17px",
      color: "#FFFFFF"
    },
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: "#272643"
    },
    logo: {
      position: "absolute",
      height: "100px",
      
    },
    mobilemenu: {
      position: "absolute",
      bottom: "0px"
    }
  })
);
