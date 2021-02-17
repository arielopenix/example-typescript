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
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: "#272643"
    },
    logo: {
      position: "absolute",
      height: "100px",
      
    }
  })
);
